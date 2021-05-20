import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate, Link } from '@reach/router';

import PetForm from '../components/PetForm';


const Update = props => {
    const { id, } = props;
    const [pet, setPet] = useState();
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/pet/' + id)
            .then(res => {
                setPet(res.data);
                setLoaded(true);
            })
    }, [])
    
    const updatePet = pet => {
        axios.put('http://localhost:8000/api/pet/' + id, pet)
            .then(res => navigate("/"))
            .catch(err=>{
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr)
            });
    }
    
    return (
        <div>
            <h1>Pet Shelter</h1>
            <Link to={"/"}>back to home</Link>
            <h3>Edit </h3>
            {errors.map((err, index) => <p key={index} style={{color: "red"}}>{err}</p>)}
            {loaded && (
                <div>
                    <PetForm
                        onSubmitProp={updatePet}
                        initialPetName={pet.petName}
                        initialPetType={pet.petType}
                        initialPetDescription={pet.petDescription}
                        initialSkillOne={pet.skillOne}
                        initialSkillTwo={pet.skillTwo}
                        initialSkillThree={pet.skillThree}
                    />
                </div>
            )}
        </div>
    )
}

export default Update;