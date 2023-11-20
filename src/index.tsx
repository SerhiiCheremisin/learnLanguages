import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import { Provider } from 'react-redux';
import store from './redux/store';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { navigationMenu, navigationMenuSecondary } from './services/navigationData';
import { navigationMenuType, ISecondNavigationMenu } from './services/types';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
   <Provider store={store}>
    <BrowserRouter>
    <Header/>
    <main>
    <Routes>
     { navigationMenu.map( (path:navigationMenuType) => {
      return  <Route key={path.path} path={path.path} element={path.element} />
     }) }
     { navigationMenuSecondary.map( (path: ISecondNavigationMenu) => {
        return  <Route key={path.path} path={path.path} element={path.element} />
     }) }
    </Routes>
    </main>
    </BrowserRouter>
    </Provider>  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
