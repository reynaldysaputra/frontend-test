import React, { useCallback, useEffect, useState } from 'react';
import DocumentTitle from 'react-document-title';
import { useNavigate } from 'react-router-dom';
import Button from '../components/button';
import Input from '../components/input';
import { useLogin } from '../context/loginContext';
import { useTokenUser } from '../context/tokenUserContext';

function LoginPage(){
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleLoginUser = useLogin();
  const {token} = useTokenUser();
  const navigate = useNavigate();

  const handleUsername = useCallback((e) => setUsername(e.target.value), setUsername);
  const handlePassword = useCallback((e) => setPassword(e.target.value), setPassword);

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    handleLoginUser({
      url: "https://fakestoreapi.com/auth/login",
      username,
      password
    })
    setUsername("");
    setPassword("");
  }

  useEffect(() => {
    if(token) navigate('/user');
  }, [])

  return(
    <DocumentTitle title='Login'>
      <>
        <main className='w-full h-[90vh] flex justify-center items-center'>
          <form className='w-[50%] lg:w-[25%] space-y-4' onSubmit={handleSubmitLogin}>
            <Input 
              type='text' 
              placeholder='Username' 
              name='username' 
              value={username}
              onChange={handleUsername}
            />
            <Input 
              type='password' 
              placeholder='Password' 
              name='password'
              value={password} 
              onChange={handlePassword}
            />
            <Button>
              Login
            </Button>
          </form> 
        </main>
      </>
    </DocumentTitle>
  )
}

export default LoginPage;