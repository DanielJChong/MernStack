import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate, Link } from '@reach/router';

import AuthorForm from '../components/AuthorForm';


const Update = props => {
    const { id } = props;
    const [author, setAuthor] = useState();
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/author/' + id)
            .then(res => {
                setAuthor(res.data);
                setLoaded(true);
            })
    }, [])
    
    const updateAuthor = author => {
        axios.put('http://localhost:8000/api/author/' + id, author)
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
            <h1>Favorite Authors!</h1>
            {errors.map((err, index) => <p key={index} style={{color: "red"}}>{err}</p>)}
            {loaded && (
                <div>
                    <Link to={"/"}>Home</Link>
                    <p>Edit this Author</p>
                    <AuthorForm
                        onSubmitProp={updateAuthor}
                        initialFirstName={author.firstName}
                        initialLastName={author.lastName}
                    />
                </div>
            )}
        </div>
    )
}

export default Update;