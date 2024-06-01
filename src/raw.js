// import React from 'react'
// import Home from './components/Home'
// import {BrowserRouter, Routes, Route} from "react-router-dom"


// function App() {
//   return (
//     <div>

//       <BrowserRouter>
      
//         <Routes>

//           <Route path="/" element={<Home/>}/>

//         </Routes>

//       </BrowserRouter>

//     </div>
//   )
// }

// export default App

///////////////////////////////////////////////////////////////////////////////////////////////////////////

// src/App.js
// import React, { useState, useEffect } from 'react';
// import { createPlayerId, attemptConnection } from './utils';
// import ReactModal from 'react-modal';

// const initialPackages = [
//   { id: 1, package_name: "60 UC", price_usd: 0.99, uc_amount: 60, bonus_uc: 0, total_uc: 60, price_pkr: "297.00" },
//   { id: 2, package_name: "300 + 25 UC", price_usd: 4.99, uc_amount: 300, bonus_uc: 25, total_uc: 325, price_pkr: "1497.00" },
//   { id: 3, package_name: "600 + 60 UC", price_usd: 9.99, uc_amount: 600, bonus_uc: 60, total_uc: 660, price_pkr: "2997.00" },
//   { id: 4, package_name: "1500 + 300 UC", price_usd: 24.99, uc_amount: 1500, bonus_uc: 300, total_uc: 1800, price_pkr: "7497.00" },
//   { id: 5, package_name: "3000 + 850 UC", price_usd: 49.99, uc_amount: 3000, bonus_uc: 850, total_uc: 3850, price_pkr: "14997.00" },
//   { id: 6, package_name: "6000 + 2100 UC", price_usd: 99.99, uc_amount: 6000, bonus_uc: 2100, total_uc: 8100, price_pkr: "29997.00" }
// ];

// function App() {
//   const [playerId, setPlayerId] = useState('');
//   const [connectionStatus, setConnectionStatus] = useState('');
//   const [packages, setPackages] = useState(initialPackages);
//   const [searchId, setSearchId] = useState('');
//   const [filteredPackages, setFilteredPackages] = useState(initialPackages);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedPackage, setSelectedPackage] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [paymentStatus, setPaymentStatus] = useState('');

//   useEffect(() => {
//     setFilteredPackages(
//       packages.filter(pkg => pkg.id.toString().includes(searchId))
//     );
//   }, [searchId, packages]);

//   const generatePlayerId = () => {
//     const id = createPlayerId();
//     setPlayerId(id);
//   };

//   const handleConnection = () => {
//     const status = attemptConnection(playerId);
//     setConnectionStatus(status);
//   };

//   const handleSearchChange = (e) => {
//     setSearchId(e.target.value);
//   };

//   const handlePackageClick = (pkg) => {
//     setSelectedPackage(pkg);
//     setIsModalOpen(true);
//   };

//   const handlePaymentSubmit = () => {
//     setIsLoading(true);
//     setTimeout(() => {
//       setIsLoading(false);
//       setPaymentStatus('Payment Successful');
//     }, 2000); // Simulate payment processing delay
//   };

//   return (
//     <div className="App">
//       <h1>Generate Player ID</h1>
//       <button onClick={generatePlayerId}>Generate Player ID</button>
//       {playerId && <p>Your Player ID: {playerId}</p>}

//       <h1>Attempt Connection</h1>
//       <button onClick={handleConnection} disabled={!playerId}>Connect</button>
//       {connectionStatus && (
//         <p>
//           {connectionStatus === 'success'
//             ? `Successfully connected with ID: ${playerId}`
//             : `Failed to connect with ID: ${playerId}`}
//         </p>
//       )}

//       <h1>Search UC Packages</h1>
//       <input
//         type="text"
//         placeholder="Search by ID"
//         value={searchId}
//         onChange={handleSearchChange}
//       />

