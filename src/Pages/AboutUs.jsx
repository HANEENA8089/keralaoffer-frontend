import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaArrowLeft } from 'react-icons/fa';
import Header from '../Components/Header';

const AboutUs = () => {
  const navigate = useNavigate();

  const goToContact = () => {
    navigate('/contactus');
  };

  const goBackHome = () => {
    navigate('/');
  };

  return (
    <>
    <Header/>
    <div className="min-h-screen bg-gradient-to-b from-white to-violet-50 p-6 flex flex-col items-center font-sans"> 
      {/* Back Button */}
      <div className="w-full max-w-4xl mb-4">
        <button
          onClick={goBackHome}
          className="flex items-center text-violet-600 hover:text-violet-800 transition text-sm font-medium" 
        >
          <FaArrowLeft className="mr-2" />
          Back to Home
        </button>
      </div>

      <div className="max-w-4xl w-full text-center">
        {/* Optional Image Section */}
        <img
          src="https://i.pinimg.com/736x/2d/b5/b2/2db5b2884af57df10b2e448c4546b5ed.jpg"
          alt="Promotion Banner"
          className="rounded-lg shadow-md mb-6 w-full h-64 object-cover"
        />

        <h1 className="text-4xl font-bold text-violet-700 mb-6  font-jakarta" >About Us</h1>

        <p className="text-gray-700 text-lg mb-6 leading-relaxed font-light font-jakarta">
          Welcome to our platform! We specialize in promoting business ads across Kerala and beyond.
          Whether you're a small business or a big brand, we help you reach your audience with 
          powerful ad placements. Our goal is to make advertising simple, effective, and affordable for everyone.
        </p>

        <p className="text-gray-700 text-lg mb-10 leading-relaxed font-light">
          Join hands with us to showcase your brand to the right audience at the right time. 
          We're committed to creating high-impact, customized promotional solutions that bring real results.
        </p>

        {/* Contact Details */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8 text-left">
          <h2 className="text-2xl font-semibold text-violet-600 mb-4 font-jakarta">Contact Details</h2>
          <div className="flex flex-col gap-3 text-gray-700 font-light font-mluvka">
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-violet-500" />
              <span>123, MG Road, Kochi, Kerala - 682016</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-violet-500" />
              <span>+91 99999 99999</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-violet-500" />
              <span>info@keralaoffer.com</span>
            </div>
          </div>
        </div>

        <button
          onClick={goToContact}
          className="px-6 py-3 bg-violet-600 text-white rounded-md hover:bg-violet-700 transition font-medium"
        >
          Go to Contact Page
        </button>
      </div>
    </div>
    </>
  );
};

export default AboutUs;
