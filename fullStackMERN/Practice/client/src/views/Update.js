// import React, { useEffect, useState } from 'react'
// import axios from 'axios';


// export default props => {
//     const { id } = props;
//     const [firstName, setFirstName] = useState('');
//     const [lastName, setLastName] = useState('');
    
//     useEffect(() => {
//         axios.get('http://localhost:8000/api/people/' + id)
//             .then(res => {
//                 setFirstName(res.data.firstName);
//                 setLastName(res.data.lastName);
//             })
//     }, [])
    
//     const updatePerson = e => {
//         e.preventDefault();
//         axios.put('http://localhost:8000/api/people/' + id, {
//             firstName,
//             lastName
//         })
//             .then(res => console.log(res));
//     }
    
//     return (
//         <div>
//             <h1>Update a Person</h1>
//             <form onSubmit={updatePerson}>
//                 <p>
//                     <label>First Name</label><br />
//                     <input type="text" 
//                     name="firstName" 
//                     value={firstName} 
//                     onChange={(e) => { setFirstName(e.target.value) }} />
//                 </p>
//                 <p>
//                     <label>Last Name</label><br />
//                     <input type="text" 
//                     name="lastName"
//                     value={lastName} 
//                     onChange={(e) => { setLastName(e.target.value) }} />
//                 </p>
//                 <input type="submit" />
//             </form>
//         </div>
//     )
// }


import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';

import PersonForm from '../components/PersonForm';
import DeleteButton from '../components/DeleteButton';

const Update = props => {
    const { id } = props;
    const [person, setPerson] = useState();
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/people/' + id)
            .then(res => {
                setPerson(res.data);
                setLoaded(true);
            })
    }, [])
    
    const updatePerson = person => {
        axios.put('http://localhost:8000/api/people/' + id, person)
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
            <h1>Update a Person!</h1>
            {errors.map((err, index) => <p key={index} style={{color: "red"}}>{err}</p>)}
            {loaded && (
                <>
                    <PersonForm
                        onSubmitProp={updatePerson}
                        initialFirstName={person.firstName}
                        initialLastName={person.lastName}
                    />
                    <DeleteButton personId={person._id} successCallback={() => navigate("/")} />
                </>
            )}
        </div>
    )
}

export default Update;