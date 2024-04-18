import Navbar from './components/navbar';
import Login from './pages/Login';
import Home from './pages/Home';
import GetStarted from './pages/GetStarted';
import SignUp from './pages/SignUp';
import { Route, Routes, useLocation } from 'react-router-dom'; 
import { useState } from 'react';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/login' exact element={<Login />} />
        <Route path='/get-started' exact element={<GetStarted />} />
        <Route path='/sign-up' exact element={<SignUp />} />
      </Routes>
      <Navbar/>
    </div>
  );
}

export default App;


