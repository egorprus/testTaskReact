import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import EditUserForm from './components/EditUserForm';
import EmptyContent from './components/EmptyContent/inde';
import ListUsers from './components/ListUsers';
import NewUserForm from './components/NewUserForm';
import PrivateCabinet from './components/PrivateCabinet';

function App() {
  const [users, setUsers] = useState([]);
  const [activeUser, setActiveUser] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => setUsers(users))
  }, [])

  return (
    <div className="App">
      <Router>
        <aside className="aside">
          <ListUsers users={users} setUsers={setUsers} setActiveUser={setActiveUser} />
        </aside>
        <Routes>
          <Route path='/:id' element={<PrivateCabinet user={users[activeUser - 1]} />} />
          <Route path='/:id/edit' element={<EditUserForm setUsers={setUsers} users={users} user={users[1]} />} />
          <Route path='/new' element={<NewUserForm setUsers={setUsers} users={users} />} />
          <Route path='/' element={<EmptyContent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
