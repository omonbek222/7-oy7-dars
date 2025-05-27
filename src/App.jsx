import React from 'react';
import Navbar from './components/Header';
import Hero from './components/Showcase';
import Card from './components/Card';
import CurrencyExchange from './components/CurrencyExchange'; 
import ConciergeService from './components/ConciergeService'; 
import Wallet from './components/Wallet';
import InDevelopment from './components/InDevelopment';
import SecureFunds from './components/SecureFunds'; 
import VisionSection from './components/VisionSection';
import Fotter from './components/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card />
      <CurrencyExchange /> 
      <ConciergeService /> 
      <Wallet />
      <InDevelopment />
      <SecureFunds /> 
      <VisionSection /> 
      <Fotter/>
    </div>
  );
}

export default App;
