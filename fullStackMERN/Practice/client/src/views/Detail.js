import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Link} from '@reach/router';
import { navigate } from '@reach/router';

import DeleteButton from '../components/DeleteButton';

export default props => {
    const [person, setPerson] = useState({})
    
    useEffect(() => {
        axios.get("http://localhost:8000/api/people/" + props.id)
            .then(res => setPerson(res.data))
    }, [])
    
    return (
        <div>
            <p>First Name: {person.firstName}</p>
            <p>Last Name: {person.lastName}</p>
            <Link to={"/people/" + person._id + "/edit"}>Edit</Link>
            <DeleteButton personId={person._id} successCallback={() => navigate("/")}/>
        </div>
    )
}