// eslint-disable-next-line no-unused-vars
import React from 'react';
import './css/Home.css';


const AnimatedStarterPage = () => {
  return (
      <div className="starter-page">
        <div className="content">
          <h1>Welcome to My App</h1>
          <p>Get ready for an amazing journey!</p>
        </div>
      </div>  
  );
};

const App = () => {
  return (
    <div>
      <AnimatedStarterPage />
    </div>
  );
};

export default App;
