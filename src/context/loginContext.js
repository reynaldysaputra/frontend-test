import { createContext, useContext, useState } from "react";
import axios from 'axios';
import { useTokenUser } from "./tokenUserContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export function useLogin(){
  return useContext(LoginContext);
}

export const LoginContext = createContext("");

export const LoginProvider = ({children}) => {
  const {setToken, handleTokenUser} = useTokenUser();
  const [error, setError] = useState('');
  let navigate = useNavigate();

  const handleLoginUser = (props) => {
    const { url, username, password } = props;

    axios({
      url,
      method: "POST",
      data: {
        username,
        password
      }
    }).then(res => {
      handleTokenUser({
        tokenUser: res.data.token
      })
      navigate('/user')
      toast.success('Login successful', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }).catch(err => {
      setError(err.response.data);
      toast.error(err.response.data, {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    })
  }

  return(
    <LoginContext.Provider value={handleLoginUser}>
      {children}
    </LoginContext.Provider>
  )
}