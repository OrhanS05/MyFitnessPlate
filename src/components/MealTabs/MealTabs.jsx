import React from 'react';
import './MealTabs.css';

function MealTabs({ options, activeTab, onTabSelect }) {
  return (
    <div className="meal-tabs">
      {options.map((option) => (
        <button
          key={option}
          className={`meal-tab ${activeTab === option ? 'active' : ''}`}
          onClick={() => onTabSelect(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default MealTabs;
