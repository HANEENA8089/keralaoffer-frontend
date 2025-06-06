import React, { useState, useEffect, useRef } from 'react';
import { FaArrowLeft, FaShareAlt } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '../Components/Header';

const InnerPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Offer data
  const offers = [
    {
      src: 'Images/women.jpg',
      description: 'Explore our latest Women’s Collection – trendy styles and unbeatable offers.',
      phone: '919111111111',
      message: "Hi! I'm interested in the Women's Collection.",
      published: '2025-04-15',
      ends: '2025-05-15'
    },
    {
      src: 'Images/men.jpg',
      description: 'Check out stylish and affordable options in our Men’s Fashion range.',
      phone: '919222222222',
      message: "Hi! I'm interested in the Men's Collection.",
      published: '2025-04-10',
      ends: '2025-05-10'
    },
    {
      src: 'Images/kids.jpg',
      description: 'Cute, comfy, and colorful – explore Kids’ Wear for all ages.',
      phone: '919333333333',
      message: "Hi! I'm interested in the Kids’ Collection.",
      published: '2025-04-20',
      ends: '2025-06-20'
    },
    {
      src: 'Images/jewellery.jpg',
      description: 'Shine bright with our exclusive Jewellery selection at amazing prices.',
      phone: '919444444444',
      message: "Hi! I'm interested in the Jewellery Collection.",
      published: '2025-04-25',
      ends: '2025-05-25'
    }
  ];

  // Use ref for scroll-to-top
  const imageRef = useRef(null);

  // Get selected offer from URL parameters
  const queryParams = new URLSearchParams(location.search);
  const selectedOfferIndex = queryParams.get('offer') ? parseInt(queryParams.get('offer')) : 0;

  const [offer, setOffer] = useState(offers[selectedOfferIndex]);
  const [currentImage, setCurrentImage] = useState(0);

  // UseEffect to set the offer and scroll to top when offer index changes
  useEffect(() => {
    setOffer(offers[selectedOfferIndex]);
    imageRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [selectedOfferIndex]);

  const handleWhatsApp = () => {
    const phoneNumber = offer.phone;
    const message = offer.message;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleCall = () => {
    window.location.href = `tel:+${offer.phone}`;
  };

  const goToImage = (index) => {
    setCurrentImage(index);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleShare = () => {
    const shareMessage = `Check out this amazing offer: ${offer.description}`;
    if (navigator.share) {
      navigator.share({
        title: 'Exclusive Offer',
        text: shareMessage,
        url: window.location.href
      });
    } else {
      alert('Sharing not supported in this browser.');
    }
  };

  return (
    <>
      <Header />
      <div className="w-full min-h-screen flex flex-col p-4 bg-white">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 w-full max-w-6xl mx-auto">
          {!queryParams.has('section') || queryParams.get('section') !== 'more' ? (
            <>
              {/* Carousel (Left) */}
              <div className="w-full max-w-md lg:w-1/2" ref={imageRef}>
                <img
                  src={offer.src}
                  alt="Sale Banner"
                  className="w-full h-auto rounded-lg mb-2 object-cover cursor-pointer"
                  onClick={() => setCurrentImage((currentImage + 1) % offers.length)}
                />
                <div className="flex justify-center gap-2 mb-4">
                  {offers.map((_, index) => (
                    <div
                      key={index}
                      className={`rounded-full ${currentImage === index ? 'w-4 bg-[#004BFF]' : 'w-2 bg-gray-700'} h-2 cursor-pointer transition-all duration-200`}
                      onClick={() => goToImage(index)}
                    ></div>
                  ))}
                </div>
              </div>

              {/* Content (Right) */}
              <div className="w-full max-w-md text-center lg:text-left lg:w-1/2">
                <p className="text-gray-700 mb-4 px-4 lg:px-0 font-poppins font-normal text-sm sm:text-base">
                  {offer.description}
                </p>

                <div className="flex flex-col lg:flex-row items-center gap-4 mb-6 px-4 lg:px-0">
                  <div className="flex flex-row w-full lg:w-auto justify-center lg:justify-start gap-4">
                    <button
                      onClick={handleWhatsApp}
                      className="bg-[#21A400] text-white font-medium px-4 py-3 font-nunito rounded-lg shadow-lg hover:bg-black transition-all duration-300 flex-1 lg:flex-none lg:px-6 text-sm sm:text-base"
                    >
                      Chat With Us
                    </button>
                    <button
                      onClick={handleCall}
                      className="bg-[#004CFF] text-white font-nunito font-medium px-4 py-3 rounded-lg shadow-lg hover:bg-black transition-all duration-300 flex-1 lg:flex-none lg:px-6 text-sm sm:text-base"
                    >
                      Call Now
                    </button>
                  </div>
                  <button
                    onClick={handleShare}
                    className="bg-violet-600 text-white font-nunito font-medium px-4 py-3 rounded-lg shadow-lg hover:bg-black transition-all duration-300 w-full lg:w-auto lg:px-6 text-sm sm:text-base"
                  >
                    <FaShareAlt className="mr-2 inline" />
                    Share Offer
                  </button>
                </div>

                <div className="mt-6 text-gray-600 font-medium text-sm sm:text-base">
                  <p>Published on: <span className="text-gray-800">{offer.published}</span></p>
                  <p>Ends on: <span className="text-gray-800">{offer.ends}</span></p>
                </div>
              </div>
            </>
          ) : null}
        </div>

        {/* More Offers Section */}
        <div className="mt-8">
          <h2 className="text-2xl text-gray-800 text-center font-semibold mb-4">More Offers</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {offers.map((offer, index) => (
              <div
                key={index}
                className="rounded-lg shadow-lg overflow-hidden cursor-pointer p-4"
                onClick={() => navigate(`?offer=${index}`)}
              >
                <img
                  src={offer.src}
                  alt="Offer"
                  className="w-full h-[200px] object-cover"
                />
                <div className="p-2 sm:p-4 text-center">
                  <p className="font-medium text-gray-800 text-xs sm:text-sm md:text-base">{offer.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default InnerPage;
