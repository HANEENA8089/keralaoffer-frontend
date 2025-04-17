import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const InnerPage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const navigate = useNavigate();

  const images = [
    'Images/women.jpg',
    'Images/men.jpg',
    'Images/kids.jpg',
    'Images/jewellery.jpg'
  ];

  const handleWhatsApp = () => {
    const phoneNumber = '919999999999';
    const message = "Hi! I'm interested in your products.";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+919999999999';
  };

  const goToImage = (index) => {
    setCurrentImage(index);
  };

  const goBack = () => {
    navigate('/');
  };

  return (
    <div className="w-full min-h-screen flex flex-col p-4 bg-white">
      {/* Back Button */}
      <div className="w-full flex items-start mb-4">
        <button onClick={goBack} className="flex items-center text-gray-700">
          <FaArrowLeft className="mr-2" />
          <span className="font-medium">Back</span>
        </button>
      </div>

      {/* Responsive Container */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 w-full max-w-6xl mx-auto">
        {/* Carousel (Left for large screens) */}
        <div className="w-full max-w-md">
          <img
            src={images[currentImage]}
            alt="Sale Banner"
            className="w-full h-auto rounded-lg mb-2 object-cover"
          />
          <div className="flex justify-center gap-2 mb-4">
            {images.map((_, index) => (
              <div
                key={index}
                className={`rounded-full ${
                  currentImage === index ? 'w-4 bg-[#004BFF]' : 'w-2 bg-gray-700'
                } h-2 cursor-pointer transition-all duration-200`}
                onClick={() => goToImage(index)}
              ></div>
            ))}
          </div>
        </div>

        {/* Content (Right for large screens) */}
        <div className="w-full max-w-md text-center lg:text-left">
          <p className="text-gray-700 mb-4 px-4 lg:px-0 font-poppins font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam arcu mauris,
            scelerisque eu mauris id, pretium pulvinar sapien.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 mb-6 px-4 lg:px-0">
            <button
              onClick={handleWhatsApp}
              className="bg-[#21A400] text-white font-medium px-6 py-3 font-nunito rounded-lg shadow-lg hover:bg-black transition-all duration-300"
            >
              Chat With Us
            </button>
            <button
              onClick={handleCall}
              className="bg-[#004CFF] text-white font-nunito font-medium px-6 py-3 rounded-lg shadow-lg hover:bg-black transition-all duration-300"
            >
              Call Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnerPage;
