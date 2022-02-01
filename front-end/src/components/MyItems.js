import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axiosWithAuth from '../utils/axiosWithAuth';
import { useHistory, useParams } from 'react-router-dom';




const MyItems = () => {
    const [items, setItems ] = useState([]);
    const { push } = useHistory();
    const { id } = useParams();
   
    useEffect(() => {
        axiosWithAuth()
        .get('/orders')
        .then(resp => {
            console.log(resp);
            setItems(resp.data.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, []);

    const deleteItem = (id) => {
        setItems(items.filter(item =>(item.id !== Number(id))));
    }

    const handleDelete = (id) => {
        axiosWithAuth()
        .delete(`/orders/${id}`)
        .then(resp => {
            deleteItem(id);
            console.log(resp);
            // setItems(resp.data);
            push('/my-items');
        })
        .catch(err => {
            console.log(err.response);
        })
    }

    return (
        <ComponentContainer>        
        <div>
            <h1>My Items</h1>
            <div className='all-items'>
                {
                    items.map(item => {
                        return (
                            <div className='item' key={item.id}>
                                <img alt='' src={item.img}/>
                                <h2>{item.name}</h2>
                                <h3>Price:{item.price}</h3>
                                <p>Description:{item.description}</p>
                                <button onClick={() => {handleDelete(item.id)}}>Delete</button>
                            </div>
                            )
                    })
                }
            </div>
        </div>
        </ComponentContainer>

    )
}

export default MyItems;

const ComponentContainer = styled.div`
    background-color: #386FA4;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;
    font-family: 'Roboto Mono', monospace;
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
        color: white;
        align-items: center;
    }
    p{
        color: white;
        font-weight: bold;
    }
    .all-items{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    .item{
        border: 1px black solid;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: center;
        margin: 10px;
        padding: 20px;
        width: 20%;
        background-color: #84D2F6;
    }
    img{
        width: 100px;
        height: 100px;
        border: #386FA4 solid 1px;
    }

    button {
        border-radius: 10%;
        font-size: 1rem;
    }
`