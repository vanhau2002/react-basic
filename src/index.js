import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Form } from 'react-router-dom';

import AppB from './component/Hook/AppUseEffect.js';
import UseState from './component/Router/UseState';
import UseRef from './component/Router/UseRef';
import Content from './component/Hook/Content';
import AppUseEffect from './component/Hook/AppUseEffect.js';
import Appmemo from './component/exercises/Appmemo';
import UseCallback from './component/Router/UseCallback';
import UseReducer from './component/Router/UseReducer';
import Forms from './component/Forms';
import ListTodo from './Todos/ListTodo';
import AppUseContext from './component/Hook/AppUseContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path='UseReducer' element={<UseReducer />} />
          <Route path='UseEffect' element={<AppUseEffect />} />
          <Route path='UseRef' element={<UseRef />} />
          <Route path='UseCallback' element={<UseCallback />} />
          <Route path='UseContext' element={<AppUseContext />} />
          <Route index element={<UseState />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
