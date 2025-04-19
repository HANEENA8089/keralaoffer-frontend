import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaArrowLeft } from 'react-icons/fa';
import Header from '../Components/Header';

function ContactUs() {
  const navigate = useNavigate();

  const goBackHome = () => {
    navigate('/');
  };

  return (
    <>
    <Header/>
      {/* Back to Home Button */}
      {/* <div className="p-4">
        <button
          onClick={goBackHome}
          className="flex items-center text-violet-600 hover:text-violet-800 transition text-sm font-medium"
        >
          <FaArrowLeft className="mr-2" />
          Back to Home
        </button>
      </div> */}

      <div className="flex flex-col lg:flex-row gap-12 p-8 lg:p-16 bg-gray-50 font-sans">
        {/* Left Side - Contact Info */}
        <div className="lg:w-1/3 space-y-6">
          <h2 className="text-2xl font-semibold font-jakarta">Contact Us</h2>
          <p className="text-gray-600 font-nunito ">
            Fill out the form and our team will reach out to you within 1-2 business days.
          </p>
          <p className="text-gray-600 font-nunito ">
            Click the button below to schedule a meeting with us.
          </p>
          <button className="bg-violet-600 text-white font-jakarta font-medium px-6 py-3 rounded-md hover:bg-violet-700 transition">
            Talk with us
          </button>

          <hr className="border-gray-200 my-4" />
          <div>
            <h3 className="text-lg font-semibold mb-1">Email</h3>
            <p className="text-gray-600">support@keralaoffer.com</p>
          </div>

          <hr className="border-gray-200 my-4" />
          <div>
            <h3 className="text-lg font-semibold mb-2">Social</h3>
            <div className="flex gap-4">
              <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow hover:bg-violet-100 cursor-pointer transition">
                <FaFacebookF className="text-gray-700" />
              </div>
              <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow hover:bg-violet-100 cursor-pointer transition">
                <FaLinkedinIn className="text-gray-700" />
              </div>
              <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow hover:bg-violet-100 cursor-pointer transition">
                <FaInstagram className="text-gray-700" />
              </div>
              <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow hover:bg-violet-100 cursor-pointer transition">
                <FaTwitter className="text-gray-700" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="lg:w-2/3 space-y-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Your name"
              className="w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
            <input
              type="email"
              placeholder="Your email"
              className="w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>
          <input
            type="text"
            placeholder="Subject (optional)"
            className="w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
          <textarea
            rows="6"
            placeholder="Enter Your Message . . ."
            className="w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
          ></textarea>
          <button className="bg-violet-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-violet-700 transition">
            Send Message
          </button>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
