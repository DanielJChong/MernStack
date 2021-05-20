import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';

import PetList from '../components/PetList';

const Main = () => {
    const [pet, setPet] = useState([]);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/pet')
            .then(res =>{ 
                setPet(res.data)
                setLoaded(true);
            });
    }, [])
    
    const removeFromDom = petId => {
        setPet(pet.filter(pet => pet._id != petId));
    }
    
    return (
        <div>
            <h1>Pet Shelter</h1>
            <Link to={"/pets/new"}>Add a pet to the shelter</Link>
            <h3>These pets are looking for a good home</h3>
            {loaded && <PetList pet={pet} removeFromDom={removeFromDom}/>}
        </div>
    )
}

export default Main;