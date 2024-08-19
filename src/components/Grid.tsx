"use client";

import React, { useState, useImperativeHandle, forwardRef } from 'react';
import Node from './Node';
import styles from '../styles/Grid.module.css';

interface NodeType {
  row: number;
  col: number;
  isStart: boolean;
  isEnd: boolean;
  isWall: boolean;
  distance: number;
  isVisited: boolean;
  previousNode: NodeType | null;
  isPath?: boolean;  // New optional property to track if a node is part of the shortest path
}

interface GridProps {
  rows: number;
  cols: number;
}

const Grid = forwardRef(({ rows, cols }: GridProps, ref) => {
  const createInitialGrid = () => {
    return Array.from({ length: rows }, (_, rowIndex) =>
      Array.from({ length: cols }, (_, colIndex) => ({
        row: rowIndex,
        col: colIndex,
        isStart: rowIndex === 0 && colIndex === 0,
        isEnd: rowIndex === rows - 1 && colIndex === cols - 1,
        isWall: false,
        distance: Infinity,
        isVisited: false,
        previousNode: null,
      }))
    );
  };

  const [grid, setGrid] = useState<NodeType[][]>(createInitialGrid());
  const [mouseIsPressed, setMouseIsPressed] = useState(false);

  const handleMouseDown = (row: number, col: number) => {
    const newGrid = getNewGridWithWallToggled(grid, row, col);
    setGrid(newGrid);
    setMouseIsPressed(true);
  };

  const handleMouseEnter = (row: number, col: number) => {
    if (!mouseIsPressed) return;
    const newGrid = getNewGridWithWallToggled(grid, row, col);
    setGrid(newGrid);
  };

  const handleMouseUp = () => {
    setMouseIsPressed(false);
  };

  const handleResetGrid = () => {
    setGrid(createInitialGrid());
  };

  const handleStartAlgorithm = () => {
    const newGrid = dijkstra(grid, grid[0][0], grid[rows - 1][cols - 1]);
    setGrid([...newGrid]);  // Trigger re-render with updated grid
  };

  // Expose methods to parent component via ref
  useImperativeHandle(ref, () => ({
    handleStartAlgorithm,
    handleResetGrid,
  }));

  return (
    <div className={styles.grid}>
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className={styles.row}>
          {row.map((node, colIndex) => (
            <Node
              key={colIndex}
              node={node}
              onMouseDown={() => handleMouseDown(rowIndex, colIndex)}
              onMouseEnter={() => handleMouseEnter(rowIndex, colIndex)}
              onMouseUp={handleMouseUp}
            />
          ))}
        </div>
      ))}
    </div>
  );
});

const getNewGridWithWallToggled = (grid: NodeType[][], row: number, col: number): NodeType[][] => {
  const newGrid = grid.slice();
  const node = newGrid[row][col];
  const newNode = {
    ...node,
    isWall: !node.isWall,
  };
  newGrid[row][col] = newNode;
  return newGrid;
};

const dijkstra = (grid: NodeType[][], startNode: NodeType, endNode: NodeType): NodeType[][] => {
  console.log("Running Dijkstra's algorithm");
  const visitedNodesInOrder: NodeType[] = [];
  startNode.distance = 0;
  const unvisitedNodes = getAllNodes(grid);

  while (!!unvisitedNodes.length) {
    sortNodesByDistance(unvisitedNodes);
    const closestNode = unvisitedNodes.shift();
    if (closestNode?.isWall) continue;
    if (closestNode?.distance === Infinity) {
      console.log("No more reachable nodes");
      return grid;
    }
    closestNode!.isVisited = true;
    visitedNodesInOrder.push(closestNode!);
    if (closestNode === endNode) {
      console.log("End node reached");
      return traceShortestPath(grid, endNode);  // Trace the shortest path after reaching the end node
    }
    updateUnvisitedNeighbors(closestNode!, grid);
  }

  return grid;
};

const traceShortestPath = (grid: NodeType[][], endNode: NodeType): NodeType[][] => {
  let currentNode = endNode;
  while (currentNode.previousNode !== null) {
    currentNode = currentNode.previousNode;
    currentNode.isPath = true;  // Mark nodes in the shortest path
  }
  return grid;
};

const getAllNodes = (grid: NodeType[][]): NodeType[] => {
  const nodes: NodeType[] = [];
  for (const row of grid) {
    for (const node of row) {
      nodes.push(node);
    }
  }
  return nodes;
};

const sortNodesByDistance = (unvisitedNodes: NodeType[]) => {
  unvisitedNodes.sort((nodeA, nodeB) => nodeA.distance - nodeB.distance);
};

const updateUnvisitedNeighbors = (node: NodeType, grid: NodeType[][]) => {
  const unvisitedNeighbors = getUnvisitedNeighbors(node, grid);
  for (const neighbor of unvisitedNeighbors) {
    neighbor.distance = node.distance + 1;
    neighbor.previousNode = node;
  }
};

const getUnvisitedNeighbors = (node: NodeType, grid: NodeType[][]): NodeType[] => {
  const neighbors: NodeType[] = [];
  const { row, col } = node;
  if (row > 0) neighbors.push(grid[row - 1][col]);
  if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
  if (col > 0) neighbors.push(grid[row][col - 1]);
  if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);
  return neighbors.filter(neighbor => !neighbor.isVisited);
};

export default Grid;
