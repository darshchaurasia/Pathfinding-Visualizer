import React from 'react';

interface ControlPanelProps {
  onStartDijkstra: () => void;
  onStartAStar: () => void;
  onReset: () => void;
}

const ControlPanel: React.FC<ControlPanelProps> = ({ onStartDijkstra, onStartAStar, onReset }) => {
  return (
    <div className="my-4 flex space-x-4">
      <button onClick={onStartDijkstra} className="bg-green-500 text-white py-2 px-4 rounded">
        Start Dijkstra
      </button>
      <button onClick={onStartAStar} className="bg-blue-500 text-white py-2 px-4 rounded">
        Start A*
      </button>
      <button onClick={onReset} className="bg-red-500 text-white py-2 px-4 rounded">
        Reset Grid
      </button>
    </div>
  );
};

export default ControlPanel;
