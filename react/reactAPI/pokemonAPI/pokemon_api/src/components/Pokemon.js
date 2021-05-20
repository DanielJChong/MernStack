import {useState} from 'react';
import axios from 'axios';


function Pokemon() {
    const [result, setResult] = useState([]);

    function handleClick(event) {

        // fetch('https://pokeapi.co/api/v2/pokemon?limit=808&offset=0')
        // .then(response => response.json())
        // .then(response => {
        //     console.log(response);
        //     setResult(response.results)
        // })

        axios.get('https://pokeapi.co/api/v2/pokemon?limit=808&offset=0')
        .then(response => setResult(response.data.results))
    } 

    return (
        <div>
            <button onClick={handleClick}>Fetch Pokemon</button>
                <div>
                    <ul>{
                        result.map( (pokemon, idx) =>
                            <li key={idx}>{ pokemon.name }</li>
                        )}
                    </ul>
                </div>
        </div>
    );
}

export default Pokemon;