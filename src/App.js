import logo from './logo.svg';
import './App.css';
import State from './component/State';
import Forms from './component/Forms';
import Mycomponents from './component/Mycomponent';
import ListTodo from './Todos/ListTodo';
import Nav from './Nav/Nav';
import Home from './component/Home';
import React from "react";
// import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Header from './component/Router/Header';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
function App() {
  return (
    <div className="App">
      <div className='app-header'>
        <Header />
      </div>
      <div className='app-content' style={{ textAlign: 'center' }}>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
