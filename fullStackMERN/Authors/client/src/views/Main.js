import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';

import AuthorList from '../components/AuthorList';

const Main = () => {
    const [author, setAuthor] = useState([]);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/author')
            .then(res =>{ 
                setAuthor(res.data)
                setLoaded(true);
            });
    }, [])
    
    const removeFromDom = authorId => {
        setAuthor(author.filter(author => author._id != authorId));
    }
    
    return (
        <div>
            <h1>Favorite Authors</h1>
            <Link to={"/new"}>Add an author</Link>
            <p>We have quotes by:</p>
            {loaded && <AuthorList author={author} removeFromDom={removeFromDom}/>}
        </div>
    )
}

export default Main;