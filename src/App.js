import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbr from './components/Navbr';
import Cards from './components/Cards/Cards';
import AllCards from './components/Cards/AllCards';
import Footer from './components/Footer/Footer'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import Project from './pages/Projects';
import Contact from './pages/Contact';
import About from './pages/About'
import ParticlesBg from 'particles-bg'
import styles from './App.module.css';

class App extends React.Component {
    render() {
        return (
            <div className={styles.container}>
            <ParticlesBg className={styles.particles} type="cobweb" color="#000000"  bg={true} />
                <Router>
                    <Navbr />
                    <Switch>
                        <Route path="/projects">
                            <Project />
                        </Route>
                        <Route path="/contact">
                            <Contact />
                        </Route>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                    <Footer />
                </Router>
            </div>
        );
    }
}

export default App;