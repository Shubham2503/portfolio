import React, { Component } from 'react';
import { FaAlignRight } from 'react-icons/fa'
import ReactDOM from 'react-dom';
import styles from './nav.module.css';

class nav extends Component {
  state = {
    toggle: false
  }
  Toggle = () => {
    this.setState({ toggle: !this.state.toggle })
  }
  render() {
    return (
      <div>
        <>
          <div className={styles.navBar}>
            <button onClick={this.Toggle}>
              <FaAlignRight />
            </button>
            <ul className={this.state.toggle ? [styles.show-nav,styles.links] : styles.links}>
              <li href="#">Home</li>
              <li href="#">About us</li>
              <li href="#">Contact</li>
            </ul>
          </div>
        </>
      </div>
    );
  }
}

export default nav;