import './App.css';

const dummyRestaurants = [
  {
    id: 1,
    name: "Spice Villa",
    image: "https://via.placeholder.com/300x200?text=Spice+Villa",
    description: "Authentic Indian cuisine with a modern twist."
  },
  {
    id: 2,
    name: "Burger Hub",
    image: "https://via.placeholder.com/300x200?text=Burger+Hub",
    description: "Juicy burgers and crispy fries served fresh."
  },
  {
    id: 3,
    name: "Green Delight",
    image: "https://via.placeholder.com/300x200?text=Green+Delight",
    description: "Vegan and vegetarian meals for a healthy lifestyle."
  }
];

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
