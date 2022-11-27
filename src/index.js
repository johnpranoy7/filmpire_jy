import React from "react";
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>);

// npm install @alan-ai/alan-sdk-web @mui/icons-material @mui/mat
// erial @mui/styles @reduxjs/toolkit axios react-redux @emotion/styled @emotion/react