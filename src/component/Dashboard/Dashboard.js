import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import House from '../House/House';

class Dashboard extends Component {

    constructor() {
        super();

        this.state = {
            houses: []
        }
        this.removeHouse = this.removeHouse.bind(this)
    }

    componentDidMount() {
        axios.get('/api/houses').then( response => {
            this.setState({
                houses: response.data
            })
        })
    }

    removeHouse(id) {
        axios.delete(`/api/house/${id}`).then( response => {
            this.componentDidMount()
        })
    }

    render() {

        let housesToRender = this.state.houses.map( (house, i) => {
            return (
                <House key={ i }
                    address={house.address}
                    city={house.city}
                    name={house.name}
                    state={house.state}
                    zip={house.zip}
                    removeHouse={this.removeHouse}
                    id={house.id}
                    mortgage={house.mortgage}
                    img={house.img}
                    rent={house.rent}
                />
            )
        })

        return(
            <div>
                <p>Dashboard</p>
                {housesToRender}
                <Link to='/wizard/step1' ><button>Add New Property</button></Link>
            </div>
        )
    }
}

export default Dashboard