import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import FormData from 'form-data';
import https from 'https';

const CLOUD_NAME = 'zuvsmr0q';
const UPLOAD_PRESET = 'hojzcc72';
const FOLDER = 'portfolio-hero';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const heroDir = path.join(__dirname, '..', 'public', 'images', 'hero');

const failedFiles = ['frame_104.png', 'frame_108.png', 'frame_109.png', 'frame_110.png'];

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

for (const file of failedFiles) {
  try {
    const url = await uploadFile(file);
    console.log(`✅ ${file} → ${url}`);
  } catch (err) {
    console.error(`❌ ${file} — ${err.message}`);
  }
}
console.log('\nDone!');
