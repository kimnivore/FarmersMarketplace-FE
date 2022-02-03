import axios from 'axios';

const axiosWithAuth = () => {
    const token = localStorage.getItem('token');
    const id = localStorage.getItem('user_id')

    return axios.create({
        headers: {
            authorization: token, id
        },
        baseURL: 'https://backend-african-marketplace.herokuapp.com'
    });
}

export default axiosWithAuth;