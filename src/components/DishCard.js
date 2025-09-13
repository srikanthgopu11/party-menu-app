// src/components/DishCard.js
import React from 'react';

function DishCard({ dish, onAddDish, onRemoveDish, isSelected, onViewIngredients }) {
  return (
    <div className="dish-card">
      <img src={dish.image} alt={dish.name} className="dish-image" />
      <h3>{dish.name}</h3>
      <p className="dish-description">{dish.description}</p>
      <div className="dish-actions">
        {isSelected ? (
          <button className="remove-button" onClick={() => onRemoveDish(dish.id)}>Remove</button>
        ) : (
          <button className="add-button" onClick={() => onAddDish(dish.id)}>Add</button>
        )}
        <button className="ingredients-button" onClick={() => onViewIngredients(dish)}>Ingredients</button>
      </div>
    </div>
  );
}

export default DishCard;