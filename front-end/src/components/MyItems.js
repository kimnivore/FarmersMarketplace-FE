import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axiosWithAuth from '../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';


const MyItems = () => {
    const [items, setItems ] = useState([]);
    const { push } = useHistory();
    // const { id } = useParams();
   
    useEffect(() => {
        axiosWithAuth()
        .get('/api/items/')
        .then(resp => {
            setItems(resp.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, []);

    // const deleteItem = (id) => {
    //     setItems(items.filter(item =>(item.item_id !== Number(id))));
    // }

    // const handleDelete = (id) => {
    //     axiosWithAuth()
    //     .delete(`/orders/${id}`)
    //     .then(resp => {
    //         deleteItem(id);
    //         push('/my-items');
    //     })
    //     .catch(err => {
    //         console.log(err.response);
    //     })
    // }

    const handleAdd = () => {
        push('/create-item');
    }

    return (
        <ComponentContainer>        
            <h1>My Items</h1>
            <div className='body'>
                <div >
                    <button className='button' onClick={() => {handleAdd()}}>Add New Item</button>
                </div>
                <div className='all-items'>
                    {
                        items.map(item => {
                            return (
                                <div className='item' key={item.item_id}>
                                    {/* <img alt='' src={item.img}/> */}
                                    <h2>{item.item_name}</h2>
                                    <h3>Category: {item.item_category}</h3>
                                    <h3>Price: ${item.item_price}</h3>
                                    <p>Description: {item.item_description}</p>
                                    {/* <button onClick={() => {handleDelete(item.id)}}>Delete</button> */}
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
    min-width: 100%;
    min-height: 100vh;
    border: 1px solid black;

    h1{
        font-size: 60px;
        font-weight: 400;
        padding: 20px;
        margin: auto;
        width: 100%;
        color: white;
        align-items: center;
    }
    h2 {
        text-decoration: underline;
    }
    p{
        color: white;
        font-weight: bold;
        font-size: 1rem;
    }
    .all-items{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        width: 80%;
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
        width: 25%;
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
    .body {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: auto;
    }
   
   .button{
        min-width: 130px;
        height: 40px;
        color: #133C55;
        padding: 5px 10px;
        font-size: 2rem;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.3s ease;
        position: relative;
        display: inline-block;
        outline: none;
        border-radius: 5px;
        border: none;
        background: #F4B860;
        box-shadow: 0 5px #ffd819;
        margin-bottom: 40px;
        }
    .button:hover {
        box-shadow: 0 3px #ffd819;
        top: 1px;
        }
    .button:active {
        box-shadow: 0 0 #ffd819;
        top: 5px;
}
`