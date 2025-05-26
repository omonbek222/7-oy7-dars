import React from 'react';
import Hero from './components/Showcase';
import Card from './components/Card'; // ✅ katta harf bilan
import Navbar from './components/Header';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card />
    </div>
  );
}

export default App;
