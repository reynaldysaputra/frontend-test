import React, { useEffect, useState } from 'react';
import DocumentTitle from 'react-document-title';
import { IoMdAddCircle } from 'react-icons/io';
import Modal from 'react-modal/lib/components/Modal';
import Button from '../components/button';
import User from '../components/userComponent';
import { useModal } from '../context/modalContext';
import { useUser } from '../context/userContext';

function UserPage(){
  const {openModal} = useModal();
  const {user, getUser} = useUser();

  useEffect(() => {
    getUser("https://fakestoreapi.com/users");
  }, [])

  return(
    <DocumentTitle title='User'>
      <>
        <div className='w-full h-[90vh]'>
          <section className='w-full flex justify-start border-2 border-t-0 border-l-0 border-r-0 mt-20 pb-4'>
            <Button className='flex justify-center items-center w-40' onClick={openModal}>
              Add User <IoMdAddCircle fontSize='24' className='ml-1' />
            </Button>
          </section>
          <User user={user} />
        </div>
      </>
    </DocumentTitle>
  )
}

export default UserPage;