import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import './App.css';
import { EditUserForm } from './components/EditUserForm/EditUserForm';
import { EmptyContent } from './components/EmptyContent/EmptyContent';
import { ListUsers } from './components/ListUsers/ListUsers';
import { NewUserForm } from './components/NewUserForm';
import { PrivateCabinet}  from './components/PrivateCabinet/PrivateCabinet';
import { UserType } from './types';

export function App() {
  const [users, setUsers] = useState<UserType[]>([]);
  const [activeUser, setActiveUser] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => setUsers(users))
      .catch(err => err)
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className="App">
      <Router>
        <aside className="aside">
          <ListUsers users={users} activeUser={activeUser} setUsers={setUsers} setActiveUser={setActiveUser} loading={loading} />
        </aside>
        <Routes>
          <Route path='/:id' element={<PrivateCabinet user={users[activeUser - 1]} />} />
          <Route path='/:id/edit' element={<EditUserForm setUsers={setUsers} users={users} user={users[activeUser - 1]} />} />
          <Route path='/new' element={<NewUserForm setUsers={setUsers} users={users} />} />
          <Route path='/' element={<EmptyContent />} />
        </Routes>
      </Router>
    </div>
  );
}