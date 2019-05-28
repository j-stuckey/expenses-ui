import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './styles/LandingPage.module.css';

export class LandingPage extends Component {
    constructor(props) {
        super(props);

        this.state = {};
		
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }
	
    handleSubmit = e => {
        e.preventDefault();
        console.log({ submitted: this.state });
    }

    render() {
        return (
            <React.Fragment>
                <div className={styles.Container}>
                    <Link to="/login" className={styles.LoginButton}>
                        Login
                    </Link>

                    <form className={styles.Form} onSubmit={this.handleSubmit}>
                        <legend className={styles.FormLegend}>
                            Sign for a free account
                        </legend>
                        <div className={styles.Names}>
                            <label htmlFor="firstName" />
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First name"
                                className={`${styles.Input} ${
                                    styles.LeftInput
                                }`}
                                onChange={this.handleChange}
                            />

                            <label htmlFor="firstName" />
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last name"
                                className={`${styles.Input} ${
                                    styles.RightInput
                                }`}
                                onChange={this.handleChange}
                                required
                            />
                        </div>

                        <div className={styles.Names}>
                            <label htmlFor="email" />
                            <input
                                type="email"
                                name="email"
                                className={`${styles.Input} ${
                                    styles.LeftInput
                                }`}
                                placeholder="Email"
                                onChange={this.handleChange}
                                required
                            />
                            <label htmlFor="password" />
                            <input
                                type="password"
                                className={`${styles.Input} ${
                                    styles.RightInput
                                }`}
                                name="password"
                                placeholder="Password"
                                onChange={this.handleChange}
                                required
                            />
                        </div>
                        <button className={styles.SubmitButton}>
                            Create account
                        </button>
                    </form>
                </div>
                <div className={styles.Bottom} />
            </React.Fragment>
        );
    }
}
