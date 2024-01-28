import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log('Username:', username);
        console.log('Password:', password);
    };

    return (
        <>
            <Header />
            <div className='loginMainBox-align'>
                <div className="loginMainBox-align-left">
                    <img src="./images/keyboardLogin.png" alt="" />
                </div>
                <div className='loginMainBox-align-right'>
                    <h2>Login</h2>
                    <form>
                        <label>
                            Username:
                            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                        </label>
                        <br />
                        <label>
                            Password:
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </label>
                        <br />
                        <p>
                            <Link to="#/">Forget Password</Link>
                        </p>
                        <button type="button" onClick={handleLogin}>
                            Login
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default LoginPage;
