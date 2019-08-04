import React from 'react';

const cell = (props) => {
    return <img src={props.icon} alt={props.icon.split("/").pop()}></img>
}

export default cell;