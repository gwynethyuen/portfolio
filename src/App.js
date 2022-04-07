// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a> */}
//       </header>
//     </div>
//   );
// }

// export default App;


import React from "react";
import { BrowserRouter } from 'react-router-dom';
//import './App.css';
//import ClientTopBar from './components/ClientTopNav.js';
import Main from './components/Main.js';
import './/node_modules/bootstrap/dist/css/bootstrap.min.css';
import './/node_modules/@fortawesome/react-fontawesome';
// import './css/main.css';

function App() {
  const [data, setData] = React.useState(null);

  /*
  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);*/
  
  return (
    <div className="App">
      <BrowserRouter>
        <Main/>
      </BrowserRouter>
    </div>
  );
}

export default App;
