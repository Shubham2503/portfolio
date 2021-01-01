import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbr from './components/Navbr';
import Cards from './components/Cards/Cards';
import AllCards from './components/Cards/AllCards';
import Footer from './components/Footer/Footer'
import Particles from './components/Particles'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import Project from './pages/Projects';
import Contact from './pages/Contact';
import About from './pages/About'
import Loading from './pages/Loading'
import ParticlesBg from 'particles-bg'
import styles from './App.module.css';
import './App.css'

class App extends React.Component {

    state = {
        load: true
    }

    componentDidMount() {
        if (this.state.load) {
            this.turnOffRedTimeout = setTimeout(() => { this.setState(() => ({ load: false }))}, 1000);
        }
    }
    componentWillUnmount() {
        clearTimeout(this.turnOffRedTimeout);
    }

    render() {
        if (this.state.load)
            return (
                <div>
                    <Particles />
                    <Loading />
                </div>
            );

        return (
            <div>
                <Particles />
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
            </div>
        );
    }
}

export default App;