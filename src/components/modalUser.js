import React from 'react';
import Modal from 'react-modal/lib/components/Modal';
import { useModal } from '../context/modalContext';
import Button from './button';
import Input from './input';

function ModalAddUser(){
  const {modalIsOpen, closeModal} = useModal(false);

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
      <form className='space-y-3'>
        <section className='flex justify-between space-x-3'>
          <Input type='text' placeholder='First Name' name='firstname' />
          <Input type='text' placeholder='Last Name' name='lastname' />
        </section>
        <Input type='text' placeholder='Username' name='username' />
        <Input type='email' placeholder='Email' name='email' />
        <Input type='password' placeholder='Password' name='password' />
        <section className='grid grid-cols-2 justify-between gap-3'>
          <Input type='text' placeholder='City' name='city' />
          <Input type='text' placeholder='Street' name='street' />
          <Input type='text' placeholder='Number' name='numberHome' />
          <Input type='text' placeholder='Zip Code' name='zipcode' />
          <Input type='text' placeholder='Lattitue' name='latitude' />
          <Input type='text' placeholder='Longitude' name='longitude' />
        </section>
        <Input type='number' placeholder='Phone' name='phone' />
        <Button>Add</Button>
      </form>
    </Modal>
  )
}

export default ModalAddUser;