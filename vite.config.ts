import react from '@vitejs/plugin-react'
import vike from 'vike/plugin'
import { UserConfig } from 'vite'

const config: UserConfig = {
  plugins: [
    react(),
    vike({
      //
      prerender: true,
    }),
  ],
  ssr: {
    noExternal: [
      //
      'react-lazy-load-image-component',
    ],
  },
}

export default config
