import { useState } from "react"

const Length = () => {

    const [number1, setnumber1] = useState('');
    const [number2, setnumber2] = useState('');
    const [getConvertion, setConvertion] = useState([]);

    const getNum1 = (value) => {
        setnumber1(value);
        // console.log(value)
    }

    const getNum2 = (value) => {
        setnumber2(value)
        // console.log(value)
    }

    const equation = (value) => {
        const doc1 = document.getElementById('lengths');
        const doc2 = document.getElementById('mesure');
        const docs = document.getElementsByClassName('convert');
        console.log(doc1.value, doc2.value)
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
                    <option value="centimenter">Centimenter</option>
                    <option value="kilometer">Kilometer</option>
                </select>
                |
                <select name="mesure" id="mesure" className="convert" onChange={(value) => equation(value.target.value)}>
                    <option value="meter">Meter</option>
                    <option value="centimenter">Centimenter</option>
                    <option value="kilometer">Kilometer</option>
                </select>
            </div>
        </div>
    )
}

export default Length;