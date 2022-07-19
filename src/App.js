import { useState } from 'react';
import './App.css';
import Length from './Component/Length/Length';
import Temprature from './Component/Temprature/Temprature';
import Volume from './Component/Volume/Volume';
import Weight from './Component/Weight/Weight';

function App() {

  const [unitComp, setUnitComp] = useState('Length');

  const selectUnits = (value) => {
    setUnitComp(value.target.value);
    // console.log(value.target.value);
  }

  const loadComponent = () => {
    if(unitComp === 'Length'){
      return < Length />
    }else if(unitComp === 'Temprature'){
      return <Temprature />
    }else if(unitComp === 'Volume'){
      return < Volume />
    }else if(unitComp === 'Weight'){
      return <Weight />
    }
  }

  return (
    <div className="App">
      <select name="mesurments" id="mesurments" onChange={(value) => selectUnits(value)}>
        <option value='mesurements' disabled>mesurments</option>
        <option value="Length">Length</option>
        <option value="Temprature">Temprature</option>
        <option value="Volume">Volume</option>
        <option value="Weight">Weight</option>
      </select>
      
      {
        loadComponent()                    
      }

    </div>
  );
}

export default App;
