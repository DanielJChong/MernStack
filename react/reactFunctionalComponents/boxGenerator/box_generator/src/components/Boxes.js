import react, { useState } from 'react';
    
    
const Boxes = (props) => {
    const [box, setBox] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onNewBox( box );
    };
    
    return (
        <div>
            <form onSubmit={ handleSubmit }>
                <h1>Color</h1>
                <input 
                    type="text" 
                    onChange={ (e) => setBox(e.target.value)}
                    value={ box }
                ></input>
                <input type="submit" value="Add" />
            </form>
            <div>

            </div>
        </div>
    );
};
    
export default Boxes;