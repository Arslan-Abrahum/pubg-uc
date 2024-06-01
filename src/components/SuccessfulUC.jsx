import React, { useState, useEffect } from 'react';
import { createPlayerId, attemptConnection } from '../utils';
import ReactModal from 'react-modal';
import axios from 'axios';
import BGImage1 from "../assets/pubg-images/card-img-bg.191385920e2e85e49db4.png"
import BG_UC_Image1 from "../assets/pubg-images/1599546007887MVeNUtB6.png"
import BG_UC_Image2 from "../assets/pubg-images/1599546030876PIvqwGaa.png"

import BG_UC_Image3 from "../assets/pubg-images/1599546041426W8hmErMS.png"
import BG_UC_Image4 from "../assets/pubg-images/1599546052747L5gSu7VB.png"
import BG_UC_Image5 from "../assets/pubg-images/1599546061912PLgMlY23.png"
import BG_UC_Image6 from "../assets/pubg-images/1599546071746KqkIhrzG.png"

import MasterCardImage from "../assets/pubg-images/masterCard-removebg-preview.png"
import VisaImage from "../assets/pubg-images/visa-512.webp"
import HBLImage from "../assets/pubg-images/habib-bank-logo-04.png"


import UCImage from "../assets/pubg-images/uc-small.bc30c95b.png"

const initialPackages = [
  { id: 1, package_name: "60 + 30 UC", price_usd: 0.99, uc_amount: 25, bonus_uc: 30, total_uc: 60, picURL: BG_UC_Image1 },
  { id: 2, package_name: "300 + 25 UC", price_usd: 4.99, uc_amount: 40, bonus_uc: 25, total_uc: 325, picURL: BG_UC_Image2 },
  { id: 3, package_name: "600 + 60 UC", price_usd: 9.99, uc_amount: 80, bonus_uc: 60, total_uc: 660, picURL: BG_UC_Image1 },
  { id: 4, package_name: "1500 + 300 UC", price_usd: 24.99, uc_amount: 100, bonus_uc: 300, total_uc: 1800, picURL: BG_UC_Image3 },
  { id: 5, package_name: "3000 + 850 UC", price_usd: 49.99, uc_amount: 160, bonus_uc: 850, total_uc: 3850, picURL: BG_UC_Image4 },
  { id: 6, package_name: "6000 + 2100 UC", price_usd: 99.99, uc_amount: 200, bonus_uc: 2100, total_uc: 8100, picURL: BG_UC_Image5 },
  { id: 7, package_name: "7000 + 2500 UC", price_usd: 130.99, uc_amount: 300, bonus_uc: 2500, total_uc: 9500, picURL: BG_UC_Image6 },
  { id: 8, package_name: "8000 + 3100 UC", price_usd: 150.99, uc_amount: 500, bonus_uc: 3100, total_uc: 11100, picURL: BG_UC_Image6 },
  { id: 9, package_name: "9000 + 3600 UC", price_usd: 175.99, uc_amount: 600, bonus_uc: 3600, total_uc: 12600, picURL: BG_UC_Image6 },
  { id: 10, package_name: "10000 + 4200 UC", price_usd: 200.99, uc_amount: 700, bonus_uc: 4200, total_uc: 14200, picURL: BG_UC_Image6 },
  { id: 11, package_name: "11000 + 4500 UC", price_usd: 220.99, uc_amount: 800, bonus_uc: 4500, total_uc: 15500, picURL: BG_UC_Image6 },
  { id: 12, package_name: "12000 + 4800 UC", price_usd: 250.99, uc_amount: 1000, bonus_uc: 4800, total_uc: 16800, picURL: BG_UC_Image6 }
];


