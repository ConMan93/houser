import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

//Components
import StepOne from '../StepOne/StepOne';
import StepTwo from '../StepTwo/StepTwo';
import StepThree from '../StepThree/StepThree';
import { resetState } from '../../dux/reducer';
import { connect } from 'react-redux';

class Wizard extends Component {


    render() {
        return(
            <div>
                <p>Wizard</p>
                <Link to='/' ><button onClick={this.props.resetState}>Cancel</button></Link>
                <Switch>
                    <Route path='/wizard/step1' component={StepOne} />
                    <Route path='/wizard/step2' component={StepTwo} />
                    <Route path='/wizard/step3' component={StepThree} />
                </Switch>
            </div>
        )
    }
}

export default connect(null, { resetState })(Wizard)