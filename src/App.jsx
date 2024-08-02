// index.js or App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from 'react';
import './App.css';
import Landing from './component/pages/landing/Landing';

import AllCardCall from './component/technologyCapabilites/AllCardCall';


// Import image assets
const App = () => {

  return (
    <>
    <Landing/>
   <AllCardCall/>
  </>
  );
};

export default App;