function SuccessfulUC() {
  const [playerId, setPlayerId] = useState('');
  const [connectionStatus, setConnectionStatus] = useState('');
  const [packages, setPackages] = useState(initialPackages);
  const [searchId, setSearchId] = useState('');
  const [filteredPackages, setFilteredPackages] = useState(initialPackages);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState('');


  // useEffect(() => {
  //   setFilteredPackages(
  //     packages.filter(pkg => pkg.id.toString().includes(searchId))
  //   );
  // }, [searchId, packages]);

  useEffect(() => {
    setFilteredPackages(
      packages.filter(pkg => pkg.id.toString().includes(searchId))
    );
  }, [searchId, packages]);

  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await axios.get('https://api.exchangerate-api.com/v4/latest/USD');
        const exchangeRate = await response.data.rates.PKR;
        console.log(exchangeRate, "exchange");
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

  // const handlePaymentSubmit = () => {
  //   setIsLoading(true);
  //   setTimeout(() => {
  //     setIsLoading(false);
  //     setPaymentStatus('Payment Successful');
  //   }, 2000); // Simulate payment processing delay
  // };

  const handlePaymentSubmit = () => {
    setIsLoading(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsLoading(false);
      setPaymentStatus('Payment Successful!');
      setTimeout(() => {
        setPaymentStatus('');
        // setIsModalOpen(false);
      }, 3000); // Hide the message and close the modal after 3 seconds
    }, 2000);
  };

  return (
    <div className="h-auto bg-[rgb(20,27,61)] min-h-screen p-2">
      {/* <div className="header h-48 flex flex-col items-center justify-center gap-4">

      </div> */}
      <div className="h-[auto] w-[1000px] setting-main flex items-center flex-col justify-center bg-[#171F45] mx-auto my-5 p-7">
        {/* <h1 className="text-3xl font-bold text-center mb-8">Generate Player ID</h1>
        <button className="bg-primary text-white py-2 px-4 rounded" onClick={generatePlayerId}>Generate Player ID</button>
        {playerId && <p className="text-center mt-4">Your Player ID: {playerId}</p>}

        <h1 className="text-3xl font-bold text-center mt-8 mb-4">Attempt Connection</h1>
        <button className="bg-primary text-white py-2 px-4 rounded" onClick={handleConnection} disabled={!playerId}>Connect</button>
        {connectionStatus && (
          <p className="text-center mt-2">
            {connectionStatus === 'success'
              ? `Successfully connected with ID: ${playerId}`
              : `Failed to connect with ID: ${playerId}`}
          </p>
        )} */}

        <h1 className="text-3xl font-bold text-center mt-2 text-white mb-3">Search UC Packages</h1>
        <input
          type="text"
          placeholder="Search by ID"
          value={searchId}
          onChange={handleSearchChange}
          className="search-inp w-[50%] bg-white border border-gray-300 rounded p-2 mb-2 "
        />

        <h1 className="text-3xl font-bold text-center mb-2 text-white">UC Packages</h1>
        {/* <div className="h-[auto] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"> */}
        <div className="card-parent h-auto w-[100%] flex items-center flex-wrap justify-between gap-5">
          {/* {filteredPackages.map(pkg => (
            <div key={pkg.id} className="bg-white h-[301px] w-[257px] border border-gray-300 rounded p-4 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">
              <h2 className="text-lg font-bold">{pkg.package_name}</h2>
              <p className="text-gray-700">Price: ${pkg.price_usd} / PKR {pkg.price_pkr}</p>
              <p className="text-gray-700">Total UC: {pkg.total_uc}</p>
            </div>
          ))} */}

          {filteredPackages.map(pkg => (
            <div onClick={() => handlePackageClick(pkg)} key={pkg.id} className="card bg-[#1B234D] shadow-lg  rounded-lg overflow-hidden w-[23%] cursor-pointer">
              <div className="BGImage h-[108px] bg-cover relative bg-center flex justify-center items-center">
                <img src={BGImage1} alt="BlueImage" />
                <img src={pkg.picURL} alt="UCImage" className='absolute ' />

              </div>
              <div className="card-content p-0">
                <div className="uc-package w-[90%] flex items-center justify-center mb-0">
                  <div className="uc-logo w-16 h-16 flex items-center justify-center rounded-full">
                    <img src={UCImage} alt="Logo" className="w-12 h-12" />
                  </div>
                  <div className="uc-package-value text-center">
                    <h1 className="package-text text-3xl font-bold text-white"> {pkg.uc_amount}k <span className="text-highlight"> UC </span> </h1>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* <h1 className="package-text text-4xl font-bold text-white">{pkg.uc_amount} <span className="text-highlight"> + {pkg.bonus_uc} </span></h1> */}
          {/* <h1 className="package-pkr text-xl font-semibold text-white">From {pkg.price_pkr} PKR</h1> */}


        </div>

        {/* <ReactModal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} className="modal">
          {selectedPackage && (
            <div className="bg-white p-8 rounded">
              <h2 className="text-2xl font-bold mb-4">{selectedPackage.package_name}</h2>
              <p className="text-gray-700">Price: ${selectedPackage.price_usd} / PKR {selectedPackage.price_pkr}</p>
              <p className="text-gray-700">Total UC: {selectedPackage.total_uc}</p>
              <button className="bg-primary text-white py-2 px-4 rounded mt-4" onClick={handlePaymentSubmit}>Submit Payment</button>
              {isLoading && <p className="text-center mt-4">Loading...</p>}
              {paymentStatus && <p className="text-center mt-4">{paymentStatus}</p>}
            </div>
          )}
        </ReactModal> */}

        {/* <ReactModal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} className="modal" overlayClassName="modal-overlay">
          {selectedPackage && (
            <div className="bg-[#1B234D] p-8 rounded text-white">
              <h2 className="text-2xl font-bold mb-4">{selectedPackage.package_name}</h2>
              <p className="text-gray-300">Price: ${selectedPackage.price_usd} / PKR {selectedPackage.price_pkr}</p>
              <p className="text-gray-300">Total UC: {selectedPackage.total_uc}</p>
              <button className="bg-primary text-white py-2 px-4 rounded mt-4" onClick={handlePaymentSubmit}>Submit Payment</button>
              {isLoading && <p className="text-center mt-4">Loading...</p>}
              {paymentStatus && <p className="text-center mt-4">{paymentStatus}</p>}
            </div>
          )}
        </ReactModal> */}


        {/* <ReactModal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} className="modal" overlayClassName="modal-overlay">
          {selectedPackage && (
            <div className="bg-[#1B234D] p-8 rounded text-white">
              <h2 className="text-2xl font-bold mb-4">{selectedPackage.uc_amount}k UC</h2>
              <p className="text-gray-300">Total UC: {selectedPackage.total_uc} UC</p>
              <div className="payment-methods flex justify-around mt-4">
                <img src={MasterCardImage} alt="MasterCard" className="payment-logo" />
                <img src={VisaImage} alt="Visa" className="payment-logo" />
                <img src={HBLImage} alt="HBL" className="payment-logo" />
              </div>
              <button className="bg-primary text-white py-2 px-4 rounded mt-4" onClick={handlePaymentSubmit}>Submit Payment</button>
              {isLoading && <p className="text-center mt-4">Loading...</p>}
              {paymentStatus && <p className="text-center mt-4">{paymentStatus}</p>}
            </div>
          )}
        </ReactModal> */}

        {/* Last  */}
        {/* <p className="text-gray-300 mb-2">Price: ${selectedPackage.price_usd} / PKR {selectedPackage.price_pkr}</p> */}
        {/* <ReactModal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} className="modal" overlayClassName="modal-overlay">
          {selectedPackage && (
            <div className="bg-[#1B234D] p-8 rounded text-white">
              <h2 className="text-2xl font-bold mb-4">{selectedPackage.uc_amount}k <span className='text-highlight'>UC</span> </h2>
              <p className="text-gray-300 mb-4">Total UC: {selectedPackage.total_uc}</p>
              <div className="payment-methods flex justify-around mb-4">
                <img src={MasterCardImage} alt="MasterCard" className="payment-logo" />
                <img src={VisaImage} alt="Visa" className="payment-logo" />
                <img src={HBLImage} alt="HBL" className="payment-logo" />
              </div>
              <button className="submit-button bg-[#FFD700] text-[#1B234D] py-2 px-4 rounded mt-4 font-semibold" onClick={handlePaymentSubmit} disabled={isLoading}>
                {isLoading ? 'Processing...' : 'Submit Payment'}
              </button>
              {paymentStatus && <p className="text-center mt-4 text-green-400">{paymentStatus}</p>}
            </div>
          )}
        </ReactModal> */}
        {/* ///////////////////////////////////////////////////////////////////////////////////////////// */}

        <ReactModal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} className="modal" overlayClassName="modal-overlay">
          {selectedPackage && (
            <div className="bg-[#1B234D] p-8 rounded text-white flex flex-col md:flex-row">
              <div className="left-section md:w-1/2 mb-4 md:mb-0">
                <h2 className="text-2xl font-bold mb-4">{selectedPackage.uc_amount}k <span className="text-highlight">UC</span></h2>
                <p className="text-gray-300 mb-4">Total UC: {selectedPackage.total_uc}</p>
                <div className="payment-methods flex justify-around mb-4">
                  <img src={MasterCardImage} alt="MasterCard" className="payment-logo" />
                  <img src={VisaImage} alt="Visa" className="payment-logo" />
                  <img src={HBLImage} alt="HBL" className="payment-logo" />
                </div>
              </div>
              <div className="right-section md:w-1/2 md:pl-4">
                <p className="id-label text-xl font-bold mb-2">Package ID:</p>
                <p className="id-value text-3xl font-bold text-[#FFD700] mb-4">{selectedPackage.id}</p>
                <p className="text-gray-300 mb-2">Price: ${selectedPackage.price_usd} / PKR {selectedPackage.price_pkr}</p>
                <button className="submit-button bg-[#FFD700] text-[#1B234D] py-2 px-4 rounded mt-4 font-semibold" onClick={handlePaymentSubmit} disabled={isLoading}>
                  {isLoading ? 'Processing...' : 'Submit Payment'}
                </button>
                {paymentStatus && <p className="text-center mt-4 text-green-400">{paymentStatus}</p>}
              </div>
            </div>
          )}
        </ReactModal>


        {/* <p className="text-gray-300">Price: ${selectedPackage.price_usd} </p> */}

      </div>
    </div>
  );
}

export default SuccessfulUC;
