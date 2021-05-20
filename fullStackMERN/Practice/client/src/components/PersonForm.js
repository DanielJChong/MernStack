// import React, { useState } from 'react'
// import axios from 'axios';

// export default () => {
//     //keep track of what is being typed via useState hook
//     const [firstName, setFirstName] = useState(""); 
//     const [lastName, setLastName] = useState("");
    
//     //handler when the form is submitted
//     const onSubmitHandler = e => {
//         //prevent default behavior of the submit
//         e.preventDefault();
//         //make a post request to create a new person
//         axios.post('http://localhost:8000/api/people', {
//             firstName,
//             lastName
//         })
//             .then(res=>console.log(res))
//             .catch(err=>console.log(err))
//     }
    
//     //onChange to update firstName and lastName
//     return (
//         <form onSubmit={onSubmitHandler}>
//             <p>
//                 <label>First Name</label><br/>
//                 <input type="text" onChange = {(e)=>setFirstName(e.target.value)}/>
//             </p>
//             <p>
//                 <label>Last Name</label><br/>
//                 <input type="text" onChange = {(e)=>setLastName(e.target.value)}/>
//             </p>
//             <input type="submit"/>
//         </form>
//     )
// }


import React, { useEffect, useState } from 'react'

const PersonForm = props => {
    const { initialFirstName, initialLastName, onSubmitProp } = props;
    const [firstName, setFirstName] = useState(initialFirstName);
    const [lastName, setLastName] = useState(initialLastName);
    
    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({firstName, lastName});
    }
        
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>First Name</label><br />
                <input 
                    type="text" 
                    name="firstName" value={firstName} 
                    onChange={(e) => { setFirstName(e.target.value) }} />
            </p>
            <p>
                <label>Last Name</label><br />
                <input 
                    type="text" 
                    name="lastName" 
                    value={lastName} 
                    onChange={(e) => { setLastName(e.target.value) }} />
            </p>
            <input type="submit" />
        </form>
    )
}

export default PersonForm;