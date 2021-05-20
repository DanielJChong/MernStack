// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import PersonForm from '../components/PersonForm';
// import PersonList from '../components/PersonList';

// export default () => {
//     const [people, setPeople] = useState([]);
//     const [loaded, setLoaded] = useState(false);
    
//     useEffect(()=>{
//         axios.get('http://localhost:8000/api/people')
//             .then(res=>{
//                 setPeople(res.data);
//                 setLoaded(true);
//             });
//     },[])

//     const removeFromDom = personId => {
//         setPeople(people.filter(person => person._id != personId));
//     }

//     return (
//         <div>
//             <PersonForm/>
//             <hr/>
//             {loaded && <PersonList people={people} removeFromDom={removeFromDom}/>}
//         </div>
//     )
// }


import React, { useEffect, useState } from 'react'
import axios from 'axios';

import PersonForm from '../components/PersonForm';
import PersonList from '../components/PersonList';

const Main = () => {
    const [people, setPeople] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/people')
            .then(res =>{ 
                setPeople(res.data)
                setLoaded(true);
            });
    }, [])
    
    const removeFromDom = personId => {
        setPeople(people.filter(person => person._id != personId));
    }
    
    const createPerson = person => {
        axios.post('http://localhost:8000/api/people', person)
            .then(res=>{
                setPeople([...people, res.data]);
            }) 
            .catch(err=>{
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                    console.log(errorResponse[key].message)
                }
                setErrors(errorArr);
            })
    }
    
    return (
        <div>
            <h1>Add a New Person!</h1>
            {errors.map((err, index) => <p key={index} style={{color: "red"}}>{err}</p>)}
            <PersonForm onSubmitProp={createPerson} initialFirstName="" initialLastName=""/>
            <hr/>
            {loaded && <PersonList people={people} removeFromDom={removeFromDom}/>}
        </div>
    )
}

export default Main;