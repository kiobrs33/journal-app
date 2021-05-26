import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';

export const LoginScreen = () => {

    const dispatch = useDispatch();
    const {loading} = useSelector(state => state.ui)

    console.log(loading);

    const [ valuesForm, handleInputChange ] = useForm({
        email: 'rene@gmail.com',
        password: '123456',
    });

    const { email, password } = valuesForm;

    const handleLogin = (e) => {
        dispatch(startLoginEmailPassword(email, password));
        e.preventDefault();
    }

    const handleGoogleLogin = (e) => {
        dispatch(startGoogleLogin());
    }

    return (
        <>
            <h3 className="auth__title">Login Screen</h3>
            <form 
                onSubmit={handleLogin}
                className="animate__animated animate__fadeIn animate__faster"
            >
                <input 
                    className="auth__input"
                    type="email"
                    placeholder="Email"
                    name="email"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />

                <input  
                    className="auth__input"
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                />

                <button
                    className="btn btn-primary btn-block"
                    type="submit"
                    disabled= { loading }
                >
                   Login 
                </button>

                <hr/>

                <div className="auth__social-networks">
                    <p>Login with Social Network</p>
                    <div 
                        className="google-btn"
                        onClick={handleGoogleLogin}
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>

                <Link to="/auth/register" className="link">
                    Create New Account
                </Link>
            </form>
        </>
    )
}
