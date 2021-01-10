# React router

```sh
npm i react-router-dom
```

- create some components
- import _BrowserRouter_ component and wrap app with it
- import _Route_ component and add path, exact and render or component to it
- wrap _Route_ components in _Switch_ component
  - data from route are in _match_ prop (match.params)
- _Link_ has only one attribute
  - _to_ and it is string '/readme'
- _NavLink_ has the same as _Link_ and:
  - _exact_
  - _activeStyle_
  - _activeClassName_
- _Redirect_
  - _to_
- _Prompt_ component has:
  - _when_ - boolean - {!!text || !!author}
  - _message_ - returns true or message: 'are you shore...?'
