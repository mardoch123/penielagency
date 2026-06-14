import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './leaflet.css';
import App from './App.tsx';
import './index.css';

window.addEventListener('error', (e) => {
  const root = document.getElementById('root');
  if (root && root.children.length === 0) {
    root.innerHTML = `<div style="padding:20px;font-family:monospace;background:#fff3cd;color:#333;border:2px solid #f90;border-radius:8px;margin:20px;word-break:break-all">
      <h2 style="color:#c00;margin-top:0">Erreur JS</h2>
      <b>${e.message}</b><br><small>${e.filename}:${e.lineno}</small>
    </div>`;
  }
});

try {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
} catch (err: any) {
  const root = document.getElementById('root');
  if (root) {
    root.innerHTML = `<div style="padding:20px;font-family:monospace;background:#fff3cd;color:#333;border:2px solid #f90;border-radius:8px;margin:20px;word-break:break-all">
      <h2 style="color:#c00;margin-top:0">Erreur démarrage</h2>
      <b>${err?.message || String(err)}</b>
    </div>`;
  }
}
