import React, {Component} from 'react';
import User from './components/User/User';
import './App.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            modal: false
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
        this.setState({users: data})
    });

    }

    handleHover(e) {
        e.preventDefault();
    }
          
        render() {
            const { users } = this.state;
            return ( 
                <div className="main">
                    <h1 className="title">Panel <strong>Beetrack</strong> </h1> 
                    <div className="menu-panel">
                        <div className="search">
                            <input type="text" placeholder="Buscar Contacto..."></input>
                        </div>
                        <div className="btn-controls">
                            <button className="btn-add-user">Nuevo Contacto</button>
                        </div>
                    </div>

                    <div className="user-list">
                        <div className="title-info">
                            <h3>Nombre</h3>
                            <h3>Descripción</h3>
                        </div> 
                        
                         {users.map((user) => {
                         return (<User photo={user.photo} name={user.name} description={user.description} key={user.id} onMouseHover={this.handleHover} />)
                            })}
                    </div>

                </div>
            )
        }
    }

    export default App;