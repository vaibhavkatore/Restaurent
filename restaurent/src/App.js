import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import ReactGA from 'react-ga';
import Routes from "./routes";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "./App.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
    faFacebookSquare,
    faTwitter,
    faInstagram,
    faSkype,
    faFacebookF,
    faLinkedin,
    
    
} from '@fortawesome/free-brands-svg-icons';
import {
    faPlusCircle,
    faMapMarkerAlt,
    faEnvelope,
    faComments
    
} from '@fortawesome/free-solid-svg-icons';
library.add(
    fab,
    faFacebookSquare,
    faTwitter,
    faInstagram,
    faSkype,
    faPlusCircle,
    faFacebookF,
    faLinkedin,
    faMapMarkerAlt,
    faEnvelope,
    faComments
)

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Router>
                {Routes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.component}
                    />
                ))}
            </Router>
        );
    }
}

export default App;
