import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { slide as BurgerMenu } from 'react-burger-menu';

import styles from './styles/Navigation.module.css';

import './styles/BurgerMenu.css';

class Navigation extends Component {
    constructor(props) {
        super(props);

        this.state = { menuOpen: false };
    }

    render() {
        return (
            <header className={styles.Header}>
                <BurgerMenu right width={200} disableAutoFocus>
                    <Link to="/">Home</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                    {/* <Link to="/settings">Settings</Link> */}
                </BurgerMenu>
            </header>
        );
    }
}

export default Navigation;
