import React, {Component} from 'react';
import * as ROUTES from '../constants/routes';
import FourthContainer from "./FourthContainer";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import BeaconContainer from './BeaconContainer';
import PelicanContainer from './PelicanContainer';
import ProcureContainer from './ProcureContainer';


class MainContainer extends Component {

    render(){
    return <Router>
        <div className="MainContainer">
            <Route path={ROUTES.FOURTH} component={FourthContainer}/>
            <Route path={ROUTES.BEACON} component={BeaconContainer}/>
            <Route path={ROUTES.PELICAN} component={PelicanContainer}/>
            <Route path={ROUTES.PROCURE} component={ProcureContainer}/>
        </div>
    </Router>

    }
}

export default MainContainer;