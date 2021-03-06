import React, {Component} from 'react';
import User from './components/User/User';
import './App.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            filter: [],
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
        this.setState({users: data});
        this.setState({filter: data});
           
    })
    .catch(error => console.log('error fetching', error));

    }

    // Evento que permite filtrar
    searchHandler = (e) => {
        const filterData = this.state.users.filter(user => user.name.toLowerCase().includes(e.target.value.toLowerCase()));
        this.setState({filter: filterData});
    }
          
        render() {
            const { filter } = this.state;
            return ( 
                <div className="main">
                    <h1 className="title">Panel <strong>Beetrack</strong> </h1> 
                    <div className="menu-panel">
                        <div className="search">
                            <input type="text" placeholder="Buscar Contacto..." onChange={this.searchHandler} value={this.state.value}></input>
                        </div>
                        <div className="btn-controls">
                            <button className="btn-add--user">Nuevo Contacto</button>
                        </div>
                    </div>

                    <div className="user-list">
                        <div className="title-info">
                            <h3>Nombre</h3>
                            <h3>Descripción</h3>
                        </div> 
                        { 
                            filter.map((user) => {
                         return (<User item={user} key={user.id} deleteShow={this.state.showDeleteBtn} />)
                            })
                        }
                    </div>

                </div>
            )
        }
    }

    export default App;