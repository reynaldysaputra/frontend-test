import axios from "axios";
import { useContext, createContext, useState } from "react";

export function useUser(){
  return useContext(UserContext)
}

const UserContext = createContext();

export const UserProvider = ({children}) => {
  const [user, setUser] = useState([]);

  const getUser = (url) => {
    axios({
      url,
      method: "GET"
    }).then(res => {
      setUser(res.data);
    })
  }

  return(
    <UserContext.Provider value={{user, getUser}}>
      {children}
    </UserContext.Provider>
  )
}