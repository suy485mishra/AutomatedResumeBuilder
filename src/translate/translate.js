import React, { useEffect } from 'react';

const GoogleTranslate = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;

    // Add event listener to handle script loading errors
    script.onerror = (error) => {
      console.error('Error loading Google Translate script:', error);
    };

    // Append script to the document body
    document.body.appendChild(script);

    // Define Google Translate initialization function
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
    };

    // Clean up function
    return () => {
      document.body.removeChild(script);
      delete window.googleTranslateElementInit;
    };
  }, []); // Empty dependency array ensures that useEffect runs only once

  return (
    <div id="google_translate_element"></div>
  );
};

export default GoogleTranslate;
