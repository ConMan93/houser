import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updatePropertyName, updateAddress, updateCity, updateState, updateZip } from '../../dux/reducer';

class StepOne extends Component {

    // constructor() {
    //     super();

    //     this.state = {
    //         propertyName: '',
    //         address: '',
    //         city: '',
    //         state: '',
    //         zip: 0,
    //         img: '',
    //         mortgage: 0,
    //         rent: 0
    //     }
    // }

    // handleChange(val, key) {
    //     let obj = {}
    //     obj[key] = val
    //     this.setState(obj)
    // }

    render() {
        return (
            <div>

                {/* <h2>Property Name</h2>
                <input placeholder='property name' onChange={e => this.handleChange(e.target.value, 'propertyName')}  />
                <h2>Address</h2>
                <input placeholder='address' onChange={e => this.handleChange(e.target.value, 'address')}  />
                <div>
                    <h2>City</h2>
                    <input placeholder='city' onChange={e => this.handleChange(e.target.value, 'city')}  />
                    <h2>State</h2>
                    <input placeholder='state' onChange={e => this.handleChange(e.target.value, 'state')}  maxLength={2} />
                    <h2>Zip</h2>
                    <input placeholder='zip' onChange={e => this.handleChange(e.target.value, 'zip')}  type='number'/>
                </div>
                <div>
                    <Link to='/wizard/step2'><button onClick={() => this.props.updateStepOne(this.props)}>Next Step</button></Link>
                    {/* <button onClick={e => this.props.updateStepOne(this.state)}>Test</button> */}
                {/* </div> */}
                <h2>Property Name</h2>
                <input onChange={e => this.props.updatePropertyName(e.target.value)} value={this.props.propertyName} />
                <h2>Address</h2>
                <input onChange={e => this.props.updateAddress(e.target.value)} value={this.props.address}/>
                <h2>City</h2>
                <input onChange={e => this.props.updateCity(e.target.value)} value={this.props.city} />
                <h2>State</h2>
                <input onChange={e => this.props.updateState(e.target.value)} maxLength={2} value={this.props.state} />
                <h2>ZipCode</h2>
                <input onChange={e => this.props.updateZip(e.target.value)} type='number' value={this.props.zip} />
                <Link to='/wizard/step2'><button>Next Step</button></Link>
             
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { propertyName, address, city, zip } = state
    return {
        propertyName,
        address,
        city,
        state: state.state,
        zip,
        // img,
        // mortgage,
        // rent
    }
}

export default connect(mapStateToProps, { updatePropertyName, updateAddress, updateCity, updateState, updateZip })(StepOne)