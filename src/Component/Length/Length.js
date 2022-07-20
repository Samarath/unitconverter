import { useState } from "react"

const Length = () => {

    // const [number1, setnumber1] = useState('');
    // const [number2, setnumber2] = useState('');
    const [getUnitDetail, setUnitDetail] = useState(['meter', 'meter']);
   

    const getNum1 = (value) => {

        const secondInput = document.getElementById('length1'); 
        if(getUnitDetail[0] === 'meter' && getUnitDetail[1] === 'centimeter'){
            secondInput.value = value*100;
        }else if(getUnitDetail[0] === 'meter' && getUnitDetail[1] === 'kilometer'){
            secondInput.value = value/1000;
        }else if(getUnitDetail[0] === getUnitDetail[1]){
            secondInput.value = value
        }

        
    }

    const getNum2 = (value) => {
        // setnumber2(value)
        const secondInput = document.getElementById('length');

        if(getUnitDetail[1] === 'centimeter' && getUnitDetail[0] === 'meter'){            
            secondInput.value = value/100
        }else if(getUnitDetail[1] === 'kilometer' && getUnitDetail[0] === 'meter'){
            secondInput.value = value*1000;
        }else if(getUnitDetail[0] === getUnitDetail[1]){
            secondInput.value = value
        }
    }

    const equation = (value) => {
        const doc1 = document.getElementById('lengths');
        const doc2 = document.getElementById('mesure');
        const inputs = document.getElementById('length');
        const inputs1 = document.getElementById('length1');

        setUnitDetail([doc1.value, doc2.value]);

        // if(doc1.value === 'meter' && doc2.value === 'centimeter'){
        //     inputs1.value = inputs.value*100;
        // }
        console.log(getUnitDetail[0]=== doc1, getUnitDetail[0]);
        console.log(getUnitDetail[1]=== doc2, getUnitDetail[1]);
        console.log(doc1.value, inputs.value, 'doc 1')
        console.log(doc2.value, inputs1.value, 'doc 2')

        
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