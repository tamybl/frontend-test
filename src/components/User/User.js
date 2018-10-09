import React from 'react';
import './User.css';

const user = (props) => {
    return (
        <div  className='panel-user--item' key={props.id}>
            <div className='user-item--photo'>
                <img src={props.photo} />
            </div>
            <div className='user-item--name'>
                <span>{props.name}</span>
            </div>
            <div className='user-item--description'>
                <p>{props.description}</p>
            </div>
        </div>
    )
} 

export default user;