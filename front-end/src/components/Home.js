import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';

function Home()   {

    const { push } = useHistory();

    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });

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
       .post('/api/auth/login', credentials)
       .then(resp => {
           console.log(resp);
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
                    <h2 className='Instructions'>Login Or Create an Account</h2>
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
                    <div className = "buttons">
                        <button onClick={handleCreate} className = "CreateAccountButton">Create Account</button>
                    </div>
        </div>
            
    )
}

export default Home;