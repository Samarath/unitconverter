import { useSelector, useDispatch } from 'react-redux';
import { changeValue } from "../../Action/index";

const Length = () => {

    // const [myState, setUnitDetail] = useState(['meter', 'meter']);
    const myState = useSelector((state) => state.changeTheValue)
    const dispatch = useDispatch();
   

    const getNum1 = (value) => {

        const secondInput = document.getElementById('length1'); 
        if(myState[0] === 'meter' && myState[1] === 'centimeter'){
            secondInput.value = value*100;
        }else if(myState[0] === 'meter' && myState[1] === 'kilometer'){
            secondInput.value = value/1000;
        }else if(myState[0] === myState[1]){
            secondInput.value = value
        }else if(myState[0] === 'centimeter' && myState[1] === 'meter'){
            secondInput.value = value/100
        }else if(myState[0] === 'kilometer' && myState[1] === 'meter'){
            secondInput.value = value*1000;
        }else if(myState[0] === 'centimeter' && myState[1] === 'kilometer'){
            secondInput.value = value/100000;
        }
    }

    const getNum2 = (value) => {

        const secondInput = document.getElementById('length');
        if(myState[1] === 'centimeter' && myState[0] === 'meter'){           
            secondInput.value = value/100
        }else if(myState[1] === 'kilometer' && myState[0] === 'meter'){
            secondInput.value = value*1000;
        }else if(myState[0] === myState[1]){
            secondInput.value = value
        }else if(myState[1] === 'meter' && myState[0] === 'centimeter'){
            secondInput.value = value*100;
        }else if(myState[1] === 'kilometer' && myState[0] === 'centimeter'){
            secondInput.value = value*100000;
        }
    }

    const equation = (value) => {
        const doc1 = document.getElementById('lengths');
        const doc2 = document.getElementById('mesure');
        const inputs = document.getElementById('length');
        const inputs1 = document.getElementById('length1');

        console.log(myState);
        dispatch(changeValue([doc1.value, doc2.value]));
        // setUnitDetail([doc1.value, doc2.value]);

        //for second unit change

        if(doc1.value === 'meter' && doc2.value === 'centimeter'){     
            if(inputs.value !== ''){
                inputs1.value = inputs.value * 100;
            }
        }else if(doc1.value === 'meter' && doc2.value === 'kilometer'){
            inputs1.value = inputs.value/1000;
        }else if(doc1.value === 'meter' && doc2.value === 'meter'){
            inputs1.value = inputs.value
        }else if(doc1.value === 'centimeter' && doc2.value === 'meter'){
            inputs1.value = inputs.value/100;
        }else if(doc1.value === 'centimeter' && doc2.value === 'kilometer'){
            inputs1.value = inputs.value/100000;
        }else if(doc1.value === 'kilometer' && doc2.value === 'meter'){
            inputs1.value = inputs.value*1000;
        }else if(doc1.value === 'kilometer' && doc2.value === 'centimeter'){
            inputs1.value = inputs.value*100000;
        }else if(doc1.value === doc2.value){
            inputs1.value = inputs.value
        }
        
    }

    

    return (
        <div>
            <div>
                <input type='text' id="length" name="length" placeholder="Enter Number" onChange={(value) => getNum1(value.target.value)}/> |
                
                <input type='text' id="length1" name="length1" placeholder="Enter Number" onChange={(value) => getNum2(value.target.value)}/>
            </div>
            <div>
               <select name="lengths" id="lengths" className="convert" onChange={(value) => equation(value.target.value)}>
                    <option value="meter">Meter</option>
                    <option value="centimeter">Centimeter</option>
                    <option value="kilometer">Kilometer</option>
                </select>
                |
                <select name="mesure" id="mesure" className="convert" onChange={(value) => equation(value.target.value)}>
                    <option value="meter">Meter</option>
                    <option value="centimeter">Centimeter</option>
                    <option value="kilometer">Kilometer</option>
                </select>
            </div>
        </div>
    )
}

export default Length;