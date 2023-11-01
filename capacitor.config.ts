import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.myApp.app',
  appName: 'myApp',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
