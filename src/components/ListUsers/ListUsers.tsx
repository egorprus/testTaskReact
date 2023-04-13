import React, { Dispatch, SetStateAction, SyntheticEvent, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ListItem from './ListItem';
import plusIcon from '../../icons/plusIcon.svg';
import { UserType } from '../../types';

interface ListUsersProps {
    users: UserType[],
    setUsers: Dispatch<SetStateAction<UserType[]>>,
    setActiveUser: Dispatch<SetStateAction<number>>,
    activeUser: number,
    loading: boolean
}

export const ListUsers = ({users, setUsers, setActiveUser, activeUser, loading}: ListUsersProps) => {
    const [searchInput, setSearchInput] = useState<String>('');
    const [filteredList, setFilteredList] = useState<UserType[]>(users);
    const navigate = useNavigate();

    useEffect(() => {
        setFilteredList(users);
    }, [users]);

    useEffect(() => {
        const newUsersList = users.filter(user => user.name?.match(
            new RegExp(`(^${searchInput}| ${searchInput})`, "i")
        ))
        setFilteredList(newUsersList);
    }, [searchInput, users]);

    const handleSearch = (value: string) => {
        setSearchInput(value);
    };

    const handleDelete = (event: SyntheticEvent, id: number) => {
        event.preventDefault();

        const newUsersList = users.filter(user => user.id !== id);
        
        setUsers(newUsersList);

        if (id === activeUser) {
            setActiveUser(0);
            navigate('/');
        }
    };

    return (
        <>
            <div className="controllers">
                <div className="controllers_item">
                    <input className="search" type="search" onChange={(e) => handleSearch(e.target.value)} placeholder="search" />
                </div>
            </div>
            
            <ul className="list">
                <li className="list_item add-new-user_link">
                    <Link to={`/new`} className="list_link" onClick={() => setActiveUser(0)}>
                        Add new
                        <img src={plusIcon} alt="plus icon" />
                    </Link>
                </li>
                {loading ? <span>Loading...</span>
                    : filteredList.length ?
                        filteredList.map(user => (
                            <ListItem key={user.id} activeUser={activeUser} user={user} setActiveUser={setActiveUser} handleDelete={handleDelete} />
                        ))
                        : <li className="list_item disable-hover list_item-empty">no Users</li>
                }
            </ul>
        </>
    )
};