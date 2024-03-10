import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import techImage1 from '../assets/img/techclub1.jpeg';
import techai from '../assets/img/techai.jpg';
import { ReactSimpleChatbot } from 'react-simple-chatbot';
import App from '../chatbot/Index';
import {Slideshow} from '../pages'
import {GoogleTranslate} from '../translate';


const images = [
  'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1597733336794-12d05021d510?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];
const HomeContainer = () => {
  return (
    <div className="bg-gradient-to-r from-blue-900 via-indigo-600 to-cyan-400 text-white">
      {/* Language Selector */}
      <div className="text-right p-4">
        <GoogleTranslate />
      </div>

      {/* Hero Section */}
      <div className="bg-opacity-90 text-center py-16">
        <h1 className="text-4xl font-bold mb-4">Explore the World of Tech with NITUK Tech Club</h1>
        <p className="text-lg mb-8">Empowering Innovators, Connecting Minds, and Building the Future.</p>
        <Link to="/aboutus" className="bg-white text-blue-800 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 hover:bg-blue-700 hover:text-white">
          Learn More
        </Link>
        <img></img>
      </div>
      <div className=" flex-col gap-8 container mx-auto my-8 justify-center flex">
        {/* <img src={techImage1} alt="Tech Club Image" className="block mx-auto" /> */}
        <img src={techai} alt="Tech Club Event" className="block mx-auto" />
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

      {/* Slideshow Section */}
      <div className="container mx-auto my-8">
        <Slideshow images={images} />
      </div>

      {/* Events Section */}
      <div className="container mx-auto my-8 p-8 bg-white rounded shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-blue-800">Upcoming Events</h2>
        <p className="text-gray-700">Stay tuned for exciting tech events, workshops, and hackathons! Don't miss the chance to enhance your skills and connect with like-minded tech enthusiasts.</p>
        <Link to="/events" className="text-blue-800 font-semibold hover:underline">
          View All Events
        </Link>
      </div>

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

      {/* Chatbot Section */}
      <div className="container mx-auto my-8">
        <App />
      </div>
    </div>
  );
};



export default HomeContainer;
