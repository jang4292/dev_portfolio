import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

import App from './App.tsx';
import './index.css';

/*
  중요: GitHub Pages에서 BrowserRouter는 작동하지 않음.
  HashRouter를 사용해야 함.       
*/

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
);
