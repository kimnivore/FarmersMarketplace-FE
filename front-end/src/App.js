import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './App.css';
import styled from 'styled-components';

import Home from './components/Home';
import UserSignUp from './components/UserSignUp';
import CreateItem from './components/CreateItem';
import MyItems from './components/MyItems';

function App() {
  return (
      <AppContainer>
        <HeaderStyle>
          <h2> African Market Place </h2>
          <NavStyle>
            <Link to='/' className='navlink'>Home</Link>
            <Link to='/signup' className='navlink'>Sign Up</Link>
            <Link to='/login' className='navlink'>Login</Link>
            <Link to='/create-item' className='navlink'>Create Item</Link>
            <Link to='/my-items' className='navlink'>My Items</Link>
            <Link to='/sell-items' className='navlink'>Marketplace</Link>
          </NavStyle>
        </HeaderStyle>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Home} />
          <Route exact path='/signup' component={UserSignUp}/>
          <Route exact path='/create-item' component={CreateItem}/>
          <Route exact path='/my-items' component={MyItems} />
          <Route exact path='/sell-items' />
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
 