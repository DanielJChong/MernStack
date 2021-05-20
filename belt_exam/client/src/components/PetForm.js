import React, { useState } from 'react';


const PetForm = props => {
    const { initialPetName, initialPetType, initialPetDescription, initialSkillOne,initialSkillTwo,initialSkillThree, onSubmitProp } = props;
    const [petName, setPetName] = useState(initialPetName);
    const [petType, setPetType] = useState(initialPetType);
    const [petDescription, setPetDescription] = useState(initialPetDescription);
    const [skillOne, setSkillOne] = useState(initialSkillOne);
    const [skillTwo, setSkillTwo] = useState(initialSkillTwo);
    const [skillThree, setSkillThree] = useState(initialSkillThree);
    
    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({petName, petType, petDescription, skillOne, skillTwo, skillThree});
    }
        
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Pet Name:</label><br />
                <input 
                    type="text" 
                    name="petName" value={petName} 
                    onChange={(e) => { setPetName(e.target.value) }} />
            </p>
            <p>
                <label>Pet Type:</label><br />
                <input 
                    type="text" 
                    name="petType" 
                    value={petType} 
                    onChange={(e) => { setPetType(e.target.value) }} />
            </p>
            <p>
                <label>Pet Description:</label><br />
                <input 
                    type="text" 
                    name="petDescription" 
                    value={petDescription} 
                    onChange={(e) => { setPetDescription(e.target.value) }} />
            </p><br/>
            <p>Skills (Optional):</p>
            <p>
                <label>Skill 1:</label><br />
                <input 
                    type="text" 
                    name="skillOne" 
                    value={skillOne} 
                    onChange={(e) => { setSkillOne(e.target.value) }} />
            </p>
            <p>
                <label>Skill 2:</label><br />
                <input 
                    type="text" 
                    name="skillTwo" 
                    value={skillTwo} 
                    onChange={(e) => { setSkillTwo(e.target.value) }} />
            </p>
            <p>
                <label>Skill 3:</label><br />
                <input 
                    type="text" 
                    name="skillThree" 
                    value={skillThree} 
                    onChange={(e) => { setSkillThree(e.target.value) }} />
            </p>
            <input type="submit"/>
        </form>
    )
}

export default PetForm;