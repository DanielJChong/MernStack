// import React from 'react';
// import axios from 'axios';
// import { Link } from '@reach/router';

// export default props => {
//     const { removeFromDom } = props;
    
//     const deletePerson = (personId) => {
//         axios.delete('http://localhost:8000/api/people/' + personId)
//             .then(res => {
//                 removeFromDom(personId)
//             })
//     }
    
//     return (
//         <div>
//             {props.people.map((person, idx)=>{
//                 return <p key={idx}>
//                     <Link to={"/people/" + person._id}>
//                         {person.lastName}, {person.firstName}
//                     </Link>
//                     |
//                     <button onClick={(e)=>{deletePerson(person._id)}}>
//                         Delete
//                     </button>
//                 </p>
//             })}
//         </div>
//     )
// }


import React from 'react';
import { useEffect, useState } from 'react'
import { Link } from '@reach/router';
import axios from 'axios';

import DeleteButton from './DeleteButton';

const PersonList = props => {
    const [people, setPeople] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/people')
            .then(res => setPeople(res.data));
    }, [])

    const removeFromDom = personId => {
        setPeople(people.filter(person => person._id != personId))
    }

    return (
        <div>
            {people.map((person, idx) => {
                return (
                    <p key={idx}>
                        <Link to={"/people/" + person._id}>
                            {person.lastName}, {person.firstName}
                        </Link>
                        |
                        <Link to={"/people/" + person._id + "/edit"}>
                            Edit
                        </Link> 
                        |
                        <DeleteButton personId={person._id} successCallback={()=>removeFromDom(person._id)}/>
                    </p>
                )
            })}
        </div>
    )
}

export default PersonList;
