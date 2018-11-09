import React from 'react';

function House(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <p>{props.address}</p>
            <p>{props.city}</p>
            <p>{props.state}</p>
            <p>{props.zip}</p>
            <p>{props.mortgage}</p>
            <p>{props.rent}</p>
            <img src={`${props.img}`} height={200} width={200} alt=''/>
            <button onClick={() => props.removeHouse(props.id)}>Delete</button>
        </div>
    )
}

export default House