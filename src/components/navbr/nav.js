import React, { Component } from 'react';
import { FaAlignRight } from 'react-icons/fa';
import { Link } from "react-router-dom";
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
              <li><Link variant="button" to="/" style={{textDecoration:"none",color:"white"}}>SHUBHAM PATEL</Link></li>
              <li><Link variant="button" to="/projects" style={{textDecoration:"none",color:"white"}} >Projects</Link></li>
              <li href="#">Contact</li>
            </ul>
          </div>
        </>
      </div>
    );
  }
}

export default nav;