import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import techImage1 from '../assets/img/techclub1.jpeg';
import techai from '../assets/img/techai.jpg';

const HomeContainer = () => {
  const [language, setLanguage] = useState('en'); // Default language is English

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage);
  };

  return (
    <div className="bg-gradient-to-r from-blue-900 via-indigo-600 to-cyan-400 text-white">
      {/* Language Selector */}
      <div className="text-right p-4">
        <select className="bg-white text-blue-800 px-4 py-2 rounded" onChange={handleLanguageChange} value={language}>
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          {/* Add more language options as needed */}
        </select>
      </div>

      {/* Hero Section */}
      <div className="bg-opacity-90 text-center py-16">
        <h1 className="text-4xl font-bold mb-4">Explore the World of Tech with NITUK Tech Club</h1>
        <p className="text-lg mb-8">Empowering Innovators, Connecting Minds, and Building the Future.</p>
        <img src={techai} alt="Tech Club Event" className="block mx-auto" />
        <br/>
        <Link to="/aboutus" className="bg-white text-blue-800 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 hover:bg-blue-700 hover:text-white">
          Learn More
        </Link>
      </div>

      {/* About Us Section */}
      <div className="container mx-auto my-8 p-8 bg-white rounded shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-blue-800">About Us</h2>
        <p className="text-gray-700 mb-6">
          NITUK Tech Club is a dynamic community dedicated to exploring and advancing technology. We provide a platform for enthusiasts, learners, and innovators to collaborate, learn, and create together. Whether you're a beginner or an experienced professional, there's a place for you in our tech family.
        </p>
        <Link to="/aboutus" className="text-blue-800 font-semibold hover:underline">
          Discover Our Mission
        </Link>
      </div>

      {/* Events Section */}
      <div className="container mx-auto my-8 p-8 bg-white rounded shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-blue-800">Upcoming Events</h2>
        {/* Add your event listings or a carousel here */}
        <p className="text-gray-700">Stay tuned for exciting tech events, workshops, and hackathons! Don't miss the chance to enhance your skills and connect with like-minded tech enthusiasts.</p>
        <Link to="/events" className="text-blue-800 font-semibold hover:underline">
          View All Events
        </Link>
      </div>

      {/* Image Gallery Section */}
      <div className=" flex-col gap-8 container mx-auto my-8 justify-center flex">
        {/* <img src={techImage1} alt="Tech Club Image" className="block mx-auto" /> */}
        {/* <img src={techai} alt="Tech Club Event" className="block mx-auto" /> */}
      </div>

      <div id="google_translate_element"></div>

      {/* Call to Action Section */}
      <div className="container mx-auto my-8 p-8 bg-white rounded shadow-md text-center">
        <h2 className="text-3xl font-bold mb-4 text-blue-800">Join NITUK TechClub Today!</h2>
        <p className="text-gray-700 mb-6">
          Ready to dive into the world of tech? Join our community and be part of something extraordinary. Explore new possibilities, learn from experts, and connect with fellow tech enthusiasts.
        </p>
        <Link to="/" className="bg-blue-800 text-white py-2 px-6 rounded-full text-lg font-semibold transition duration-300 hover:bg-blue-700 hover:text-white">
          Join Now
        </Link>
      </div>
    </div>
  );
};

export default HomeContainer;
