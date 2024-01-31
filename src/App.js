import React from 'react';
import Headers from './components/Headers';
import Profile from './components/Profile';
import Value from './components/Value';
import Brand from './components/Brand';
import Product from './components/Product';
import Footer from './components/Footer';
import Contact from './components/Contact';



function App() {
  return (
    <div className="font-body">
      <Headers/>
      <Profile/>
      <Brand/>
      <div className="bg-white container shadow-2xl rounded-3xl mb-24">
        <Product/>
        <Value/>
        <Contact/>
      </div>
      <Footer/>
      
    </div>
  );
};

export default App;
