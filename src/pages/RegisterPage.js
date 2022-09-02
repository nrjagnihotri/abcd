import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Loder from '../components/Loder';
import { toast } from 'react-toastify';

const RegisterPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const auth = getAuth();
    const navigate = useNavigate();
    const register = async () => {

        try {
            setLoading(true);
            const result = await createUserWithEmailAndPassword(auth, email, password);
            console.log(result);
            setLoading(false);
            toast.success('regaistation successful');
            navigate('/login');
        } catch (error) {
            console.log(error.message);
            setLoading(false);
            toast.error("resigation failed");
        }
    }
    return (
        <div className='register-parent'>
            {loading && (<Loder />)}
            <div className='register-top'></div>
            <div className="row justify-content-center">
                <div className='col-md-5'>
                    <lottie-player src="https://assets6.lottiefiles.com/packages/lf20_yr6zz3wv.json" background="transparent" speed="1"

                        loop autoplay></lottie-player>
                </div>
                <div className='col-md-4 z1'>
                    <div className='register-form'>
                        <h2>Register</h2>
                        <hr />
                        <input type='email' className='form-control' placeholder='Email' value={email}
                            onChange={(e) => setEmail(e.target.value)} required />
                        <input type='password' className='form-control' placeholder='password' value={password}
                            onChange={(e) => setPassword(e.target.value)} required />
                        <input type='password' className='form-control' placeholder='confirm password' value={cpassword}
                            onChange={(e) => setCPassword(e.target.value)} required />
                        <button className='my-3' onClick={register}>Register</button>
                        <hr />
                        <Link to="/login">Click here to Login</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default RegisterPage