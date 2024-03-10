import React from 'react';

const ContactUs = () => {
  return (
    <div className="container mx-auto my-8 px-6 py-8 bg-gradient-to-r from-blue-100 to-blue-50 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-800">Contact Us</h1>
      <form className="flex flex-col space-y-4">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-gray-800">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            className="rounded-lg border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 outline-none px-4 py-2"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="text-gray-800">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            className="rounded-lg border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 outline-none px-4 py-2"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message" className="text-gray-800">Message:</label>
          <textarea
            id="message"
            name="message"
            className="rounded-lg border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 outline-none px-4 py-2 h-32 resize-none"
            required
          ></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition-colors duration-300 focus:outline-none focus:ring focus:ring-blue-500">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactUs;
