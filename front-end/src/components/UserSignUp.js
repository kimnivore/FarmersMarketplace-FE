import React, { useState } from 'react'
import axiosWithAuth from '../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';
import validation from './validations/validation';

const initialFormValues = {
    username: '',
    password: ''
};
const initialFormErrors = {
    username: '',
    password: ''
};

function UserSignUp()   {

    const { push } = useHistory();
    const [formValues, setFormValues] = useState(initialFormValues);
    const [formErrors, setFormErrors] = useState(initialFormErrors);

    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
       }
    
       const handleSubmit = (e) => {
           e.preventDefault();
           setFormErrors(validation(formValues))
           axiosWithAuth()
           .post('/api/auth/register', formValues)
           .then(resp => {
               localStorage.setItem('username', resp.data.username);
               localStorage.setItem('password', resp.data.password);
               localStorage.setItem('token', resp.data.token);
               push('/my-items');
           })
           .catch(err => {
               console.log(err);
           })
       }

    return (
        <div className = 'AccountPage'>

            <div className = 'User'>
                <h1 className = 'title'>Sign Up Below</h1>
                    <form onSubmit={handleSubmit}>
                        <label>Username:
                            <input
                                type='text'
                                name='username'
                                onChange={handleChange}
                            />
                             {formErrors.username && <p>{formErrors.username}</p>}
                        </label>
                        <label>Password:
                            <input
                                type='password'
                                name='password'
                                onChange={handleChange}
                            />
                            {formErrors.password && <p>{formErrors.password}</p>}
                        </label>
                        <button className = "CreateAccountButton2">Create Account</button>
                    </form>
            </div>
        </div> 
    )
}

export default UserSignUp;
