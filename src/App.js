import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { toast } from 'react-toastify';
import ModalAddUser from './components/modalUser';
import ModalUserUpdate from './components/modalUserUpdate';
import ProtectedRoute from './components/protectedRoute';
import { useTokenUser } from './context/tokenUserContext';
import UserDetail from './pages/detailUser';
import LoginPage from './pages/login';
import UserPage from './pages/user';

function App() {
  const {token, handleRemoveToken} = useTokenUser();

  return (
    <div className="App">
      <header className='bg-black text-xl lg:text-2xl text-white text-center py-5 font-bold'>
        Test Coding Front End by: Reynaldy <br/>
        {token && (
          <button 
            className='border-2 border-white px-3 py-1 mt-4 text-sm'
            onClick={handleRemoveToken}
          >Logout</button>
        )}
      </header>

      <div className='w-[90%] m-auto'>
        <Routes>
          <Route path='/' element={<LoginPage/>} /> 
          <Route element={<ProtectedRoute/>}>
            <Route path='/user' element={<UserPage/>} />
            <Route path="/user/:userId" element={<UserDetail />} />
          </Route>
        </Routes>
      </div>

      {/* Modal for user */}
      <ModalAddUser/>
      {/* Modal user for update */}
      <ModalUserUpdate/>
    </div>
  );
}

export default App;
