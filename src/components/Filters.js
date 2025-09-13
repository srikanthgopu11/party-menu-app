// src/components/Filters.js
import React from 'react';

function Filters({ activeCategory, onCategoryChange, searchTerm, onSearchChange, foodTypeFilter, onFoodTypeFilterChange }) {
  const categories = ['ALL', 'STARTER', 'MAIN COURSE', 'DESSERT', 'SIDES'];
  const foodTypes = ['ALL', 'VEG', 'NON-VEG']; 

  return (
    <div className="filters-container">
      <div className="category-tabs">
        {categories.map(category => (
          <button
            key={category}
            className={`category-button ${activeCategory === category ? 'active' : ''}`}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="search-and-foodtype-filter">
        <input
          type="text"
          placeholder="Search dishes..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="search-input"
        />

        <div className="food-type-radios">
          {foodTypes.map(type => (
            <label key={type} className="food-type-label">
              <input
                type="radio"
                name="foodType"
                value={type}
                checked={foodTypeFilter === type}
                onChange={(e) => onFoodTypeFilterChange(e.target.value)}
              />
              {type}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Filters;