import axios from 'axios';

const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        headers: {
            authorization: token
        },
        baseURL: 'http://backend-african-marketplace.herokuapp.com'
    })
}

export default axiosWithAuth;