import React, { Component } from 'react';

import styles from './styles/LandingPage.module.css';

export class LandingPage extends Component {
    render() {
        return (
            <React.Fragment>
                <div className={styles.Container}>
                    <button className={styles.LoginButton}>Login</button>

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
                                className={`${styles.NameInput} ${styles.FirstName}`}
                            />

                            <label htmlFor="firstName" />
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last name"
                                className={`${styles.NameInput} ${styles.LastName}`}
                                required
                            />
                        </div>
                        <button className={styles.SubmitButton}>Create account</button>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}
