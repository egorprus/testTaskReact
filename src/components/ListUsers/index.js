import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ListItem from './ListItem';

const ListUsers = ({users, setUsers, setActiveUser}) => {
    const [searchInput, setSearchInput] = useState('');
    const [filteredList, setFilteredList] = useState(users);

    useEffect(() => {
        setFilteredList(users);
    }, [users]);

    useEffect(() => {
        const newUsersList = users.filter(user => user.name?.match(
            new RegExp(`(^${searchInput}| ${searchInput})`, "i")
        ))
        setFilteredList(newUsersList);
    }, [searchInput, users]);

    const handleSearch = (value) => {
        setSearchInput(value);
    };

    const handleDelete = (event, id) => {
        event.preventDefault();
        const newUsersList = users.filter(user => user.id !== id);
        setUsers(newUsersList)
    };

    return (
        <>
            <div className="controllers">
                <div className="controllers_item">
                    <input className="search" type="search" onChange={(e) => handleSearch(e.target.value)} placeholder="search" />
                </div>
                <div className="controllers_item">
                    <Link className="create-new-user_link" to='/new'>Create new</Link>
                </div>
            </div>
            {filteredList.length ?
                <ul className="list">
                        {filteredList.map(user => (
                            <ListItem key={user.id} user={user} setActiveUser={setActiveUser} handleDelete={handleDelete} />
                        ))
                        
                    }
                </ul>
                : <h3>no Users</h3>
            }
        </>
    )
};

export default ListUsers;