import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const MyItemsCard = () => {
    const [myItems, setMyItems ] = useState([]);
   
    useEffect(() => {
        axios.get('https://reqres.in/api/orders')
        .then(resp => {
            console.log(resp.data);
            setMyItems(resp.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, []);

    return (
        <div>
            <h1>My Items</h1>
        </div>
    )
}

export default MyItemsCard;