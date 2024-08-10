import React from 'react'
import Home from './components/Home'
import SuccessfulUC from './components/SuccessfulUC'
import FailedUC from './components/FailUC'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'

// // VITE_CLERK_PUBLISHABLE_KEY=pk_test_cGF0aWVudC1jaG93LTY4LmNsZXJrLmFjY291bnRzLmRldiQ

// function App() {
//   return (
//     <div>

//       <BrowserRouter>

//         <Routes>

//           <Route path='/' element={<Home />} />
//           <Route path='/successfuluc' element={<SuccessfulUC />} />
//           <Route path='/faileduc' element={<FailedUC />} />

//         </Routes>

//       </BrowserRouter>

//     </div>
//   )
// }

// export default App


import { ClerkProvider } from "@clerk/clerk-react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SignIn, SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";

function App() {
  return (
    <ClerkProvider publishableKey="pk_test_cGF0aWVudC1jaG93LTY4LmNsZXJrLmFjY291bnRzLmRldiQ">
      <BrowserRouter>
        <Routes>
          <Route 
            path='/' 
            element={
              <>
                <SignedIn>
                  <Home />
                </SignedIn>
                <SignedOut>
                  <RedirectToSignIn />
                </SignedOut>
              </>
            } 
          />
          <Route path='/sign-in' element={<SignIn routing="path" path="/sign-in" />} />
          <Route path='/successfuluc' element={<SuccessfulUC />} />
          <Route path='/faileduc' element={<FailedUC />} />
        </Routes>
      </BrowserRouter>
    </ClerkProvider>
  );
}

export default App;