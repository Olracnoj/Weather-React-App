import React from 'react';

const Heading = ({title}) => {
    return (
        <div>
        <h1>{title.title}</h1>
        <h2>{title.city}</h2>
        </div>
    )
}


export default Heading;