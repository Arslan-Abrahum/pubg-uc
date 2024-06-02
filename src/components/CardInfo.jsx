// import React from 'react'

// function CardInfo() {
//   return (
//     <div>
//         <div className='card-model'>
//           <div className='card-title'>
//               <h1>Card Details:</h1>
//           </div>
//           <div className='card-body'>
//             <div className='card-info'>
//               <h2>Card Number: </h2>
//               <h2>Select Carding Payment Channels</h2>
//               <div className='cards'>
//                   <div className='card-image'>
//                     <img src={require('../assets/images/visa.png')} alt='visa' className='card'/>
//                   </div>
//                   <div className='card-data'>
//                     <h2>(Visa.8362 ) contact: balance: $.852282 </h2>
//                   </div>
//               </div>
//               <div className='cards'>
//                   <div className='card-image'>
//                     <img src={require('../assets/pubg-images/Visadebitcardpng-1599584312349.png')} alt='visa' className='card'/>
//                   </div>
//                   <div className='card-data'>
//                     <h2>(Visa.8362 ) contact: balance: $.852282 </h2>
//                   </div>
//               </div>
//               <div className='cards'>
//                   <div className='card-image'>
//                     <img src={require('../assets/pubg-images/Mastercard-Logo.wine.png')} alt='visa' className='card'/>
//                   </div>
//                   <div className='card-data'>
//                     <h2>(Visa.8362 ) contact: balance: $.852282 </h2>
//                   </div>
//               </div>

//             </div>
//           </div>
//           <div className='payment-submit-part'>
//             <h1>Purchase Item:</h1>
//             <div className='item-info'>
//               <img src={require("../assets/pubg-images/uc-small.bc30c95b.png")} alt="" />
//               <h2 className='uc-amount'>30,300 UC</h2>
//             </div>
//             <div className='item-info'>
//               <h2 className='price-details'>Price Details: </h2>
//               <div className='prices'>
//               <h2 className='current-price'>
//                 Current Price: 
//               </h2>
//               <h2 className='price-value'>$30.00 </h2>
//               </div>

//             </div>
//             <h1>Total: Carding Card Connected</h1>
//             <button>UC Send New</button>
//           </div>
//         </div>
//     </div>
//   )
// }

// export default CardInfo

// import React from 'react'
// import VisaCard from "../assets/pubg-images/goldenvisa.png"
// import VisaGolden from "../assets/pubg-images/Visadebitcardpng-1599584312349.png"
// import MasterCard from "../assets/pubg-images/Mastercard-Logo.wine.png"
// import UCImage from "../assets/pubg-images/uc-small.bc30c95b.png"

// function CardInfo() {
//   return (

//     <div className="flex justify-center items-center min-h-screen bg-[#141B3D]">
//       <div className="card-model bg-[#1B234D] shadow-lg rounded-lg p-6 lg:w-2/3 w-full">
//         <div className="card-title text-center mb-4">
//           <h1 className="text-3xl font-bold text-white">Card Details:</h1>
//         </div>
//         <div className="card-body grid grid-cols-1 lg:grid-cols-2 gap-6">
//           <div className="card-info">
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="current-price text-white text-xl font-semibold">Player ID:</h2>
//               <h2 className="price-value text-white">1846249952</h2>
//             </div>
//             <h2 className="text-lg text-white mb-5">Select Carding Payment Channels</h2>
//             <div className="space-y-4">
//               <div className="cards flex items-center justify-between bg-[#141B3D] rounded-md pe-5">
//                 <div className='flex items-center'>

//                   <div className="card-image w-16 h-10 mr-4">
//                     <img src={VisaCard} alt="visa" className="w-full h-full object-contain" />
//                   </div>
//                   <div className="card-data">
//                     <h2 className="text-white">(Visa.8362) Balance: $852.28</h2>
//                   </div>
//                 </div>
//                 <input type="checkbox" name='a' className='h-5 w-5 cursor-pointer' />
//               </div>
//               <div className="cards flex items-center justify-between bg-[#141B3D] rounded-md pe-5">
//                 <div className='flex items-center '>
//                   <div className="card-image w-16 h-10 mr-4">
//                     <img src={VisaGolden} alt="visaGolden" className="w-full h-full object-contain" />
//                   </div>
//                   <div className="card-data">
//                     <h2 className="text-white">(Visa.8362) Balance: $852.28</h2>
//                   </div>
//                 </div>
//                 <input type="checkbox" name='a' className='h-5 w-5 cursor-pointer' />
//               </div>
//               <div className="cards flex items-center justify-between bg-[#141B3D] rounded-md pe-5">
//                 <div className='flex items-center'>

//                 <div className="card-image w-16 h-10 mr-4">
//                   <img src={MasterCard} alt="masterCard" className="w-full h-full object-contain rounded-md" />
//                 </div>
//                 <div className="card-data">
//                   <h2 className="text-white">(Visa.8362) Balance: $852.28</h2>
//                 </div>
//                 </div>
//                 <input type="checkbox" name='a' className='h-5 w-5 cursor-pointer' />
//               </div>
//             </div>
//           </div>
//           <div className="payment-submit-part bg-[#141B3D] p-6 rounded-lg shadow-md">
//             <h1 className="text-xl font-semibold text-white mb-4">Purchase Item:</h1>
//             <div className="item-info flex items-center mb-4">
//               <img src={UCImage} alt="" className="w-16 h-16 mr-4" />
//               <h2 className="uc-amount text-lg text-white">30,300 UC</h2>
//             </div>
//             <div className="item-info mb-4">
//               <h2 className="price-details text-lg font-semibold text-white mb-2">Price Details:</h2>
//               <div className="prices flex justify-between items-center">
//                 <h2 className="current-price text-white">Current Price:</h2>
//                 <h2 className="price-value text-white">$30.00</h2>
//               </div>
//             </div>
//             <h1 className="text-lg font-semibold text-white mb-4">Total: Carding Card Connected</h1>
//             <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
//               UC Send New
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* //////////////////////////////////////////////////////////////////////////////////////////// */}
      
