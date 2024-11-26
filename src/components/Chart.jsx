import React from "react";

function Chart({ isActive }) {
  return (
    <div className={`p-8 rounded-xl shadow-lg max-w-md w-full ${isActive ? 'bg-blue-700' : ''}`}>
      <h1 className="text-4xl font-bold text-center text-white mb-8">
        Hiragana Quiz
      </h1>
    </div>
  );
}

export default Chart;
