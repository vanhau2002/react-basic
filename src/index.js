import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Admin from './component/Router/Admin';
import User from './component/Router/User';

import Homes from './component/Router/Homes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<App />}>
          <Route path='Admins' element={<Admin />} />
          <Route path='users' element={<User />} />
          <Route index element={<Homes />} />
        </Route>

      </Routes>

    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
