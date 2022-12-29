import React from 'react';
import logo from '../../public/assets/logo_yard_sale.svg';
import icono from '../../public/icons/email.svg';
import '../styles/RecoveryPassword.scss';

const RecoveryPaswword = () => {
    return (
        <div className="login">
            <div className="form-container">
                <img src={logo} alt="logo" className="logo"/>
                <h1 className="title">Email has been sent!</h1>
                <p className="subtitle">Please check your inbox for instructions on how to reset the password</p>
                <div className="email-image">
                    <img src={icono} alt="email"/>
                </div>
                <button className="primary-button login-button">Login</button>
                <p className="resend">
                    <span>Didn't receive the email?</span>
                    <a href="/">Resend</a>
                </p>
            </div>
        </div>
    );
}

export default RecoveryPaswword;