import React, { Component } from 'react';
import './User.css';
import Deleteuser from './../Deleteuser/Deleteuser';

export default class User extends Component {
    constructor() {
        super();
        this.state = {
            show: false
        }
    }


    // Evento para hacer aparecer la opcion de eliminar
    mouseOverHandler = (e) => {
        console.log(e.target);
        this.setState({ show: true});
    }
    
    mouseOutHandler = (e) => {
        console.log(e.target);
        this.setState({ show: false})
    }

    render () {
        let { name, photo, description } = this.props.item;
        return (
        <div  className='panel-user--item'>
            <div className='user-item--photo'>
                <img src={photo} />
            </div>
            <div className='user-item--name'  onMouseOut={this.mouseOutHandler.bind(this)} onMouseOver={this.mouseOverHandler}>
                <span>{name}</span>

                { this.state.show ?
                <Deleteuser /> : null }
            </div>
            <div className='user-item--description'>
                <p>{description}</p>
            </div>
        </div>
    )}
} 
