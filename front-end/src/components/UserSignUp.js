import React, { useState } from 'react'
import axiosWithAuth from '../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';

function UserSignUp()   {

    const { push } = useHistory();

    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    })

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
       }
    
       const handleSubmit = (e) => {
           e.preventDefault();
           axiosWithAuth()
           .post('/api/auth/register', credentials)
           .then(resp => {
               console.log(resp);
               localStorage.setItem('username', resp.data.username);
               localStorage.setItem('password', resp.data.password);
               localStorage.setItem('token', resp.data.token);
               push('/marketplace');
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
                        </label>
                        <label>Password:
                            <input
                                type='password'
                                name='password'
                                onChange={handleChange}
                            />
                        </label>
                        <button className = "CreateAccountButton2">Create Account</button>
                    </form>
            </div>
        </div> 
    )
}

export default UserSignUp;
