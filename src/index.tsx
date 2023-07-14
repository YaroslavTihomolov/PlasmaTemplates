import ReactDOM from 'react-dom';
import { DeviceThemeProvider, SSRProvider } from '@salutejs/plasma-ui';
import { GlobalStyle } from './GlobalStyle';
import React from 'react'
import App from './App';

ReactDOM.render(
    <DeviceThemeProvider>
        <SSRProvider>
            <App />
            <GlobalStyle />
        </SSRProvider>
    </DeviceThemeProvider>,
    document.getElementById('root'),
);