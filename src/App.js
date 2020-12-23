import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbr from './components/Navbr';
import Cards from './components/Cards/Cards';
import AllCards from './components/Cards/AllCards';
import About from './pages/About';
import Footer from './components/Footer/Footer'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Project from './pages/Projects';
import Contact from './pages/Contact';
import styles from './App.module.css'

class App extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <Router>
                    <Navbr />
                    <Switch>
                        <Route path="/projects">
                            <Project />
                        </Route>
                        <Route path="/contact">
                            <Contact />
                        </Route>
                        <Route path="/">
                            <About />
                        </Route>
                    </Switch>
                    <Footer />
                </Router>
            </div>
        );
    }
}

export default App;