//       <h1>UC Packages</h1>
//       <div className="packages">
//         {filteredPackages.map(pkg => (
//           <div key={pkg.id} className="package-card" onClick={() => handlePackageClick(pkg)}>
//             <h2>{pkg.package_name}</h2>
//             <p>Price: ${pkg.price_usd} / PKR {pkg.price_pkr}</p>
//             <p>Total UC: {pkg.total_uc}</p>
//           </div>
//         ))}
//       </div>

//       <ReactModal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)}>
//         {selectedPackage && (
//           <div>
//             <h2>{selectedPackage.package_name}</h2>
//             <p>Price: ${selectedPackage.price_usd} / PKR {selectedPackage.price_pkr}</p>
//             <p>Total UC: {selectedPackage.total_uc}</p>
//             <button onClick={handlePaymentSubmit}>Submit Payment</button>
//             {isLoading && <p>Loading...</p>}
//             {paymentStatus && <p>{paymentStatus}</p>}
//           </div>
//         )}
//       </ReactModal>
//     </div>
//   );
// }

// export default App;



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { createPlayerId, attemptConnection } from './utils';
import ReactModal from 'react-modal';
import './App.css';


const initialPackages = [
  { id: 1, package_name: "60 UC", price_usd: 0.99, uc_amount: 60, bonus_uc: 0, total_uc: 60 },
  { id: 2, package_name: "300 + 25 UC", price_usd: 4.99, uc_amount: 300, bonus_uc: 25, total_uc: 325 },
  { id: 3, package_name: "600 + 60 UC", price_usd: 9.99, uc_amount: 600, bonus_uc: 60, total_uc: 660 },
  { id: 4, package_name: "1500 + 300 UC", price_usd: 24.99, uc_amount: 1500, bonus_uc: 300, total_uc: 1800 },
  { id: 5, package_name: "3000 + 850 UC", price_usd: 49.99, uc_amount: 3000, bonus_uc: 850, total_uc: 3850 },
  { id: 6, package_name: "6000 + 2100 UC", price_usd: 99.99, uc_amount: 6000, bonus_uc: 2100, total_uc: 8100 },
  { id: 7, package_name: "7000 + 2500 UC", price_usd: 130.99, uc_amount: 7000, bonus_uc: 2500, total_uc: 9500 },
  { id: 8, package_name: "8000 + 3100 UC", price_usd: 150.99, uc_amount: 8000, bonus_uc: 3100, total_uc: 11100 },
  { id: 9, package_name: "9000 + 3600 UC", price_usd: 175.99, uc_amount: 9000, bonus_uc: 3600, total_uc: 12600 },
  { id: 10, package_name: "10000 + 4200 UC", price_usd: 200.99, uc_amount: 10000, bonus_uc: 4200, total_uc: 14200 },
  { id: 11, package_name: "11000 + 4500 UC", price_usd: 220.99, uc_amount: 11000, bonus_uc: 4500, total_uc: 15500 },
  { id: 12, package_name: "12000 + 4800 UC", price_usd: 250.99, uc_amount: 12000, bonus_uc: 4800, total_uc: 16800 }
];



