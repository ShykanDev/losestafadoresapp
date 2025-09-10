import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'los_estafadores_app',
  webDir: 'dist',
  plugins: {
    EdgeToEdge: {
      backgroundColor: '#322e87',
    },
    android: {
      adjustMarginsForEdgeToEdge: 'force'
    }
    
  }
};

export default config;
