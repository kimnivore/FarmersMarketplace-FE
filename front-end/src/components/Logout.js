import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';


const Logout = () => {
    const { push } = useHistory();

    useEffect(() => {
        axiosWithAuth()
        .post('/api/auth/login')
        .then(resp => {
            localStorage.removeItem('token');
            push('/');
        })
        .catch(err => {
            console.log(err);
        })
    }, []);

    return(
        <div></div>
    );
}

export default Logout;