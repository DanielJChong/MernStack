
import React from 'react'
import axios from 'axios';
import { Link } from '@reach/router';

const AuthorList = props => {

    const deleteAuthor = (authorId) => {
        axios.delete('http://localhost:8000/api/author/' + authorId)
            .then(res => {
                props.removeFromDom(authorId)
            })
    }
    
    // useEffect(() => {
    //     console.log(props.author)
    // }, [])


    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                {props.author.map((auth, idx)=>
                    <tr>
                        <td>{auth.firstName} {auth.lastName}</td>
                        <td>
                            <Link to={"/edit/" + auth._id}>
                                Edit
                            </Link> 
                        </td>
                        <td>
                            <button onClick={(e)=>{deleteAuthor(auth._id)}}>
                                Delete
                            </button>
                        </td>
                    </tr>
                )}    
                </tbody>
            </table>
        </div>
    )
}

export default AuthorList;