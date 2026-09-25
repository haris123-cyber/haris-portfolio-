/**
 * Upload hero frames to Cloudinary
 * Usage: node scripts/upload-to-cloudinary.mjs
 *
 * Before running:
 *   1. Create a FREE account at https://cloudinary.com
 *   2. Go to Settings → Upload → Upload presets → Add upload preset
 *      - Set "Signing Mode" to "Unsigned"
 *      - Set folder to "portfolio-hero"
 *      - Save and copy the preset name
 *   3. Fill in CLOUD_NAME and UPLOAD_PRESET below
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import FormData from 'form-data';
import https from 'https';

// ─── CONFIG ────────────────────────────────────────────────────
const CLOUD_NAME = 'zuvsmr0q';
const UPLOAD_PRESET = 'hojzcc72';
const FOLDER = 'portfolio-hero';
// ───────────────────────────────────────────────────────────────

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const heroDir = path.join(__dirname, '..', 'public', 'images', 'hero');

if (CLOUD_NAME === 'YOUR_CLOUD_NAME') {
  console.error('❌ Please set CLOUD_NAME and UPLOAD_PRESET in the script first!');
  process.exit(1);
}

const files = fs.readdirSync(heroDir).filter(f => f.endsWith('.png')).sort();
console.log(`📦 Found ${files.length} frames to upload...\n`);

const results = {};
let uploaded = 0;
let failed = 0;

async function uploadFile(filename) {
  const filePath = path.join(heroDir, filename);
  const fileBuffer = fs.readFileSync(filePath);

  const form = new FormData();
  form.append('file', fileBuffer, { filename, contentType: 'image/png' });
  form.append('upload_preset', UPLOAD_PRESET);
  form.append('folder', FOLDER);
  form.append('public_id', filename.replace('.png', ''));

  return new Promise((resolve, reject) => {
    const req = https.request(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
      { method: 'POST', headers: form.getHeaders() },
      (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => {
          try {
            const json = JSON.parse(data);
            if (json.secure_url) resolve(json.secure_url);
            else reject(new Error(json.error?.message || 'Upload failed'));
          } catch (e) { reject(e); }
        });
      }
    );
    req.on('error', reject);
    form.pipe(req);
  });
}

// Upload with concurrency limit of 5
async function uploadAll() {
  const concurrency = 5;
  const queue = [...files];

  async function worker() {
    while (queue.length > 0) {
      const file = queue.shift();
      try {
        const url = await uploadFile(file);
        results[file] = url;
        uploaded++;
        process.stdout.write(`\r✅ ${uploaded}/${files.length} uploaded`);
      } catch (err) {
        failed++;
        console.error(`\n❌ Failed: ${file} — ${err.message}`);
      }
    }
  }

  await Promise.all(Array.from({ length: concurrency }, worker));

  console.log(`\n\n✅ Done! ${uploaded} uploaded, ${failed} failed.`);

  // Write results to a JSON file for reference
  const outPath = path.join(__dirname, 'cloudinary-urls.json');
  fs.writeFileSync(outPath, JSON.stringify(results, null, 2));
  console.log(`\n📄 URLs saved to scripts/cloudinary-urls.json`);
  console.log(`\n🔗 Base CDN URL:`);
  const sampleUrl = Object.values(results)[0];
  if (sampleUrl) {
    const base = sampleUrl.replace(/\/portfolio-hero\/frame_\d+$/, '');
    console.log(`   ${base}/portfolio-hero/`);
    console.log(`\n📋 Update Home.jsx GITHUB_CDN with:`);
    console.log(`   const CDN = '${base}/portfolio-hero/';`);
  }
}

uploadAll().catch(console.error);