function App() {
  const [playerId, setPlayerId] = useState('');
  const [connectionStatus, setConnectionStatus] = useState('');
  const [packages, setPackages] = useState(initialPackages);
  const [searchId, setSearchId] = useState('');
  const [filteredPackages, setFilteredPackages] = useState(initialPackages);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState('');

  useEffect(() => {
    setFilteredPackages(
      packages.filter(pkg => pkg.id.toString().includes(searchId))
    );
  }, [searchId, packages]);

  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await axios.get('https://api.exchangerate-api.com/v4/latest/USD');
        const exchangeRate = response.data.rates.PKR;
        updatePackagesWithPKR(exchangeRate);
      } catch (error) {
        console.error('Error fetching exchange rate:', error);
      }
    };

    fetchExchangeRate();
  }, []);

  const updatePackagesWithPKR = (exchangeRate) => {
    const updatedPackages = packages.map(pkg => {
      const pricePkr = (pkg.price_usd * exchangeRate).toFixed(2);
      return { ...pkg, price_pkr: pricePkr };
    });

    setPackages(updatedPackages);
  };

  const generatePlayerId = () => {
    const id = createPlayerId();
    setPlayerId(id);
  };

  const handleConnection = () => {
    const status = attemptConnection(playerId);
    setConnectionStatus(status);
  };

  const handleSearchChange = (e) => {
    setSearchId(e.target.value);
  };

  const handlePackageClick = (pkg) => {
    setSelectedPackage(pkg);
    setIsModalOpen(true);
  };

  const handlePaymentSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setPaymentStatus('Payment Successful');
    }, 2000);
  };

  return (
    
    <div className="min-h-screen bg-blue-100 p-8 flex flex-col items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-4">Generate Player ID</h1>
        <button className="bg-blue-500 text-white py-2 px-4 rounded mb-4" onClick={generatePlayerId}>Generate Player ID</button>
        {playerId && <p className="mb-4">Your Player ID: {playerId}</p>}

        <h1 className="text-3xl font-bold mb-4">Attempt Connection</h1>
        <button className="bg-blue-500 text-white py-2 px-4 rounded mb-4" onClick={handleConnection} disabled={!playerId}>Connect</button>
        {connectionStatus && (
          <p className="mb-4">
            {connectionStatus === 'success'
              ? `Successfully connected with ID: ${playerId}`
              : `Failed to connect with ID: ${playerId}`}
          </p>
        )}

        <h1 className="text-3xl font-bold mb-4">Search UC Packages</h1>
        <input
          type="text"
          placeholder="Search by ID"
          value={searchId}
          onChange={handleSearchChange}
          className="w-full bg-blue-200 rounded p-2 mb-4"
        />

        <h1 className="text-3xl font-bold mb-4">UC Packages</h1>
      <div className="packages">
        {filteredPackages.map(pkg => (
          <div key={pkg.id} className="package-card" onClick={() => handlePackageClick(pkg)}>
            <h2>{pkg.package_name}</h2>
            <p>Price: ${pkg.price_usd} / PKR {pkg.price_pkr}</p>
            <p>Total UC: {pkg.total_uc}</p>
          </div>
        ))}
      </div>

      <ReactModal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)}>
        {selectedPackage && (
          <div>
            <h2>{selectedPackage.package_name}</h2>
            <p>Price: ${selectedPackage.price_usd} / PKR {selectedPackage.price_pkr}</p>
            <p>Total UC: {selectedPackage.total_uc}</p>
            <button onClick={handlePaymentSubmit}>Submit Payment</button>
            {isLoading && <p>Loading...</p>}
            {paymentStatus && <p>{paymentStatus}</p>}
          </div>
        )}
      </ReactModal>
    </div>
    </div>
  );
}

export default App;

/////////////////////////////////////////////////// Last  //////////////////////////////////////////////////////////////////////////////////////////////////////////////


// import React, { useState, useEffect } from 'react';
// import { createPlayerId, attemptConnection } from './utils';
// import ReactModal from 'react-modal';
// import './App.css'; // Import the CSS file here

// const initialPackages = [
//   { id: 1, package_name: "60 UC", price_usd: 0.99, uc_amount: 60, bonus_uc: 0, total_uc: 60, price_pkr: "297.00" },
//   { id: 2, package_name: "300 + 25 UC", price_usd: 4.99, uc_amount: 300, bonus_uc: 25, total_uc: 325, price_pkr: "1497.00" },
//   { id: 3, package_name: "600 + 60 UC", price_usd: 9.99, uc_amount: 600, bonus_uc: 60, total_uc: 660, price_pkr: "2997.00" },
//   { id: 4, package_name: "1500 + 300 UC", price_usd: 24.99, uc_amount: 1500, bonus_uc: 300, total_uc: 1800, price_pkr: "7497.00" },
//   { id: 5, package_name: "3000 + 850 UC", price_usd: 49.99, uc_amount: 3000, bonus_uc: 850, total_uc: 3850, price_pkr: "14997.00" },
//   { id: 6, package_name: "6000 + 2100 UC", price_usd: 99.99, uc_amount: 6000, bonus_uc: 2100, total_uc: 8100, price_pkr: "29997.00" }
// ];

