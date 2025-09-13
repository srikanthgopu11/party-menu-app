// src/components/DishList.js
import React from 'react';
import DishCard from './DishCard';

function DishList({ dishes, onAddDish, onRemoveDish, selectedDishIds, onViewIngredients }) {
  return (
    <div className="dish-list">
      {dishes.length === 0 ? (
        <p>No dishes found matching your criteria.</p>
      ) : (
        dishes.map(dish => (
          <DishCard
            key={dish.id}
            dish={dish}
            onAddDish={onAddDish}
            onRemoveDish={onRemoveDish}
            isSelected={selectedDishIds.includes(dish.id)}
            onViewIngredients={onViewIngredients}
          />
        ))
      )}
    </div>
  );
}

export default DishList;