import React from 'react';
import './App.css';

function App() {
 const greeting = "greeting"; 
 return (
   <div className="container" >
    <h1 id={greeting}>Enjoy the bootcamp</h1>
    <p>Lets explore JSX</p>
    <ul>
        <li>
            <button>
              <span role="img" aria-label="grinning face" id="grinning face">😀</span>
            </button>
        </li>
        <li>
          <button>
              <span role="img" aria-label="party popper" id="party popper">🎉</span>
          </button>
        </li>
        <li>
          <button>
              <span role="img" aria-label="woman dancing" id="woman dancing">💃</span>
          </button>
        </li>
      </ul>
   </div> 
 )
}

export default App;
