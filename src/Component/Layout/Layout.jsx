import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  const [paddingTop, setPaddingTop] = useState('20px'); // Initial padding-top

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setPaddingTop('0px'); // Padding-top when scrolled down
      } else {
        setPaddingTop('20px'); // Initial padding-top when at the top
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar paddingTop={paddingTop} />
      <div className="container flex-col w-full flex justify-center items-center">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
