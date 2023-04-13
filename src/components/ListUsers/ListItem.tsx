import React, { Dispatch, SetStateAction, SyntheticEvent } from 'react';
import { Link } from 'react-router-dom';
import deleteIcon from '../../icons/delete1.svg';
import editIcon from '../../icons/editIcon.svg';
import { UserType } from '../../types';

interface ListItemProps {
  user: UserType,
  setActiveUser: Dispatch<SetStateAction<number>>,
  handleDelete: (event: SyntheticEvent, id: number) => void,
  activeUser: number
}

const ListItem = ({user, setActiveUser, handleDelete, activeUser}: ListItemProps) => {
  return (
    <li className={`list_item ${activeUser === user.id ? 'list_item--active' : ''}`}>
        <Link to={`/${user.id}`} className="list_link" onClick={() => setActiveUser(user.id)}>
            {user.name}
        </Link>
        <Link className="list_btn" to={`/${user.id}/edit`} onClick={() => setActiveUser(user.id)}>
          <img className="list_btn-icon" src={editIcon} alt="idet icon" />
        </Link>
        <button className="list_btn" type="button" onClick={(event) => handleDelete(event, user.id)}>
          <img className="list_btn-icon" src={deleteIcon} alt="delete icon" />
        </button>
    </li>
  )
}

export default ListItem;