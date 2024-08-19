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
  distance: number;  // This will be the `g` cost for A*
  isVisited: boolean;
  previousNode: NodeType | null;
  isPath?: boolean;  // To track if a node is part of the shortest path
  f: number;  // f = g + h (total cost in A*)
  h: number;  // Heuristic cost in A*
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
        f: 0,
        h: 0,
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
    // Reset the grid before running the Dijkstra algorithm
    const resetGrid = grid.map(row =>
      row.map(node => ({
        ...node,
        distance: Infinity,
        isVisited: false,
        previousNode: null,
        isPath: false,  // Reset the path property
        f: 0,
        h: 0,
      }))
    );
    setGrid(resetGrid);  // Ensure the grid state is reset

    const newGrid = dijkstra(resetGrid, resetGrid[0][0], resetGrid[rows - 1][cols - 1]);
    setGrid([...newGrid]);  // Trigger re-render with the updated grid
  };

  const handleStartAStar = () => {
    // Reset the grid before running the A* algorithm
    const resetGrid = grid.map(row =>
      row.map(node => ({
        ...node,
        distance: Infinity,
        isVisited: false,
        previousNode: null,
        isPath: false,
        f: 0,  // Reset f cost
        h: 0,  // Reset heuristic cost
      }))
    );
    setGrid(resetGrid);  // Ensure the grid state is reset

    const newGrid = aStar(resetGrid, resetGrid[0][0], resetGrid[rows - 1][cols - 1]);
    setGrid([...newGrid]);  // Trigger re-render with the updated grid
  };

  // Expose methods to parent component via ref
  useImperativeHandle(ref, () => ({
    handleStartAlgorithm,
    handleStartAStar,  // Expose A* method to parent component
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
      const closestNode = unvisitedNodes.shift() || null;  // Ensure closestNode is either NodeType or null
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

  const aStar = (grid: NodeType[][], startNode: NodeType, endNode: NodeType): NodeType[][] => {
    const openSet: NodeType[] = [];  // Nodes to be evaluated
    const closedSet: NodeType[] = [];  // Nodes already evaluated
  
    startNode.distance = 0;  // g cost
    startNode.h = heuristic(startNode, endNode);  // Heuristic cost
    startNode.f = startNode.distance + startNode.h;  // f cost
    openSet.push(startNode);
  
    while (openSet.length > 0) {
      // Sort the open set by f cost (lowest f first)
      openSet.sort((a, b) => a.f - b.f);
      const currentNode = openSet.shift() || null;  // Ensure currentNode is either NodeType or null
  
      if (currentNode?.isWall) continue;  // Skip walls
      if (currentNode === endNode) {
        return traceShortestPath(grid, endNode);  // Found the path
      }
  
      closedSet.push(currentNode!);
      currentNode!.isVisited = true;
  
      const neighbors = getUnvisitedNeighbors(currentNode!, grid);
      for (const neighbor of neighbors) {
        if (closedSet.includes(neighbor)) continue;
  
        const tentativeG = currentNode!.distance + 1;
        if (!openSet.includes(neighbor)) {
          openSet.push(neighbor);
        } else if (tentativeG >= neighbor.distance) {
          continue;  // This is not a better path
        }
  
        neighbor.previousNode = currentNode;
        neighbor.distance = tentativeG;  // g cost
        neighbor.h = heuristic(neighbor, endNode);  // Heuristic cost
        neighbor.f = neighbor.distance + neighbor.h;  // f cost
      }
    }
  
    return grid;  // If no path is found
  };
  

const heuristic = (nodeA: NodeType, nodeB: NodeType) => {
  return Math.abs(nodeA.row - nodeB.row) + Math.abs(nodeA.col - nodeB.col);  // Manhattan distance
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
