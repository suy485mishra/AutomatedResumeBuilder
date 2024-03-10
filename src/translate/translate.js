import React, { useEffect } from 'react';

const GoogleTranslate = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
    };

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
