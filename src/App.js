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

const orders = [100, 200, 300]

function App() {



  const [counter, setCounter] = useState(() => {
    const total = orders.reduce((total, cur) => total + cur)
    console.log(total);
    return total
  })
  const handleIncrease = () => {
    setCounter(counter + 1)

  }
  return (
    <div className='App'>
      <h1>{counter}</h1>
      <button onClick={handleIncrease}>Increase</button>
    </div>



    // <div className="App"> --> Router
    //   <div className='app-header'>
    //     <Header />
    //   </div>
    //   <div className='app-content'>
    //     <Outlet />
    //   </div>



    /* ---->  Router cũ <header className="App-header">
      <Nav />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path='todo' element={<ListTodo />} />
          <Route exact path='about' element={<Mycomponents />} />
        </Routes>
      </Router>
    </header> */

    // </div >


  );
}

export default App;
