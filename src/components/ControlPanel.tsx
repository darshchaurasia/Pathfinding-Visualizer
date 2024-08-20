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
        className="py-2 px-4 rounded hover:bg-[#8B5CF6] hover:text-white"
      >
        Start Dijkstra
      </button>
      <button
        onClick={onStartAStar}
        className="py-2 px-4 rounded hover:bg-[#8B5CF6] hover:text-white"
      >
        Start A*
      </button>
      <button
        onClick={onReset}
        className="py-2 px-4 rounded hover:bg-[#8B5CF6] hover:text-white"
      >
        Reset Grid
      </button>
    </div>
  );
};

export default ControlPanel;
