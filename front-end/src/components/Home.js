import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
// import axiosWithAuth from '../utils/axiosWithAuth';
import axios from 'axios';

function Home()   {

    const { push } = useHistory();

    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });

    // const [error, setError] = useState('');

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
       axios.post('https://backend-african-marketplace.herokuapp.com/api/auth/login', credentials)
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
        <div className='HomePage'>
            <h1 className='Title'>African Market Place</h1>
                <p className='Intro'>INTERESTED IN BUYING OR SELLING GOODS IN YOUR AREA?</p>
                    <h2 className='Instructions'>Login Or Open An Account</h2>
                    <form onSubmit={handleSubmit}>
                        <label>Username:
                            <input
                                type='text'
                                name='username'
                                value={credentials.username}
                                onChange={handleChange}
                            />
                        </label>
                        <label>Password:
                            <input
                                type='password'
                                name='password'
                                value={credentials.password}
                                onChange={handleChange}
                            />
                        </label>
                        <button className = "LoginButton">Login</button>
                    </form>
                    {/* {error && <p>{error}</p>} */}
                    <div className = "buttons">
                        <button onClick={handleCreate} className = "CreateAccountButton">Create Account</button>
                    </div>
        </div>
            
    )
}

export default Home;