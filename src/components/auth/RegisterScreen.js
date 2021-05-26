import React from 'react';
import validator from 'validator';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { removeError, setError } from '../../actions/ui';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';

export const RegisterScreen = () => {

    const dispatch = useDispatch();

    const {msgError} = useSelector(state => state.ui);

    const [formValues, handleInputChange] = useForm({
        name: 'Rene',
        email: 'rene@gmail.com',
        password: '123456',
        password2: '123456',
    });

    const {name, email, password, password2} = formValues;

    const handleRegister = (e) => {
        e.preventDefault();

        if(isFormValid()){
            dispatch(startRegisterWithEmailPasswordName(email, password, name))
        }
    }

    const isFormValid = () => {

        let valid = true;

        if(name.trim().length === 0){
            dispatch(setError('Name is required'));
            valid = false;
        } 
        if(!validator.isEmail(email)){
            dispatch(setError('Email is required'));
            valid = false;
        } 
        if(password !== password2 || password.length <= 5){
            dispatch(setError('Password is required'));
            valid = false;
        }
        
        valid && dispatch(removeError());
        return valid;
    }
    return (
        <>
            <h3 className="auth__title">Register</h3>
            <form 
                onSubmit={handleRegister}
                className="animate__animated animate__fadeIn animate__faster"
            >
                {
                    msgError &&
                    (
                        <div className="auth__alert-error">
                            {msgError}
                        </div>
                    )
                }

                <input
                    className="auth__input"
                    type="text"
                    placeholder="Name"
                    name="name"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />

                <input
                    className="auth__input"
                    type="text"
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

                <input
                    className="auth__input"
                    type="password"
                    placeholder="Confirm password"
                    name="password2"
                    value={password2}
                    onChange={handleInputChange}
                />

                <button
                    className="btn btn-primary btn-block mb-5"
                    type="submit"
                >
                    Register
                </button>


                <Link to="/auth/login" className="link">
                    Already register ?
                </Link>
            </form>
        </>
    )
}
