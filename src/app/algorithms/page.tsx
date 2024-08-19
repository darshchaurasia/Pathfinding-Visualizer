"use client";

import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Algorithms = () => {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <Header />
      <main className="flex-grow flex items-center justify-center">
        <div className="max-w-3xl text-center p-8">
          <h1 className="text-3xl font-bold mb-6">Algorithms</h1>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Dijkstra's Algorithm</h2>
            <p className="text-lg">
              Dijkstra's algorithm is a graph search algorithm that finds the shortest path between nodes in a graph. 
              It uses a priority queue to explore nodes, always expanding the node with the shortest known distance from 
              the start node. The algorithm guarantees the shortest path in graphs with non-negative weights.
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">A* Algorithm</h2>
            <p className="text-lg">
              A* (A-star) is a graph search algorithm that finds the shortest path between nodes using both the actual 
              distance from the start node (g-cost) and a heuristic estimate of the remaining distance to the goal (h-cost). 
              It prioritizes nodes that appear to lead most directly to the goal, making it more efficient than Dijkstra's algorithm 
              in many cases.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Algorithms;
