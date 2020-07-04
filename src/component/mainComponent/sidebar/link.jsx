import React from 'react';
import {Link }  from 'react-router-dom';

function Child(props){
    return(
        <div>
            <Link to={props.link}>{props.value}</Link>
        </div>
    )
}

export default Child;