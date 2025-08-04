'use client';

import { useEffect, useState } from 'react';

export default function AppInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstall, setShowInstall] = useState(false);
  const [showIosPrompt, setShowIosPrompt] = useState(false);

  useEffect(() => {
    const isIos = /iphone|ipad|ipod/i.test(window.navigator.userAgent.toLowerCase());
    const isInStandalone = window.matchMedia('(display-mode: standalone)').matches || (window.navigator as any).standalone;

    // iOS: Safari only
    if (isIos && !isInStandalone) {
      setShowIosPrompt(true);
    }

    // Android: beforeinstallprompt
    const handler = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstall(true);
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setShowInstall(false);
      setDeferredPrompt(null);
    }
  };

  if (!showInstall && !showIosPrompt) return null;

  return (
    <div style={{
      position: 'fixed',
      display: 'flex',
      alignItems: 'center',
      top: 0,
      backgroundColor: '#ffffff',
      padding: '10px',
      textAlign: 'center',
      zIndex: 1000,
      width: '100vw',
    }} className=''>
      {showInstall && (
        <>
          <p style={{ margin: 0 }}>Install this app on your device for a better experience.</p>
          <button onClick={handleInstall} style={{ marginTop: '8px', padding: '8px 16px' }}>
            Install
          </button>
        </>
      )}
      {showIosPrompt && (
        <p style={{ margin: 0 }}>
          📱 To install this app: Tap <strong>Share</strong> → <strong>Add to Home Screen</strong>
        </p>
      )}
    </div>
  );
}
