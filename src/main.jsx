import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from "@material-tailwind/react";
import { store } from './Redux/store.js'
import { Provider } from 'react-redux'
import { GoogleOAuthProvider } from '@react-oauth/google';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <GoogleOAuthProvider clientId="930843495580-51s10de583b0h1olb3pp77ali30tiq9k.apps.googleusercontent.com">
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
    </GoogleOAuthProvider>
  </React.StrictMode>,
)
