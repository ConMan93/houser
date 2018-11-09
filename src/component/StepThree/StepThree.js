import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateMortgage, updateRent, resetState } from '../../dux/reducer';

class StepThree extends Component {

    // constructor() {
    //     super();

    //     this.state = {
    //         name: '',
    //         address: '',
    //         city: '',
    //         state: '',
    //         zip: 0,
    //         img: '',
    //         mortgage: 0,
    //         rent: 0
    //     }
    //     this.saveHouse = this.saveHouse.bind(this)
    // }

    constructor() {
        super();

        this.saveHouse = this.saveHouse.bind(this)
    }

    handleChange(val, key) {
        let obj = {}
        obj[key] = val
        this.setState(obj)
    }

    saveHouse() {
        let { propertyName, address, city, state, zip, img, mortgage, rent } = this.props
        axios.post('/api/house', { propertyName, address, city, state, zip, img, mortgage, rent }).then( response => {
        
        })
    }

    render() {
        return (
            <div>
                <h2>Monthly Mortgage Amount</h2>
                <input onChange={e => this.props.updateMortgage(e.target.value)} type='number' value={this.props.mortgage} />
                <h2>Desired Monthly Rent</h2>
                <input onChange={e => this.props.updateRent(e.target.value)} type='number' value={this.props.rent} />
                <div>
                    <Link to='/wizard/step2'><button>Previous Step</button></Link>
                    <Link to='/'><button onClick={this.saveHouse}>Complete</button></Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    let { propertyName, address, city, zip, img, mortgage, rent } = state
    return {
        propertyName,
        address,
        city,
        state: state.state,
        zip,
        img,
        mortgage,
        rent
    }
}

export default connect(mapStateToProps, { updateMortgage, updateRent })(StepThree)