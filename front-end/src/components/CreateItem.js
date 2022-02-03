import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Pic from '../images/pic02.jpeg';


const CreateItem = () => {
    const {push} = useHistory();
    const [item, setItem] = useState({
        item_name: '',
        item_description: '',
        item_price: '',
        item_category: '',
    });

    const [items, setItems] = useState([]);

    useEffect(() => {
      axiosWithAuth()
      .get('/api/items')
      .then(resp => {
          setItems(resp.data);
      })
      .catch(err => {
          console.log(err);
      })
    }, []);
   
    const handleChange = (e) => {
       setItem({
           ...item,
           [e.target.name]: e.target.value
       });
    }
    
   
    const handleSubmit = (e) => {
        e.preventDefault();
            axiosWithAuth()
            .post('/api/items/', item)
            .then(resp => {
                setItems(resp.data);
                push('/my-items');
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <ComponentContainer>
            <div>
                <h1>Create Item</h1>
                <form onSubmit={handleSubmit}>
                <div className='form-container'>
                    <img src={Pic} alt='sample pic'/>
                    <div className='label-container'>
                    <div className='label'>
                        <label>Item Name:
                            <input
                                type='text'
                                name='item_name'
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    <div className='label'>
                        <label>Category:
                            <input
                                type='text'
                                name='item_category'
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    <div className='label'>
                        <label>Price:
                            <input
                                type='text'
                                name='item_price'
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    <div className='label'>
                        <label>Description:
                            <input 
                                type='text'
                                name='item_description'
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
    background-color: #386FA4;
    display: flex;
    flex-direction: row;
    /* align-items: center;
    justify-content: center; */
    margin: auto;
    font-family: 'Roboto Mono', monospace;
    font-size: 1rem;
    font-weight: 400;
    font-style: normal;
    text-decoration: none;
    min-width: 100%;
    min-height: 100vh;
    border: 1px solid black;

    h1{
    font-size: 60px;
    font-weight: 400;
    padding: 20px;
    margin: auto;
    width: 100%;
    align-items: center;
    color: white;
    }

    .form-container {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
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
        border-radius: 10%;
        color: white;
        padding: 15px 10px;
        margin-left: 200px;
    }

    img{
        width: 200px;
        height: 200px;
        margin: 0 50px;
    }

`