import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

it('should render', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header></Header>, div);
});

it('should render with params', () => {
  const { getByTestId } = render(<Header title="awesome title" />);
  expect(getByTestId('header-title')).toHaveTextContent('awesome title');
});

it('should render with params from variable', () => {
  const title = 'awesome title from variable';
  const { getByTestId } = render(<Header title={title} />);
  expect(getByTestId('header-title')).toHaveTextContent(title);
});

it('matches snapshot', () => {
  const title = 'awesome title for renderer';
  const tree = renderer.create(<Header title={title} />).toJSON();
  expect(tree).toMatchSnapshot();
});
