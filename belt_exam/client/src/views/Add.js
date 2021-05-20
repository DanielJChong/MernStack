import React, {useState} from 'react';
import axios from 'axios';
import {Link, redirect} from '@reach/router';
import {navigate} from '@reach/router';

import PetForm from '../components/PetForm';

const Add = () => {
    const [errors, setErrors] = useState([]);

    const createPet = pet => {
        axios.post('http://localhost:8000/api/pet', pet)
            .then(res=>{
                navigate ("/");
                
            }) 
            .catch(err=>{
                const errorResponse = err.response.data.errors; 
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) { 
                    errorArr.push(errorResponse[key].message)
                    console.log(errorResponse[key].message)
                }
                setErrors(errorArr);
            })
    }

    return (
        <div>
            <h1>Pet Shelter</h1>
            <Link to={"/"}>back to home</Link>
            <h3>Know a pet needing a home?</h3>
            {errors.map((err, index) => <p key={index} style={{color: "red"}}>{err}</p>)}
            <PetForm
                onSubmitProp={createPet}
                initialPetName=""
                initialPetType=""
                initialPetDescription=""
                initialSkillOne=""
                initialSkillTwo=""
                initialSkillThree=""
            />
        </div>
    )
}

export default Add;


// import React, {useState} from 'react';
// import axios from 'axios';
// import {Link, redirect} from '@reach/router';
// import {navigate} from '@reach/router';


// function Add() {
//     const [petName, setPetName] = useState();
//     const [petType, setPetType] = useState();
//     const [petDescription, setPetDescription] = useState();
//     const [skillOne, setSkillOne] = useState();
//     const [skillTwo, setSkillTwo] = useState();
//     const [skillThree, setSkillThree] = useState();
//     const [errors, setErrors] = useState([]);

//     const onSubmitHandler = e => {
//         e.preventDefault();
        
    
//         axios.post('http://localhost:8000/api/pet', {
//             petName,
//             petType,
//             petDescription,
//             skillOne,
//             skillTwo,
//             skillThree
//         })
//             .then(res=>{
//                 navigate ("/");
//             }) 
//             .catch(err=>{
//                 const errorResponse = err.response.data.errors; 
//                 const errorArr = [];
//                 for (const key of Object.keys(errorResponse)) { 
//                     errorArr.push(errorResponse[key].message)
//                     console.log(errorResponse[key].message)
//                 }
//                 setErrors(errorArr);
//             })
//     }

//     return (
//         <div>
//             <h1>Pet Shelter</h1>
//             <Link to={"/"}>back to home</Link>
//             <h3>Know a pet needing a home?</h3>
//             {errors.map((err, index) => <p key={index} style={{color: "red"}}>{err}</p>)}
//             <form onSubmit={onSubmitHandler}>
//             <p>
//                 <label>Pet Name:</label><br />
//                 <input 
//                     type="text" 
//                     name="petName" value={petName} 
//                     onChange={(e) => { setPetName(e.target.value) }} />
//             </p>
//             <p>
//                 <label>Pet Type:</label><br />
//                 <input 
//                     type="text" 
//                     name="petType" 
//                     value={petType} 
//                     onChange={(e) => { setPetType(e.target.value) }} />
//             </p>
//             <p>
//                 <label>Pet Description:</label><br />
//                 <input 
//                     type="text" 
//                     name="petDescription" 
//                     value={petDescription} 
//                     onChange={(e) => { setPetDescription(e.target.value) }} />
//             </p><br/>
//             <p>Skills (Optional):</p>
//             <p>
//                 <label>Skill 1:</label><br />
//                 <input 
//                     type="text" 
//                     name="skillOne" 
//                     value={skillOne} 
//                     onChange={(e) => { setSkillOne(e.target.value) }} />
//             </p>
//             <p>
//                 <label>Skill 2:</label><br />
//                 <input 
//                     type="text" 
//                     name="skillTwo" 
//                     value={skillTwo} 
//                     onChange={(e) => { setSkillTwo(e.target.value) }} />
//             </p>
//             <p>
//                 <label>Skill 3:</label><br />
//                 <input 
//                     type="text" 
//                     name="skillThree" 
//                     value={skillThree} 
//                     onChange={(e) => { setSkillThree(e.target.value) }} />
//             </p>
//             <input type="submit"/>
//         </form>
//         </div>
//     )
// }

// export default Add;