import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import {changeMeasurements} from './Action/index';

import Length from './Component/Length/Length';
import Temprature from './Component/Temprature/Temprature';
import Volume from './Component/Volume/Volume';
import Weight from './Component/Weight/Weight';

function App() {

  const myState = useSelector((state) => state.changeTheMeasurements)
  const dispatch = useDispatch();

  const selectUnits = (value) => {
    dispatch(changeMeasurements(value.target.value));
  }

  const loadComponent = () => {
    if(myState === 'Length'){
      return < Length />
    }else if(myState === 'Temprature'){
      return <Temprature />
    }else if(myState === 'Volume'){
      return < Volume />
    }else if(myState === 'Weight'){
      return <Weight />
    }
  }

  return (
    <div className="App">

      <h1>Conversion App</h1>

      <select name="mesurments" id="mesurments" onChange={(value) => selectUnits(value)} defaultValue={'mesurements'}>
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
