import * as React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import App from './App';
import Login from './components/login/Login';


export default () =>(
    <Router>
        <Switch>
            <Route path="/app" component={App}/>
            <Route path="/login" component={Login} />
        </Switch>
    </Router>
)