import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export function useTokenUser(){
  return useContext(UserContext);
}

const UserContext = createContext({});

export function TokenUserProvider({children}) {
  const [token, setToken] = useState(localStorage.getItem('userTokenLogin'));
  const navigate = useNavigate();

  const handleTokenUser = ({ tokenUser }) => {
    setToken(tokenUser);
    localStorage.setItem('userTokenLogin', JSON.stringify(tokenUser))
  }

  const handleRemoveToken = () => {
    setToken("");
    localStorage.removeItem("userTokenLogin");
    navigate("/");
  }

  return(
    <UserContext.Provider value={{token, setToken, handleTokenUser, handleRemoveToken}}>
      {children}
    </UserContext.Provider>
  )
}