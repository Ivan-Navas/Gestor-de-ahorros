import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {Auth0Provider} from '@auth0/auth0-react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider 
  domain='dev-8zg23n3hta4o48tj.us.auth0.com'
  clientId='L5CWawwQ8RkXBqw0rLZek7eeXvcJAYo5'
  authorizationParams={{
    redirect_uri: window.location.origin
  }}>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </Auth0Provider>
)
