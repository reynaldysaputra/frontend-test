import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useTokenUser } from '../context/tokenUserContext';

function ProtectedRoute(){
  const { token } = useTokenUser();

  return(
    token ? <Outlet/> : <Navigate to='/' />
  )
}

export default ProtectedRoute;