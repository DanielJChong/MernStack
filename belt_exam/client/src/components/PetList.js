import React from 'react'
import axios from 'axios';
import { Link } from '@reach/router';

const PetList = props => {

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {props.pet.map((pet, idx)=>
                    <tr>
                        <td>{pet.petName}</td>
                        <td>{pet.petType}</td>
                        <td>
                            <Link to={"/pets/" + pet._id}>
                                Details
                            </Link>
                            |
                            <Link to={"/pets/" + pet._id + "/edit"}>
                                Edit
                            </Link> 
                        </td>
                    </tr>
                )}    
                </tbody>
            </table>
        </div>
    )
}

export default PetList;