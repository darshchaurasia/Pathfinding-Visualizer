"use client";

import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Vortex } from '../../components/vortex'; 

const Demo = () => {
  return (
    <Vortex
      backgroundColor="black"
      className="flex flex-col min-h-screen"
    >
      <Header />
      <main className="flex-grow flex items-center justify-center">
        <div className="max-w-4xl p-8">
          <h1 className="text-4xl font-bold mb-4 text-center">Demo</h1> 
          
          {/* Video Embed using iframe */}
          <div className="flex justify-center">
            <iframe
              src="https://drive.google.com/file/d/1lm1pbVqkwTwLcK1M1SWiFfZsHGrDR01i/preview"
              width="640"
              height="480"
              allow="autoplay"
            ></iframe>
          </div>
        </div>
      </main>
      <Footer />
    </Vortex>
  );
};

export default Demo;
