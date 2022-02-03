import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';
import validation from './validations/validation';

const initialFormValues = {
    username: '',
    password: ''
};
const initialFormErrors = {
    username: '',
    password: ''
};

function Home()   {
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
       .post('/api/auth/login', formValues)
       .then(resp => {
        //    console.log(resp);
           localStorage.setItem('username', resp.data.username);
           localStorage.setItem('password', resp.data.password);
           localStorage.setItem('token', resp.data.token);
           push('/marketplace');
       })
       .catch(err => {
           console.log(err);
           alert('A valid username and password are required')
       })
    }

    const handleCreate = () => {
        push('/signup');
    }


    return (
        <div className='HomePage'>
            <h1 className='Title'>African Market Place</h1>
                <p className='Intro'>Empowering small business owners </p>
                    <h2 className='Instructions'>Login Or Create an Account</h2>
                    <form onSubmit={handleSubmit}>
                        <label>Username:
                            <input
                                type='text'
                                name='username'
                                value={formValues.username}
                                onChange={handleChange}
                            />
                            {formErrors.username && <p>{formErrors.username}</p>}
                        </label>
                        <label>Password:
                            <input
                                type='password'
                                name='password'
                                value={formValues.password}
                                onChange={handleChange}
                            />
                            {formErrors.password && <p>{formErrors.password}</p>}
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