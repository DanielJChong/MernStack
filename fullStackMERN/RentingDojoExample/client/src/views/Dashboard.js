import {useState, useEffect} from 'react';
//useState allows us to manage state
//useEffect allows us to make a request on load
import axios from 'axios';
//for making API request
import {Link, navigate} from '@reach/router';


function Dashboard() {
    const [rentals, setRentals] = useState(null);


    // allows us to create side effects
    useEffect(() => {
        axios.get('http://localhost:8000/api/rentals')  //returns a promise!
            .then(response => setRentals(response.data))
    }, []);  //empty array means run this only on the first render


    function handleLike(index) {
        //send a request to the backend
        const rentalToUpdate = rentals[index];

        axios.post('http://localhost:8000/api/rentals/' + rentalToUpdate._id + '/likes')
            .then(response => {
                const updatedRental = response.data;

                const clonedRentals = rentals.slice(); //avoid mutating the current array

                clonedRentals[index] = updatedRental;

                setRentals(clonedRentals);

                //OR you can use
                // rentals[index] = updatedRental;
                // setRentals(rentals.slice());
            })
    }

    function handleDelete(id) {
        // send request to the backend
        axios.delete('http://localhost:8000/api/rentals/' + id)
            .then(() => {
                // remove it from the frontend list
                const filtered = rentals.filter(rental => rental._id !== id);
                setRentals(filtered); //tells React to re-render
                alert('Successfully deleted!'); //tells user it was successful
            })
    }


    if(rentals === null) return 'Loading...';  //show the user we're waiting

    return (
        <div>
            <h1>Rentals</h1>
            {rentals.map((rental, idx) => (
                <div key={rental._id}>
                    <img src={rental.imageUrl} alt={rental.address} width="350"/>
                    <p>{rental.address}</p>
                    <p><b>{rental.propertyType}</b></p>
                    {rental.newConstruction ? <p><b>New Construction</b></p> : null}
                    <p>{rental.likes} Likes</p>
                    
                    <button onClick={() => navigate('/rentals/' + rental._id + '/edit')}>Edit</button>
                    
                    <button onClick={() => handleLike(idx)}>Like</button>
                    
                    <button onClick={() => handleDelete(rental._id)}>Delete</button>
                </div>
            ))}
            <Link to="/rentals/new">Add New</Link>
        </div>
    )
}

export default Dashboard;
