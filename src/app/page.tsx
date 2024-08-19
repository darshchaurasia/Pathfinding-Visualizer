"use client";

import React, { useRef } from 'react';
import Grid from '../components/Grid';
import Header from '../components/Header';
import ControlPanel from '../components/ControlPanel';
import './globals.css';

const HomePage = () => {
  const gridRef = useRef<{ handleStartAlgorithm: () => void; handleResetGrid: () => void }>(null);

  const handleStartAlgorithm = () => {
    if (gridRef.current) {
      gridRef.current.handleStartAlgorithm();
    } else {
      console.error("Grid ref is not available");
    }
  };

  const handleResetGrid = () => {
    if (gridRef.current) {
      gridRef.current.handleResetGrid();
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      <Header />
      <ControlPanel onStart={handleStartAlgorithm} onReset={handleResetGrid} />
      <Grid ref={gridRef} rows={20} cols={20} />
    </div>
  );
};

export default HomePage;
