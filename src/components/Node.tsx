import React from 'react';

interface NodeProps {
  node: {
    row: number;
    col: number;
    isStart: boolean;
    isEnd: boolean;
    isWall: boolean;
    isVisited: boolean;
    isPath?: boolean;  // Optional property for nodes in the shortest path
  };
  onMouseDown: () => void;
  onMouseEnter: () => void;
  onMouseUp: () => void;
}

const Node: React.FC<NodeProps> = ({ node, onMouseDown, onMouseEnter, onMouseUp }) => {
  const { isStart, isEnd, isWall, isVisited, isPath } = node;

  const extraClassName = isStart
    ? 'bg-green-500'
    : isEnd
    ? 'bg-red-500'
    : isWall
    ? 'bg-black'
    : isPath
    ? 'bg-yellow-500'  // New color for nodes in the shortest path
    : isVisited
    ? 'bg-blue-500'  // Color for visited nodes
    : 'bg-white';

  return (
    <div
      onMouseDown={onMouseDown}
      onMouseEnter={onMouseEnter}
      onMouseUp={onMouseUp}
      className={`w-8 h-8 border border-gray-300 ${extraClassName}`}
    />
  );
};

export default Node;
