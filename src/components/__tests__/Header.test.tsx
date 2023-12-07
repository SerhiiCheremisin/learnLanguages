import Header from '../Header';
import { cleanup, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import { BrowserRouter } from "react-router-dom";

afterEach(cleanup)

test("renders header navigation menu", () => {
 render(
 <Provider store={store}>
  <BrowserRouter>
  <Header/>
  </BrowserRouter>
 </Provider>
 )
const links = screen.getByTestId("links");
const menu = screen.getByTestId("choserMenu");
expect(menu).toBeInTheDocument();
expect(links).toBeInTheDocument();
});
