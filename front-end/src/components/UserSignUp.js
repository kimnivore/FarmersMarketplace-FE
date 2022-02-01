import React, { useState } from 'react'
import axiosWithAuth from '../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';

function UserSignUp()   {

    const { push } = useHistory();

    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    })

    const [error, setError] = useState('');

    const handleCreate = () => {
        push('/signup');
    }
    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
       }
    
       const handleSubmit = (e) => {
           e.preventDefault();
           axiosWithAuth()
           .post('/users', credentials)
           .then(resp => {
               localStorage.setItem('username', resp.data.username);
               localStorage.setItem('password', resp.data.password);
               localStorage.setItem('token', resp.data.token);
               push('/my-items');
           })
           .catch(err => {
               console.log(err);
               setError(err.response.data.error);
           })
       }

    return (
        <div className = 'AccountPage'>

            <div className = 'User'>
                <h1 className = 'title'>Sign Up Below</h1>
                    {/* <h2 className = 'TextBox'>Name: <input className = "Name"></input> </h2>
                    <h2 className = 'TextBox'>Password: <input className = "Password"></input> </h2> */}
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
                    {error && <p>{error}</p>}
            </div>


        </div>
            
    )
}

export default UserSignUp;
