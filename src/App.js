import React from "react";
import { BrowserRouter } from 'react-router-dom';
import Main from './components/Main.js';
import './/node_modules/bootstrap/dist/css/bootstrap.min.css';
import './/node_modules/@fortawesome/react-fontawesome';

function App() { 
  return (
    <div className="App">
      <BrowserRouter>
        <Main/>
      </BrowserRouter>
    </div>
  );
}

export default App;
