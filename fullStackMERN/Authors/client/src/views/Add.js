import React, {useState} from 'react';
import axios from 'axios';
import {Link, redirectTo} from '@reach/router';
import {navigate} from '@reach/router';

import AuthorForm from '../components/AuthorForm';

const Add = () => {
    const [errors, setErrors] = useState([]);

    const createAuthor = author => {
        axios.post('http://localhost:8000/api/author', author)
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
            <h1>Favorite Authors!</h1>
            {errors.map((err, index) => <p key={index} style={{color: "red"}}>{err}</p>)}
            <Link to={"/"}>Home</Link>
            <p>Add a new Author:</p>
            <AuthorForm
                onSubmitProp={createAuthor}
                initialFirstName=""
                initialLastName=""
            />
        </div>
    )

}

export default Add;

