import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);

// StrictMode -> it is a react helper tool it checks 
// --> The code warning and helps the developer write 
// clean code...

// createRoot => connect react with HTML Page 
// (react needs a place to display UI Page)
