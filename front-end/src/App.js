import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './App.css';
import styled from 'styled-components';

import Home from './components/Home';
import UserSignUp from './components/UserSignUp';
import CreateItem from './components/CreateItem';
import MyItems from './components/MyItems';
import Logout from './components/Logout';

function App() {
  return (
      <AppContainer>
        <HeaderStyle>
          <h2> African Market Place </h2>
          <NavStyle>
            <Link to='/' className='navlink'>Home</Link>
            <Link to='/signup' className='navlink'>Sign Up</Link>
            <Link to='/create-item' className='navlink'>Create Item</Link>
            <Link to='/my-items' className='navlink'>My Items</Link>
            <Link to='/sell-items' className='navlink'>Marketplace</Link>
            <Link to='/logout' className='navlink'>Logout</Link>
          </NavStyle>
        </HeaderStyle>
        <Switch>
          <Route path='/logout' component={Logout} />
          <Route path='/sell-items' />
          <Route path='/my-items' component={MyItems} />
          <Route path='/create-item' component={CreateItem}/>
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
`

const HeaderStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 10px

`
const NavStyle = styled.div`
  .navlink{
    margin: 20px;
    color: gray;
    text-decoration: none;
  }

  .navlink:focus{
    color: black;
    font-weight: bold;
  }
`
 