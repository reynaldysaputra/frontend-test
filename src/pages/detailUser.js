import React, { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useUser } from '../context/userContext';

function UserDetail(){
  const {detailUser: user, loading, getUserById} = useUser();
  const params = useParams();

  useEffect(() =>{
    getUserById(params.userId);
  }, [params.userId])

  return(
    <div className='mt-4'>
      {loading && "Loading..."}
      {user && (
        <>
          <h2 className='text-xl lg:text-2xl font-bold'>{user.username}</h2>
          <div className='mt-3'>
            <p>Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : {user.email}</p>
            <p>Username &nbsp;: {user.username}</p>
            <p>Password &nbsp;&nbsp;: {user.password}</p>
            <p>First Name : {user.name.firstname}</p>
            <p>Last Name : {user.name.lastname}</p>
            <p>
              Address &nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;
              {user.address.street} {user.address.number} {user.address.zipcode}
            </p>
            <p>Phone &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {user.phone}</p>
            </div>
        </>
      )}
    </div>
  )
}

export default UserDetail;