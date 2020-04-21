import React from 'react';
import ReactDOM from 'react-dom';

import Navbr from './components/navbr/nav';
import Cards from './components/Cards/Cards';
import AllCards from './components/Cards/AllCards';
import About from './pages/About';

class App extends React.Component {
    render() {
        return (
            <div style={{height: "100%", backgroundColor: "#222222"}}>
                <Navbr />
                <About />
            </div>
        );
    }
}   

export default App;