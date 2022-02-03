import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './App.css';
import styled from 'styled-components';
import Banner from './images/banner.jpg';

import PrivateRoute from './components/PrivateRoute';

import Home from './components/Home';
import UserSignUp from './components/UserSignUp';
import CreateItem from './components/CreateItem';
import MyItems from './components/MyItems';
import Marketplace from './components/Marketplace';
import Logout from './components/Logout';


function App() {
  return (
      <AppContainer>
        <HeaderStyle>
          <h2> African Market Place </h2>
          <NavStyle>
            <Link to='/' className='navlink'>Home</Link>
            <Link to='/signup' className='navlink'>Sign Up</Link>
            <Link to='/create-item' className='navlink'>Create Listing</Link>
            <Link to='/my-items' className='navlink'>My Items</Link>
            <Link to='/marketplace' className='navlink'>Marketplace</Link>
            <Link to='/logout' className='navlink'>Logout</Link>
          </NavStyle>
        </HeaderStyle>
        <Switch>
          <Route path='/logout' component={Logout} />
          <PrivateRoute path='/marketplace' component={Marketplace}/>
          <PrivateRoute path='/my-items' component={MyItems} />
          <PrivateRoute path='/create-item' component={CreateItem}/>
          <Route path='/signup' component={UserSignUp}/>
          <Route path='/login' component={Home} />
          <Route exact path='/' component={Home} />
        </Switch>
      </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  height: 100%
  border: 1px solid black;
`

const HeaderStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-image: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url(${Banner});
`
const NavStyle = styled.div`
  .navlink{
    margin: 20px;
    color: black;
    text-decoration: none;
    font-weight: bold;
  }

  .navlink:focus{
    color: gray;
    font-weight: bold;
  }
`
 