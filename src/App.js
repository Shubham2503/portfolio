import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbr from './components/navbr/nav';
import Cards from './components/Cards/Cards';
import AllCards from './components/Cards/AllCards';
import About from './pages/About';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Project from './pages/Projects';

class App extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <Navbr />
                    <Switch>
                        <Route path="/projects">
                            <Project />
                        </Route>
                        <Route path="/">
                            <About />
                        </Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;