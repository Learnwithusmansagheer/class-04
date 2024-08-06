// index.js or App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import React from 'react';
import './App.css';
import Landing from './component/pages/landing/Landing';
import Footer from './component/footer/Footer';




// Import image assets
function App() {

  return (
    <>
      <Landing />
  
      <Footer/>

    </>
  );
}

export default App;

