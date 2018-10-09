import React, {Component} from 'react';
import User from './components/User/User';
import './App.css';


// Temporalmente se configura la data inicial sin llamarla del JSON.
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
          }
        }

    componentDidMount() {
        const url = "http://localhost:3000/api/";
        let parameter = "users";
        fetch(url + parameter)
            .then((response) => {
        return response.json()
        })
    .then((data) => {
        let users = data.map((user, index) => {
            return (
                <User photo={user.photo} name={user.name} key={index}/>
            )
        })
        this.setState({users: users});
    });

    }
          
        render() {
            return ( 
                <div className="main">
                    <h1 className="title">Panel <strong>Beetrack</strong> </h1> 
                    <div className="menu-panel">
                        <div className="search">
                            <input type="text" placeholder="Buscar Contacto..."></input>
                        </div>
                    </div>

                    <div className="user-list">
                        <div className="title-info">
                            <h3>Nombre</h3>
                            <h3>Descripción</h3>
                        </div> 
                        {this.state.users}
                    </div>

                </div>
            )
        }
    }

    export default App;