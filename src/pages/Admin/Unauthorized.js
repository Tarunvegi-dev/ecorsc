import React from 'react';
import './styles.css';
import { signInWithGoogle } from '../../firebase/firebase-utils';

const UnAuthorized = () => {
    return (
        <div className='unauthorized'>
            <div className="wrapper">
                <div className="landing-page">
                    <div style={{ textAlign: 'center' }} className="icon__download">
                        <img alt="error" src="https://img.freepik.com/free-vector/tiny-people-standing-near-prohibited-gesture-isolated-flat-illustration_74855-11132.jpg?t=st=1649931453~exp=1649932053~hmac=ad57f48150ff4031295560256bbfe1ee825a164c364f54853390db9339abd69d&w=1380" width="350" />
                    </div>

                    <h1> 401 Error.</h1>
                    <p>You are not authorized to access this web page</p>
                    <button onClick={signInWithGoogle}>SIGN IN</button>
                </div>
            </div>
        </div>

    );
};

export default UnAuthorized;