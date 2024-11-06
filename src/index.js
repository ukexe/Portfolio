// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { register } from './serviceWorker';
import reportWebVitals from './reportWebVitals';
import ErrorBoundary from './components/ErrorBoundary';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
    <React.StrictMode>
        <ErrorBoundary>
            <App />
        </ErrorBoundary>
    </React.StrictMode>
);

register();
reportWebVitals(console.log);
