import axios from "axios";
import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useModal } from "./modalContext";

export function useUser(){
  return useContext(UserContext)
}

const UserContext = createContext();

export const UserProvider = ({children}) => {
  const [user, setUser] = useState([]);
  const [detailUser, setDetailUser] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const {modalIsOpen, openModal, closeModal} = useModal();

  const getUser = (url) => {
    axios({
      url,
      method: "GET"
    }).then(res => {
      setUser(res.data);
    })
  }

  const getUserById = (id) => {
    axios({
      url: `https://fakestoreapi.com/users/${id}`,
      method: "GET"
    }).then(res => {
      setDetailUser(res.data);
      console.log(res.data)
    }).catch(err => {
      navigate('/user');
      alert("User not found");
    }).finally(() => setLoading(false))
    setLoading(false);
  }

  // API di dalam fungsi ini bermasalah
  const postDataUser = ({url, email, username, password, firstname, lastname, city, street, number, zipcode, lat, long, phone}) => {
    axios({
      url,
      method: "POST",
      body: JSON.stringify(
        {
            email,
            username,
            password,
            name:{
                firstname: firstname,
                lastname: lastname
            },
            address:{
                city: city,
                street: street,
                number: number,
                zipcode: zipcode,
                geolocation:{
                    lat: lat,
                    long: long
                }
            },
            phone: phone
        }
      )
    }).then(res => {
      closeModal(false);
      console.log(res.data)
    }).catch(err => console.log(url))
  }

  const deleteUser = (id) => {
    axios({
      url: `https://fakestoreapi.com/users/${id}`,
      method: "DELETE"
    }).then(res => {
      toast.success(`User ${id} data has been deleted successfully`, {
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
    <UserContext.Provider 
      value={
        {
          user, 
          loading, 
          detailUser, 
          getUser, 
          getUserById, 
          postDataUser,
          deleteUser
        }
    }
    >
      {children}
    </UserContext.Provider>
  )
}