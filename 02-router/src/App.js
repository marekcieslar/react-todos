import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import About from './About';
import Quote from './Quote';
import QuoteForm from './QuoteForm';

import quoteContext from './contexts/quoteContext';
import { quotes } from './contexts/data';

function App() {
  const [quote, setQuote] = useState(quotes);

  return (
    <BrowserRouter>
      <quoteContext.Provider value={[quote, setQuote]}>
        <div className="App">
          <Header></Header>
          <h1>hello</h1>
          <Switch>
            <Route
              path="/"
              exact
              render={() => {
                return (
                  <article>
                    <h1>Home</h1>
                    <p>Quotes are in here!</p>
                  </article>
                );
              }}
            />
            <Route path="/about" exact component={About}></Route>
            <Route path="/quote" exact component={Quote}></Route>
            <Route path="/quote/:id" exact component={Quote}></Route>
            <Route path="/quote-form" exact component={QuoteForm}></Route>
          </Switch>
        </div>
      </quoteContext.Provider>
    </BrowserRouter>
  );
}

export default App;
