import React, { useCallback, useState } from 'react';
import Modal from 'react-modal/lib/components/Modal';
import { useModal } from '../context/modalContext';
import { useUser } from '../context/userContext';
import Button from './button';
import Input from './input';

function ModalAddUser(){
  const {modalIsOpen, closeModal} = useModal(false);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastName] = useState('');
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [zipcode, setZipCode] = useState('');
  const [lat, setLang] = useState('');
  const [long, setLong] = useState('');
  const [phone, setPhone] = useState('');
  const { postDataUser } = useUser();

  const handleInputUser = useCallback((e) => {
    const name = e.target.name;
    const value = e.target.value;

    if(name == 'email') setEmail(value);
    if(name == 'username') setUsername(value);
    if(name == 'password') setPassword(value);
    if(name == 'firstname') setFirstname(value);
    if(name == 'lastname') setLastName(value);
    if(name == 'city') setCity(value);
    if(name == 'street') setStreet(value);
    if(name == 'number') setNumber(value);
    if(name == 'zipcode') setZipCode(value);
    if(name == 'lat') setLang(value);
    if(name == 'long') setLong(value);
    if(name == 'phone') setPhone(value);
  })

  const handleSubmitPost = (e) => {
    e.preventDefault();
    postDataUser({
      url: "https://fakestoreapi.com/users",
      email, 
      username, 
      password, 
      firstname, 
      lastname, 
      city, 
      street, 
      number, 
      zipcode, 
      lat, 
      long, 
      phone
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
            value={firstname} 
          />
          <Input 
            type='text' 
            placeholder='Last Name' 
            name='lastname' 
            onChange={handleInputUser} 
            value={lastname}
          />
        </section>
        
        <Input 
          type='text' 
          placeholder='Username' 
          name='username' 
          onChange={handleInputUser} 
          value={username}
        />
        <Input 
          type='email' 
          placeholder='Email' 
          name='email' 
          onChange={handleInputUser} 
          value={email}
        />
        <Input 
          type='password' 
          placeholder='Password' 
          name='password'
          onChange={handleInputUser}  
          value={password}
        />

        <section className='grid grid-cols-2 justify-between gap-3'>
          <Input 
            type='text' 
            placeholder='City' 
            name='city' 
            onChange={handleInputUser} 
            value={city}
          />
          <Input 
            type='text' 
            placeholder='Street' 
            name='street' 
            onChange={handleInputUser} 
            value={street}
          />
          <Input 
            type='text' 
            placeholder='Number' 
            name='number' 
            onChange={handleInputUser} 
            value={number}
          />
          <Input 
            type='text'
            placeholder='Zip Code' 
            name='zipcode' 
            onChange={handleInputUser} 
            value={zipcode}
          />
          <Input 
            type='text' 
            placeholder='Lattitue' 
            name='lat' 
            onChange={handleInputUser} 
            value={lat}
          />
          <Input 
            type='text' 
            placeholder='Longitude' 
            name='long' 
            onChange={handleInputUser} 
            value={long}
          />
        </section>

        <Input type='number' 
          placeholder='Phone' 
          name='phone' 
          onChange={handleInputUser} 
          value={phone}
        />

        <Button>Add</Button>
      </form>
    </Modal>
  )
}

export default ModalAddUser;