"use client";
import { useState } from 'react';
import { Home as HomeContent } from '../views/Home';
import { LoadingScreen } from '../components/LoadingScreen';

export default function Page() {
  const [appLoaded, setAppLoaded] = useState(false);

  return (
    <>
      <LoadingScreen isVisible={!appLoaded} />
      <HomeContent onLoaded={() => setAppLoaded(true)} />
    </>
  );
}
