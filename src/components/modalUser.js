import React, { useCallback, useState } from 'react';
import Modal from 'react-modal/lib/components/Modal';
import { useModal } from '../context/modalContext';
import { useUser } from '../context/userContext';
import Button from './button';
import Input from './input';

function ModalAddUser(){
  const {modalIsOpen, closeModal} = useModal(false);
  const { postDataUser } = useUser();
  const [userinput, setUserInput] = useState({
    email: "",
    username: "",
    password: "",
    firstname: "",
    lastname: "",
    city: "",
    street: "",
    number: "",
    zipcode: "",
    lat: "",
    long: "",
    phone: "",
  })

  const handleInputUser = useCallback((e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserInput({
      ...userinput,
      [name]: value
    })
  })

  const handleSubmitPost = (e) => {
    e.preventDefault();
    postDataUser({
      url: "https://fakestoreapi.com/users",
      email: userinput.email, 
      username: userinput.username, 
      password: userinput.password, 
      firstname: userinput.firstname, 
      lastname: userinput.lastname, 
      city: userinput.city, 
      street: userinput.street, 
      number: userinput.number, 
      zipcode: userinput.zipcode, 
      lat: userinput.zipcode, 
      long: userinput.lastname, 
      phone: userinput.phone
    })
  }

  return(
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      overlayClassName='fixed top-0 bottom-0 left-0 right-0 bg-black/40'
      contentLabel="Example Modal"
      style={{
        content: {
          maxHeight: 'max-content'
        }
      }}
    >
      <form className='space-y-3' onSubmit={handleSubmitPost}>
        <section className='flex justify-between space-x-3'>
          <Input 
            type='text' 
            placeholder='First Name' 
            name='firstname' 
            onChange={handleInputUser} 
            value={userinput.firstname} 
          />
          <Input 
            type='text' 
            placeholder='Last Name' 
            name='lastname' 
            onChange={handleInputUser} 
            value={userinput.lastname}
          />
        </section>
        
        <Input 
          type='text' 
          placeholder='Username' 
          name='username' 
          onChange={handleInputUser} 
          value={userinput.username}
        />
        <Input 
          type='email' 
          placeholder='Email' 
          name='email' 
          onChange={handleInputUser} 
          value={userinput.email}
        />
        <Input 
          type='password' 
          placeholder='Password' 
          name='password'
          onChange={handleInputUser}  
          value={userinput.password}
        />

        <section className='grid grid-cols-2 justify-between gap-3'>
          <Input 
            type='text' 
            placeholder='City' 
            name='city' 
            onChange={handleInputUser} 
            value={userinput.city}
          />
          <Input 
            type='text' 
            placeholder='Street' 
            name='street' 
            onChange={handleInputUser} 
            value={userinput.street}
          />
          <Input 
            type='text' 
            placeholder='Number' 
            name='number' 
            onChange={handleInputUser} 
            value={userinput.number}
          />
          <Input 
            type='text'
            placeholder='Zip Code' 
            name='zipcode' 
            onChange={handleInputUser} 
            value={userinput.zipcode}
          />
          <Input 
            type='text' 
            placeholder='Lattitue' 
            name='lat' 
            onChange={handleInputUser} 
            value={userinput.lat}
          />
          <Input 
            type='text' 
            placeholder='Longitude' 
            name='long' 
            onChange={handleInputUser} 
            value={userinput.long}
          />
        </section>

        <Input type='number' 
          placeholder='Phone' 
          name='phone' 
          onChange={handleInputUser} 
          value={userinput.phone}
        />

        <Button>Add</Button>
      </form>
    </Modal>
  )
}

export default ModalAddUser;