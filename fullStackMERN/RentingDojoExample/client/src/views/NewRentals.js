import {useState} from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

function NewRentals() {
    const [address, setAddress] = useState('');
    const [imageUrl, setImageURL] = useState('');
    //checkbox will be initially unchecked
    const [newConstruction, setNewConstruction] = useState(false);
    const [propertyType, setPropertyType] = useState('');

    const [errors, setErrors] = useState([]);


    function handleSubmit(event) {
        event.preventDefault();
        console.log('default prevented!');

        setErrors([]);

        axios.post('http://localhost:8000/api/rentals', {
            address,
            imageURL,
            newConstruction,
            propertyType
        })  //returns a promise
            .then(() => navigate('/rentals'))
            .catch(err => {
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            });
    }


    return (
        <div>
            {errors.map((err, idx) => <p key={idx} style={{color: red}}>{err}</p>)}
            <h1>Add a Rental</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Address</label>
                    <input
                        value={address}
                        onChange={event => setAddress(event.target.value)}
                    />
                </div>
                <div>
                    <label>Image URL</label>
                    <input
                        value={imageUrl}
                        onChange={event => setImageURL(event.target.value)}
                    />
                </div>
                <div>
                    <label>
                        <input
                            type="checkgbox"
                            checked={newConstruction}
                            onChange={event => setNewConstruction(event.target.checked)}
                        />
                        New Construction
                    </label>
                </div>
                <div>
                    <label>Property Type</label>
                    <select value={propertyType} onChange={event => setPropertyType(event.target.value)}>
                        <option>Please select</option>
                        <option value="Single Family">Single Family</option>
                        <option value="Apartment">Apartment</option>
                        <option value="Condo">Condo</option>
                    </select>
                </div>
                <button></button>
            </form>
        </div>
    );
}

export default NewRentals;