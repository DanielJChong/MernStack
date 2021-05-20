import {useState} from 'react';
import {navigate} from '@reach/router';


function Form() {
    const [input, setInput] = useState("people");
    const [index, setIndex] = useState();

    function submitInfo(e) {
        e.preventDefault();
        navigate("/" + input + "/" + index);
    }

    return (
        <div>
            <form onSubmit={submitInfo}>

                <label>Search for:</label>
                <select onChange={ (e) => setInput(e.target.value)}>
                    <option value="people">people</option>
                    <option value="planets">planets</option>
                </select>
                <label>ID:</label>
                <input type="number" onChange={ (e) => setIndex(+e.target.value)}></input>
                <button>Search</button>
            </form>
        </div>
    );
}

export default Form;