"use client"
import React, { useEffect } from 'react';
import Image from 'next/image';

const TLoader = () => {
  useEffect(() => {
    const handleLoad = () => {
      const loader = document.querySelector('.loader');

      if (loader) {
        loader.classList.add('loader--hidden');

        loader.addEventListener('transitionend', () => {
          if (loader.parentNode) {
            loader.parentNode.removeChild(loader);
          }
        });
      }
    };

    window.addEventListener('load', handleLoad);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <div>
      <style jsx>{`
        .loader {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: opacity 0.75s, visibility 0.75s;
        }

        .loader--hidden {
          opacity: 0;
          visibility: hidden;
        }

        .loader::after {
          content: "";
          position:fixed;
          width: 130px;
          height: 130px;
          border: 15px solid #dddddd;
          border-top-color: #009578; /* Initial color */
          border-radius: 50%;
          animation: loading 0.75s ease infinite, colorChange 3s linear infinite;
        }

        @keyframes loading {
          from {
            transform: rotate(0turn);
          }
          to {
            transform: rotate(1turn);
          }
        }

        @keyframes colorChange {
          0% {
            border-top-color: #009578; /* Dark blue */
          }
          50% {
            border-top-color: #1e90ff; /* Slightly dark blue */
          }
          100% {
            border-top-color: #add8e6; /* Light blue */
          }
        }
        
      `}</style>
      <div className='loader'>
        <p><Image src="/images/logo.png" alt='logo' width={80} height={80}></Image></p>
      </div>
    </div>
  );
};

export default TLoader;
