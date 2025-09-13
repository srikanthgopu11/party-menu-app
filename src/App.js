// src/App.js
import React, { useState } from 'react';
import './App.css';
import { dishes } from './data/mockDishes';
import Filters from './components/Filters';
import DishList from './components/DishList';
import IngredientModal from './components/IngredientModal';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('ALL'); 
  const [searchTerm, setSearchTerm] = useState('');
  const [foodTypeFilter, setFoodTypeFilter] = useState('ALL'); 
  const [selectedDishIds, setSelectedDishIds] = useState([]); 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentDishForModal, setCurrentDishForModal] = useState(null);

  const filteredDishes = dishes.filter(dish => {
    const matchesCategory = selectedCategory === 'ALL' || dish.mealType === selectedCategory;
    const matchesSearch = dish.name.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFoodType = foodTypeFilter === 'ALL' || dish.type === foodTypeFilter;
    
    return matchesCategory && matchesSearch && matchesFoodType;
  });

  const handleAddDish = (dishId) => {
    setSelectedDishIds(prevSelected => [...prevSelected, dishId]);
  };

  const handleRemoveDish = (dishId) => {
    setSelectedDishIds(prevSelected => prevSelected.filter(id => id !== dishId));
  };

  const handleViewIngredients = (dish) => {
    setCurrentDishForModal(dish);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentDishForModal(null);
  };

  const selectedDishes = dishes.filter(dish => selectedDishIds.includes(dish.id));

  return (
    <div className="app-container">
      <h1>Party Menu Selection App</h1>
      <Filters
        activeCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        foodTypeFilter={foodTypeFilter} 
        onFoodTypeFilterChange={setFoodTypeFilter} 
      />

      <div className="content-wrapper">
        <div className="dish-section">
          <h2>Available Dishes</h2>
          <DishList
            dishes={filteredDishes}
            onAddDish={handleAddDish}
            onRemoveDish={handleRemoveDish}
            selectedDishIds={selectedDishIds}
            onViewIngredients={handleViewIngredients}
          />
        </div>

        <div className="summary-section">
          <h2>Your Party Menu ({selectedDishes.length} items)</h2>
          {selectedDishes.length === 0 ? (
            <p>No items selected yet.</p>
          ) : (
            <ul className="selected-dishes-list">
              {selectedDishes.map(dish => (
                <li key={dish.id}>
                  {dish.name}
                  <button onClick={() => handleRemoveDish(dish.id)}>X</button>
                </li>
              ))}
            </ul>
          )}
          {selectedDishes.length > 0 && (
            <button className="confirm-button">Confirm Selection</button>
          )}
        </div>
      </div>


      {isModalOpen && (
        <IngredientModal dish={currentDishForModal} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;