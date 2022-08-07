import React from 'react';
import { Link } from 'react-router-dom';

function User({user}){
  return(
    <div className='w-full mt-4'>
      <ul className='divide-y  divide-solid'>
        {user.map(item => (
          <li key={item.id} className='w-full mt-3 pt-3 grid grid-cols-2 justify-start'>
            <div>
              <span>{item.id}. &nbsp;</span>
              <Link to={item.username} className='text-blue-500'>
                {item.username}
              </Link>
            </div>
            <div className='flex justify-end space-x-2'>
              <button className='px-3 py-2 text-white bg-yellow-500 text-sm'>Update</button>
              <button className='px-3 py-2 text-white bg-red-500 text-sm'>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default User;