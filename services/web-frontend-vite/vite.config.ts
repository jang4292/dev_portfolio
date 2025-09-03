import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
// 최종 URL: https://<USER>.github.io/<REPO>/rn/

export default defineConfig({
  plugins: [react()],
  base: '/dev_portfolio/web-frontend-vite/',   // 중요: 하위 경로 배포용

  // GitHub Pages는 리포지토리 기반 경로(/<REPO>/…)를 사용합니다. 
  // 앱을 /docs/rn에 둘 것이므로 실제 경로는 /<REPO>/rn/. 
  // base가 맞지 않으면 CSS/asset 경로가 깨집니다.
})
