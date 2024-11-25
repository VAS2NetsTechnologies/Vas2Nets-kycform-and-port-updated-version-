import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='flex justify-center items-center text-center pt-10 text-gray-600'>
      <p>Copyright © {currentYear}. Vas2Nets Technologies Limited. All rights Reserved.</p>
    </footer>
  );
};

export default Footer;