//       {/* <div className="bg-[#1B234D] p-8 rounded text-white flex flex-col md:flex-row">
//               <div className="left-section md:w-1/2 mb-4 md:mb-0">
//                 <h2 className="text-2xl font-bold mb-4">{selectedPackage.uc_amount}k <span className="text-highlight">UC</span></h2>
//                 <p className="text-gray-300 mb-4">Total UC: {selectedPackage.total_uc}</p>
//                 <div className="payment-methods flex justify-around mb-4">
//                   <img src={MasterCardImage} alt="MasterCard" className="payment-logo" />
//                   <img src={VisaImage} alt="Visa" className="payment-logo" />
//                   <img src={HBLImage} alt="HBL" className="payment-logo" />
//                 </div>
//               </div>
//               <div className="right-section md:w-1/2 md:pl-4">
//                 <p className="id-label text-xl font-bold mb-2">Package ID:</p>
//                 <p className="id-value text-3xl font-bold text-[#FFD700] mb-4">{selectedPackage.id}</p>
//                 <p className="text-gray-300 mb-2">Price: ${selectedPackage.price_usd} / PKR {selectedPackage.price_pkr}</p>
//                 <button className="submit-button bg-[#FFD700] text-[#1B234D] py-2 px-4 rounded mt-4 font-semibold" onClick={handlePaymentSubmit} disabled={isLoading}>
//                   {isLoading ? 'Processing...' : 'Submit Payment'}
//                 </button>
//                 {paymentStatus && <p className="text-center mt-4 text-green-400">{paymentStatus}</p>}
//               </div>
//             </div> */}
      
      
//       {/* //////////////////////////////////////////////////////////////////////////////////////////// */}

//     </div>
//   )
// }

// export default CardInfo

//////////////////////////////////////////////////////////////////////////////////////////////////

// import React from 'react';
// import VisaCard from '../assets/images/visa.png';
// import VisaGolden from '../assets/pubg-images/Visadebitcardpng-1599584312349.png';
// import MasterCard from '../assets/pubg-images/Mastercard-Logo.wine.png';
// import UCImage from '../assets/pubg-images/uc-small.bc30c95b.png';

// const PaymentCard = () => {
//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="card-model bg-white shadow-lg rounded-lg p-6 md:w-2/3 w-full">
//         <div className="card-title text-center mb-4">
//           <h1 className="text-3xl font-bold text-gray-800">Card Details:</h1>
//         </div>
//         <div className="card-body grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div className="card-info">
//             <h2 className="text-xl font-semibold text-gray-800 mb-2">
//               Card Number: <span>1245322</span>
//             </h2>
//             <h2 className="text-lg text-gray-600 mb-4">Select Carding Payment Channels</h2>
//             <div className="space-y-4">
//               <div className="cards flex items-center">
//                 <div className="card-image w-16 h-10 mr-4">
//                   <img src={VisaCard} alt="visa" className="w-full h-full object-contain" />
//                 </div>
//                 <div className="card-data">
//                   <h2 className="text-gray-700">(Visa.8362) Balance: $852.28</h2>
//                 </div>
//               </div>
//               <div className="cards flex items-center">
//                 <div className="card-image w-16 h-10 mr-4">
//                   <img src={VisaGolden} alt="visaGolden" className="w-full h-full object-contain" />
//                 </div>
//                 <div className="card-data">
//                   <h2 className="text-gray-700">(Visa.8362) Balance: $852.28</h2>
//                 </div>
//               </div>
//               <div className="cards flex items-center">
//                 <div className="card-image w-16 h-10 mr-4">
//                   <img src={MasterCard} alt="masterCard" className="w-full h-full object-contain" />
//                 </div>
//                 <div className="card-data">
//                   <h2 className="text-gray-700">(Visa.8362) Balance: $852.28</h2>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="payment-submit-part bg-gray-50 p-6 rounded-lg shadow-md">
//             <h1 className="text-xl font-semibold text-gray-800 mb-4">Purchase Item:</h1>
//             <div className="item-info flex items-center mb-4">
//               <img src={UCImage} alt="" className="w-16 h-16 mr-4" />
//               <h2 className="uc-amount text-lg text-gray-700">30,300 UC</h2>
//             </div>
//             <div className="item-info mb-4">
//               <h2 className="price-details text-lg font-semibold text-gray-800 mb-2">Price Details:</h2>
//               <div className="prices flex justify-between items-center">
//                 <h2 className="current-price text-gray-700">Current Price:</h2>
//                 <h2 className="price-value text-gray-700">$30.00</h2>
//               </div>
//             </div>
//             <h1 className="text-lg font-semibold text-gray-800 mb-4">Total: Carding Card Connected</h1>
//             <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
//               UC Send New
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PaymentCard;


import React from 'react'
import {} from "react-loader-spinner"
function Loader() {
  return (
    <div>

        <div>
          <Oval/>
          <div>
            <h2>200k UC</h2>
            <h3>Message</h3>
          </div>

        </div>

    </div>
  )
}

export default Loader