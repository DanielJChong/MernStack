import React, { useEffect, useState } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';


export default props => {
    const [product, setProduct] = useState({})
    
    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + props.id)
            .then(res => setProduct(res.data))
    }, [])

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {
                navigate("/product");
            })
    }
    
    return (
        <div>
            <h2>{product.title}</h2>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <Link to={"/product"}>
                Go Back Home
            </Link><br></br>
            <Link to={"/product/" + product._id + "/edit"}>
                Edit
            </Link><br></br>
            <button onClick={(e)=>{deleteProduct(product._id)}}>
                Delete
            </button>
        </div>
    )
}