import React from 'react';
import { Link } from 'react-router-dom';

const ListItem = ({user, setActiveUser, handleDelete}) => {
  return (
    <li className="list_item">
        <Link to={`/${user.id}`} className="list_link" onClick={() => setActiveUser(user.id)}>
            {user.name}
        </Link>
        <button className="list_btn" type="button" onClick={(event) => handleDelete(event, user.id)}>delete</button>
        <Link className="list_edit" to={`/${user.id}/edit`}>edit</Link>
    </li>
  )
}

export default ListItem;