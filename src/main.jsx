import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// import ReactModal from 'react-modal';

// ReactModal.setAppElement('#root');
  
// import { ClerkProvider } from '@clerk/clerk-react'


// Import your publishable key
// const PUBLISHABLE_KEY = "pk_test_cGF0aWVudC1jaG93LTY4LmNsZXJrLmFjY291bnRzLmRldiQ"

// if (!PUBLISHABLE_KEY) {
//   throw new Error("Missing Publishable Key")
// }

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  {/* <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/"> */}
    <App />
  {/* </ClerkProvider> */}
</React.StrictMode>,

)
