import React from 'react';
import './styles/usercard.css';

const userCard = ({user, deleteUser, setUpdate, setIsShow}) => {
    const handleDelete = () => {
        deleteUser('/users', user.id)
    };
    const handleEdit = () => {
        setUpdate(user);
        setIsShow(true)
    };
  return (
    <article className='usercard'>
        <h2 className='usercard_name'>{user.first_name} {user.last_name} #{user.id}</h2>
        <ul className='usercard_list'>
            <li className='usercard_item'><span>Email: </span><span>{user.email}</span></li>
            <li className='usercard_item'><span>Birthday: </span><span>{user.birthday}</span></li>
        </ul>
        <div>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={handleEdit}>Edit</button>
        </div>
    </article>
  )
}

export default userCard;