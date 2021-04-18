import React from 'react';
import './App.css';

import animals from './data';
import AnimalCard from '../AnimalCard/AnimalCard';

import Alert from '../Alert/Alert';

function App() {
  return (
    <div className="wrapper">      
{animals.map(animal =>
        <AnimalCard
          diet={animal.diet}
          key={animal.name}
          name={animal.name}
          size={animal.size}
          scientificName={animal.scientificName}
        />
      
      )}
<Alert />
    </div>
  );
}

export default App;
