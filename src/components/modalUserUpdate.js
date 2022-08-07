import React, { useCallback, useState } from 'react';
import Modal from 'react-modal/lib/components/Modal';
import { useModal } from '../context/modalContext';
import { useUser } from '../context/userContext';
import Button from './button';
import Input from './input';

function ModalUserUpdate(){
  const {modalIsOpenUserUpdate, closeModalUserUpdate} = useModal(false);
  const {detailUser: user, postDataUser} = useUser();
  const [email, setEmail] = useState(user && user.email);
  const [username, setUsername] = useState(user && user.username);
  const [password, setPassword] = useState(user && user.password);
  const [firstname, setFirstname] = useState(user && user.name.firstname);
  const [lastname, setLastName] = useState(user && user.name.lastname);
  const [city, setCity] = useState(user && user.address.city);
  const [street, setStreet] = useState(user && user.address.street);
  const [number, setNumber] = useState(user && user.address.number);
  const [zipcode, setZipCode] = useState(user && user.address.zipcode);
  const [lat, setLang] = useState(user && user.address.geolocation.lat);
  const [long, setLong] = useState(user && user.address.geolocation.long);
  const [phone, setPhone] = useState(user && user.phone);

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
    // Tidak dilanjutkan karena api nya error
  }

  return(
    <Modal
      isOpen={modalIsOpenUserUpdate}
      onRequestClose={closeModalUserUpdate}
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

export default ModalUserUpdate;