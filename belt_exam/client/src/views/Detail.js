import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Link} from '@reach/router';
import { navigate } from '@reach/router';


const Detail = props => {
    const [pet, setPet] = useState({})
    
    useEffect(() => {
        axios.get("http://localhost:8000/api/pet/" + props.id)
            .then(res => setPet(res.data))
    }, [])

    // function handleLike(index) {
    //     //send a request to the backend
    //     const petToUpdate = pet[index];

    //     axios.post('http://localhost:8000/api/pet/' + petToUpdate.id + '/likes')
    //         .then(response => {
    //             const updatedPet = response.data;

    //             const clonedPet = pet.slice(); //avoid mutating the current array
    //             clonedPet[index] = updatedPet;
    //             setPet(clonedPet);
    //         })
    // }

    const deletePet = (petId) => {
        axios.delete('http://localhost:8000/api/pet/' + petId)
            .then(res => {
                navigate ("/")
            })
    }
    
    return (
        <div>
            <h1>Pet Shelter</h1>
            <Link to={"/"}>back to home</Link>
            <h3>Details about: {pet.petName}</h3>
            <button onClick={(e)=>{deletePet(pet._id)}}>
                Adopt {pet.petName}
            </button>
            <p>Pet Type: {pet.petType}</p>
            <p>Description: {pet.petDescription}</p>
            <p>Skills: {pet.skillOne}, {pet.skillTwo}, {pet.skillThree}</p>
            {/* <div>
                <button onClick={() => handleLike()}>Like</button>
                <p>{pet.likes} Likes</p>
            </div> */}
        </div>
    )
}

export default Detail;