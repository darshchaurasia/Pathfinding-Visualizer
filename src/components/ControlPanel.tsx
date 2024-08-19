import React from 'react';

interface ControlPanelProps {
  onStartDijkstra: () => void;
  onStartAStar: () => void;
  onReset: () => void;
}

const ControlPanel: React.FC<ControlPanelProps> = ({ onStartDijkstra, onStartAStar, onReset }) => {
  return (
    <div className="my-4 flex space-x-4">
      <button
        onClick={onStartDijkstra}
        className="py-2 px-4 rounded hover:bg-white hover:text-purple-500 active:bg-white active:text-purple-500"
      >
        Start Dijkstra
      </button>
      <button
        onClick={onStartAStar}
        className="py-2 px-4 rounded hover:bg-white hover:text-purple-500 active:bg-white active:text-purple-500"
      >
        Start A*
      </button>
      <button
        onClick={onReset}
        className="py-2 px-4 rounded hover:bg-white hover:text-purple-500 active:bg-white active:text-purple-500"
      >
        Reset Grid
      </button>
    </div>
  );
};

export default ControlPanel;
