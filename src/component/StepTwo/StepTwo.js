import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateImg } from '../../dux/reducer';

class StepTwo extends Component {

    

    // handleChange(input) {
    //     this.setState({
    //         img: input
    //     })
    // }

    render() {
       
        return (
            <div>
                <h2>Image URL</h2>
                <input onChange={e => this.props.updateImg(e.target.value)} value={this.props.img} />
                <div>
                    <Link to='/wizard/step1'><button>Previous Step</button></Link>
                    <Link to='/wizard/step3'><button>Next Step</button></Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    let { propertyName, address, city, zip, img } = state
    return {
        propertyName,
        address,
        city,
        state: state.state,
        zip,
        img,
    }
}

export default connect(mapStateToProps, { updateImg })(StepTwo)