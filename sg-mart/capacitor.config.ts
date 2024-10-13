import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.sgmart.app',
  appName: 'SG Mart',
  webDir: 'dist',
  plugins: {
    SplashScreen: {
      launchShowDuration: 0, 
      launchAutoHide: true,     
      androidScaleType: 'CENTER_CROP',
      showSpinner: false,      
      splashFullScreen: false,
      splashImmersive: false,
    },
    icon: {
      android: './/public/ic_launcher_round.png',
      ios: 'path_to_your_icon/icon.png',
    },
  },
};

export default config;



