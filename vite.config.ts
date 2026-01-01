import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, (process as any).cwd(), '');
  return {
    plugins: [react()],
    define: {
      // Directly replace these specific tokens in the code
      'process.env.API_KEY': JSON.stringify(env.API_KEY),
      'process.env.AZURE_SPEECH_KEY': JSON.stringify(env.AZURE_SPEECH_KEY),
      'process.env.AZURE_SPEECH_REGION': JSON.stringify(env.AZURE_SPEECH_REGION),
    }
  }
})