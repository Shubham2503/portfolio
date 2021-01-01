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
import Loading from './pages/Loading'
import ParticlesBg from 'particles-bg'
import styles from './App.module.css';
import './App.css'

class App extends React.Component {

    state = {
        hideNav: true,
        load: true
    }

    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
        if (this.state.load) {
            // this.turnOffRedTimeout = setTimeout(() => { this.setState(() => ({ load: false }))}, 500);
        }
    }

    resize() {
        let currentHideNav = (window.innerWidth <= 760);
        if (currentHideNav !== this.state.hideNav) {
            this.setState({ hideNav: currentHideNav });
        }
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.resize.bind(this));
    }

    render() {
        if(this.state.load )
        return (
            <div>
                <div className={styles.particles}>
                    {!this.state.hideNav
                        ? (<ParticlesBg type="cobweb" num={100} color="#aaaaaa" bg={false} />)
                        : (<ParticlesBg type="cobweb" num={30} color="#aaaaaa" bg={false} />)
                    }
                </div>
        <Loading />

        </div>
        );

        return (
            <div>
                <div className={styles.particles}>
                    {!this.state.hideNav
                        ? (<ParticlesBg type="cobweb" num={100} color="#aaaaaa" bg={false} />)
                        : (<ParticlesBg type="cobweb" num={30} color="#aaaaaa" bg={false} />)
                    }
                </div>
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