// src/components/SplashScreen.jsx
import React, { useEffect, useState } from 'react';
import "..//css/SplashScreen.css"; // Create your styles

const SplashScreen = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Hide splash after 3 seconds
    const splashTimeout = setTimeout(() => {
      setShowSplash(false);
    }, 3000); // 3000ms = 3 seconds

    return () => clearTimeout(splashTimeout); // Clean up the timeout
  }, []);

  if (!showSplash) return null;

  return (
    <div className="splash-screen">
        <div className="ribbon"></div>
      <img src="/koli-cap.jfif" alt="Splash" className="splash-image" />
      <div className="splash-title">SG Mart</div> {/* Title under the image */}
    </div>
  );
};

export default SplashScreen;
