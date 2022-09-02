import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Loder from '../components/Loder';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { toast } from 'react-toastify';


const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const auth = getAuth();
    const login = async () => {

        try {
            setLoading(true);
            const result = await signInWithEmailAndPassword(auth, email, password);
            localStorage.setItem('currentUser', JSON.stringify(result))
            setLoading(false);
            toast.success('Login successful');
            window.location.href = "/";
        } catch (error) {
            console.log(error.message);
            setLoading(false);
            toast.error("Login failed");
        }
    }

    return (
        <div className='login-parent'>
            {loading && (<Loder />)}
            <div className="row justify-content-center">
                <div className='col-md-4 z1'>
                    <div className='login-form'>
                        <h2>Login</h2>
                        <hr />
                        <input type='email' className='form-control' placeholder='Email' value={email}
                            onChange={(e) => setEmail(e.target.value)} required />
                        <input type='password' className='form-control' placeholder='password' value={password}
                            onChange={(e) => setPassword(e.target.value)} required />

                        <button className='my-3' onClick={login}>Login</button>
                        <hr />
                        <Link to="/register">Click here to Register</Link>
                    </div>
                </div>
                <div className='col-md-5 z1'>
                    <lottie-player src="https://assets6.lottiefiles.com/packages/lf20_yr6zz3wv.json" background="transparent" speed="1"

                        loop autoplay></lottie-player>
                </div>

            </div>
            <div className='login-buttom'></div>
        </div>
    )
}

export default LoginPage