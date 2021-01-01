import React from 'react';
import ParticlesBg from 'particles-bg'
import styles from './index.module.css';

class App extends React.Component {

    state = {
        show: true
    }

    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
    }

    resize() {
        let currentshow = (window.innerWidth <= 760);
        if (currentshow !== this.state.show) {
            this.setState({ show: currentshow });
        }
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.resize.bind(this));
    }

    render() {
            return (
                <div>
                    <div className={styles.particles}>
                        {!this.state.show
                            ? (<ParticlesBg type="cobweb" num={100} color="#aaaaaa" bg={false} />)
                            : (<ParticlesBg type="cobweb" num={30} color="#aaaaaa" bg={false} />)
                        }
                    </div>

                </div>
            );
    }
}

export default App;