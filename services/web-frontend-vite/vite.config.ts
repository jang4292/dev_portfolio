import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react-swc';
// https://vite.dev/config/
// 예: https://<USER>.github.io/<REPO>/
// 최종 URL: https://jang4292.github.io/dev_portfolio/web-frontend-vite/

export default defineConfig({
  plugins: [react()],
  base: '/dev_portfolio/web-frontend-vite/', // 중요: 하위 경로 배포용

  // GitHub Pages는 리포지토리 기반 경로(/<REPO>/…)를 사용합니다.
  // base가 맞지 않으면 CSS/asset 경로가 깨집니다.
});
