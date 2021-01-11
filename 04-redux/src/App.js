import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Nav from './Nav';
import Home from './Home';
import Deposit from './Deposit';
import Withdraw from './Withdraw';

import { createStore } from 'redux';
import reducer from './store/reducer';
import { Provider } from 'react-redux';

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Nav></Nav>
        <div className="App">
          <h1>Learn Redux</h1>
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/deposit" exact component={Deposit}></Route>
            <Route path="/withdraw" exact component={Withdraw}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
