import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
// import MyItemsCard from './MyItemsCard';



const MyItems = () => {
    const [items, setItems ] = useState([]);
   
    useEffect(() => {
        axios.get('https://reqres.in/api/orders')
        .then(resp => {
            console.log(resp);
            setItems(resp.data.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, []);

    return (
        <ComponentContainer>        
        <div>
            <h1>My Items</h1>
            <ul className='myItems'>
                {
                    items.map(item => {
                        return <li key={item.id}>{item.image} - {item.name} - {item.price} - {item.description}</li>
                    })
                }
            </ul>
        </div>
        </ComponentContainer>

    )
}

export default MyItems;

const ComponentContainer = styled.div`
    background-color: #EB3436;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    font-family: -apple-system,BlinkMacSystemFont,sans-serif;
    font-size: 1.5rem;
    font-weight: 400;
    font-style: normal;
    color: rgb(0, 0, 0);
    text-decoration: none;
    height: 100vh;
    width: 100%;
    position: fixed;

    h1{
    font-size: 60px;
    font-weight: 400;
    padding: 20px;
    margin: auto;
    width: 100%;
    color: white;
    }

`