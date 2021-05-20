import react, { useState } from 'react';
    
    
const DisplayBoxes = (props) => {
    return (
        <>
            <pre>{ props.box }</pre>
        </>
    );
};
    
export default DisplayBoxes;