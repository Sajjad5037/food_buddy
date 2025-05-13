import './App.css';

import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [restaurants, setRestaurants] = useState([]);  // State to store fetched restaurant data
  const [loading, setLoading] = useState(true);         // State to manage loading state
  const [error, setError] = useState(null);             // State to handle errors

  // Simulating API call
  useEffect(() => {
    // Replace this URL with the actual API URL later
    fetch('http://127.0.0.1:8000/restaurants')  // Placeholder URL
      .then(response => response.json())
      .then(data => {
        setRestaurants(data);       // Update state with restaurant data
        setLoading(false);          // Set loading to false after data is fetched
      })
      .catch(error => {
        setError(error);            // If error occurs, update the error state
        setLoading(false);
      });
  }, []);  // Empty dependency array to run only once after the initial render

  if (loading) {
    return <div>Loading...</div>;  // Display loading message
  }

  if (error) {
    return <div>Error: {error.message}</div>;  // Display error message
  }

function App() {
  return (
    <div className="App" style={{ padding: '20px' }}>
      <h1>Nearby Restaurants</h1>
      <div className="restaurant-list" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {dummyRestaurants.map((restaurant) => (
          <div key={restaurant.id} className="restaurant-card" style={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            width: '300px',
            padding: '10px'
          }}>
            <img 
              src={restaurant.image} 
              alt={restaurant.name} 
              style={{ width: '100%', borderRadius: '5px' }} 
            />
            <h2>{restaurant.name}</h2>
            <p>{restaurant.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
