import React from 'react';

import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import './App.css';

import styled from "styled-components"

const Wrapper = styled.div`
  border:1px solid red;
  height:100vh;
  display:flex;
  flex-direction:column;
`;

const Main = styled.div`
  border:1px solid green;
  flex-grow:1;
  overflow:auto;
`;

const Nav = styled.nav`
  border:1px solid blue;
  > ul {
    display:flex;
    > li {
      width:33.3%;
      text-align:center;
      padding:16px
    }
  }
`

function nav() {
  return (
    <Router>
      <Wrapper>
        <Main>
          <Switch>
            <Route exact path="/money">
              <Money />
            </Route>
            <Route path="/tags">
              <Tags />
            </Route>
            <Route path="/statistice">
              <Statistice />
            </Route>

            <Redirect exact from="/" to="/money" />

            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </Main>
        <Nav>
          <ul>
            <li>
              <Link to="/money">钱包</Link>
            </li>
            <li>
              <Link to="/tags">标签</Link>
            </li>
            <li>
              <Link to="/statistice">计算</Link>
            </li>
          </ul>
        </Nav>
      </Wrapper>
    </Router>
  );
}

function Money() {
  return (
    <div>
      <h2>Home---</h2>
    </div>
  );
}

function Tags() {
  return (
    <div>
      <h2>Tags---</h2>
    </div>
  );
}

function Statistice() {
  return (
    <div>
      <h2>Statistice---</h2>
    </div>
  );
}

function NoMatch() {

  return (
    <div>
      <h3>
        页面丢失了～
      </h3>
    </div>
  );
}

export default nav
