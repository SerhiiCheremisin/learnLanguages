import HomePage from '../../pages/home/HomePage';
import { cleanup, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import { BrowserRouter } from "react-router-dom";

afterEach(cleanup)

test("should be rendered category menu", () => {
 render(
 <Provider store={store}>
  <BrowserRouter>
  <HomePage/>
  </BrowserRouter>
 </Provider>
 )
 const cards = screen.getByTestId("singleCategoryCard");
 expect(cards).toBeInTheDocument();
})
