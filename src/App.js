import logo from './logo.svg';
import { Router } from "react-router";
import history from "./history"
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from "./components/pages/Home"
import Login from "./components/pages/Login"
import Routes from './Routes';
import React from 'react'

function App() {

  return (
    <div>
      <Header />
      <Router history={history}>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
