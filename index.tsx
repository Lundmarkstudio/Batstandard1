
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');

if (!rootElement) {
  console.error("Fatal: Could not find root element. The HTML structure might be corrupted.");
} else {
  try {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } catch (err) {
    console.error("React Rendering Error:", err);
    rootElement.innerHTML = `<div style="padding: 20px; text-align: center; font-family: sans-serif;">
      <h2>Алдаа гарлаа</h2>
      <p>Аппликейшн ачаалахад алдаа гарлаа. Консол дээрх алдааг шалгана уу.</p>
    </div>`;
  }
}
