import {useState} from 'react';
import {useEffect} from 'react';
import axios from 'axios';


function StarWars(props) {
    const {input, index} = props;
    const [displayInfo, setDisplayInfo] = useState({});
    const [errors, setErrors] = useState(null);

    useEffect ( () => {
        axios.get("https://swapi.dev/api/" + input + "/" + index)
            .then((response) => {setDisplayInfo(response.data)})
            .catch(setErrors);
        if (input === "planets" || input === "people") {
        }
    }, [displayInfo]);

    if (errors === null) {
        if (input === "people") {
            return (
                <div>
                    <h1>{displayInfo.name}</h1>
                    <ul>
                        <li>Height: {displayInfo.height}</li>
                        <li>Mass: {displayInfo.mass}</li>
                        <li>Hair Color: {displayInfo.hair_color}</li>
                        <li>Skin_Color: {displayInfo.skin_color}</li>
                        <li>Eye Color: {displayInfo.eye_color}</li>
                        <li>Gender: {displayInfo.gender}</li>
                    </ul>
                </div>
            );
        } else if (input === "planets") {
            return (
                <div>
                    <h1>{displayInfo.name}</h1>
                    <ul>
                        <li>Rotation Period: {displayInfo.rotation_period}</li>
                        <li>Orbital Period: {displayInfo.orbital_period}</li>
                        <li>Diameter: {displayInfo.diameter}</li>
                        <li>Climate: {displayInfo.climate}</li>
                        <li>Gravity: {displayInfo.gravity}</li>
                        <li>Terrain: {displayInfo.terrain}</li>
                    </ul>
                </div>
            );
        }
    } else {
        return (
            <div>
                <img src="https://lumiere-a.akamaihd.net/v1/images/Obi-Wan-Kenobi_6d775533.jpeg?region=0%2C0%2C1536%2C864&width=960"/>
                <h2>These aren't the droids you're looking for!</h2>
            </div>
        );
    }
    
}

export default StarWars;