import React, { Component } from 'react';
import {Link } from 'react-router-dom';

import styles from './styles/LandingPage.module.css';

export class LandingPage extends Component {
    render() {
        return (
            <React.Fragment>
                <div className={styles.Container}>
                    <Link to="/login" className={styles.LoginButton}>Login</Link>

                    <form className={styles.Form}>
                        <legend className={styles.FormLegend}>
              Sign for a free account
                        </legend>
                        <div className={styles.Names}>
                            <label htmlFor="firstName" />
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First name"
                                className={`${styles.Input} ${styles.LeftInput}`}
                            />

                            <label htmlFor="firstName" />
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last name"
                                className={`${styles.Input} ${styles.RightInput}`}
                                required
                            />
                        </div>

                        <div className={styles.Names}>
                            <label htmlFor="email" />
                            <input
                                type="email"
                                name="email"
                                className={`${styles.Input} ${styles.LeftInput}`}
                                placeholder="Email"
                                required
                            />
                            <label htmlFor="password" />
                            <input
                                type="password"
                                className={`${styles.Input} ${styles.RightInput}`}
                                name="password"
                                placeholder="Password"
                                required
                            />
                        </div>
                        <button className={styles.SubmitButton}>Create account</button>
                    </form>

                </div>
                <div className={styles.Bottom}>
					
                </div>
            </React.Fragment>
        );
    }
}