// function App() {
//   const [playerId, setPlayerId] = useState('');
//   const [connectionStatus, setConnectionStatus] = useState('');
//   const [packages, setPackages] = useState(initialPackages);
//   const [searchId, setSearchId] = useState('');
//   const [filteredPackages, setFilteredPackages] = useState(initialPackages);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedPackage, setSelectedPackage] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [paymentStatus, setPaymentStatus] = useState('');

//   useEffect(() => {
//     setFilteredPackages(
//       packages.filter(pkg => pkg.id.toString().includes(searchId))
//     );
//   }, [searchId, packages]);

//   const generatePlayerId = () => {
//     const id = createPlayerId();
//     setPlayerId(id);
//   };

//   const handleConnection = () => {
//     const status = attemptConnection(playerId);
//     setConnectionStatus(status);
//   };

//   const handleSearchChange = (e) => {
//     setSearchId(e.target.value);
//   };

//   const handlePackageClick = (pkg) => {
//     setSelectedPackage(pkg);
//     setIsModalOpen(true);
//   };

//   const handlePaymentSubmit = () => {
//     setIsLoading(true);
//     setTimeout(() => {
//       setIsLoading(false);
//       setPaymentStatus('Payment Successful');
//     }, 2000); // Simulate payment processing delay
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen p-8">
//       <div className="max-w-3xl mx-auto">
//         <h1 className="text-3xl font-bold text-center mb-8">Generate Player ID</h1>
//         <button className="bg-primary text-white py-2 px-4 rounded" onClick={generatePlayerId}>Generate Player ID</button>
//         {playerId && <p className="text-center mt-4">Your Player ID: {playerId}</p>}

//         <h1 className="text-3xl font-bold text-center mt-8 mb-4">Attempt Connection</h1>
//         <button className="bg-primary text-white py-2 px-4 rounded" onClick={handleConnection} disabled={!playerId}>Connect</button>
//         {connectionStatus && (
//           <p className="text-center mt-2">
//             {connectionStatus === 'success'
//               ? `Successfully connected with ID: ${playerId}`
//               : `Failed to connect with ID: ${playerId}`}
//           </p>
//         )}

//         <h1 className="text-3xl font-bold text-center mt-8 mb-4">Search UC Packages</h1>
//         <input
//           type="text"
//           placeholder="Search by ID"
//           value={searchId}
//           onChange={handleSearchChange}
//           className="w-full bg-white border border-gray-300 rounded p-2 mb-4"
//         />

//         <h1 className="text-3xl font-bold text-center mb-4">UC Packages</h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//           {filteredPackages.map(pkg => (
//             <div key={pkg.id} className="bg-white border border-gray-300 rounded p-4 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">
//               <h2 className="text-lg font-bold">{pkg.package_name}</h2>
//               <p className="text-gray-700">Price: ${pkg.price_usd} / PKR {pkg.price_pkr}</p>
//               <p className="text-gray-700">Total UC: {pkg.total_uc}</p>
//             </div>
//           ))}
//         </div>

//         <ReactModal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} className="modal">
//           {selectedPackage && (
//             <div className="bg-white p-8 rounded">
//               <h2 className="text-2xl font-bold mb-4">{selectedPackage.package_name}</h2>
//               <p className="text-gray-700">Price: ${selectedPackage.price_usd} / PKR {selectedPackage.price_pkr}</p>
//               <p className="text-gray-700">Total UC: {selectedPackage.total_uc}</p>
//               <button className="bg-primary text-white py-2 px-4 rounded mt-4" onClick={handlePaymentSubmit}>Submit Payment</button>
//               {isLoading && <p className="text-center mt-4">Loading...</p>}
//               {paymentStatus && <p className="text-center mt-4">{paymentStatus}</p>}
//             </div>
//           )}
//         </ReactModal>
//       </div>
//     </div>
//     );
//     }

//     export  default App;
