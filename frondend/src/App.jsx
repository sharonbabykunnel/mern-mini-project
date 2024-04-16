import React from 'react';
import {ToastContainer} from 'react-toastify';
import { Outlet } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
    <Header/>
    <ToastContainer/>
    <Outlet/>
    <Footer/>
    </div>
  )
}


export default App
