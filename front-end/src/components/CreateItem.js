import React, { useState } from 'react';
//import axiosWithAuth from '../utils/axiosWithAuth';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Pic from '../images/pic02.jpeg';
import axios from 'axios';

const CreateItem = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: '',
        price: '',
        description: '',
    });

    const handleChange = (e) => {
       setForm({
           ...form,
           [e.target.name]: e.target.value
       });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://reqres.in/api/orders', form)
            .then(resp => {
                console.log(resp);
                navigate('/my-items');
            })
            .catch(err => {
                console.log(err);
            })

    }


    return (
        <ComponentContainer>
            <div>
                <h1>Create An Item</h1>
                <form onSubmit={handleSubmit}>
                <div className='form-container'>
                    <img src={Pic} alt='sample pic'/>
                    <div className='label-container'>
                    <div className='label'>
                        <label>Item Name:
                            <input
                                type='text'
                                name='name'
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    <div className='label'>
                        <label>Price:
                            <input
                                type='text'
                                name='price'
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    <div className='label'>
                        <label>Description:
                            <input 
                                type='text'
                                name='description'
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    <button>CREATE ITEM</button>
                    </div>
                </div>
                </form>
            </div>
         </ComponentContainer>
    )
}

export default CreateItem;

const ComponentContainer = styled.div`
    background-color: #EE8938;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;
    font-family: sans-serif;
    font-size: 1rem;
    font-weight: 400;
    font-style: normal;
    text-decoration: none;
    height: 100vh;
    width: 100%;
    /* position: fixed; */
    

    h1{
    font-size: 60px;
    font-weight: 400;
    padding: 20px;
    margin: auto;
    width: 100%;
    align-items: center;
    }

    .form-container {
        display: flex;
        justify-content: space-between;
        align-items: space-around;
        padding: 50px;
        width: 80%;
    }
    label{
        display: flex;
        justify-content: space-between;
        color: white;
        margin: 20px;
        font-size: 20px;
    }

    input {
        margin-left: 40px;
    }
    button{
        font-size: 16px;
        background-color: black;
        border-radius: 100%;
        color: white;
        padding: 15px 50px;
        margin: 20px;
    }

    img{
        width: 200px;
        height: 200px;
        margin: 0 50px;
    }

`