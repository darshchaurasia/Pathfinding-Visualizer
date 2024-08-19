"use client";

import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Vortex } from '../../components/vortex';  // Import the Vortex component

const About = () => {
  return (
    <Vortex
      backgroundColor="black"
      className="flex flex-col items-center justify-center px-2 md:px-10 py-4 w-full h-full min-h-screen"
    >
      <Header />
      <main className="flex-grow flex items-center justify-center">
        <div className="max-w-2xl text-center p-8">
          <h1 className="text-white text-3xl font-bold mb-4">About This Website</h1>
          <p className="text-white text-lg">
            This website is a pathfinding visualizer that demonstrates how various pathfinding algorithms like Dijkstra's and A* work. 
            You can set start and end points on a grid, place obstacles, and watch as the algorithms find the shortest path in real-time. 
            Explore different algorithms and learn how they efficiently navigate through the grid!
          </p>
        </div>
      </main>
      <Footer />
    </Vortex>
  );
};

export default About;
