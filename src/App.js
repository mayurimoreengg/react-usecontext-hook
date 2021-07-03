import React, { createContext, useState } from 'react';
import './style.css';
import Component1 from './components/Component1';

const User = createContext();
const Subject = createContext();

export default function App() {
  const [username, setUsername] = useState('Mayuri');
  const [clicks, setClicks] = useState(true);
  const [sub, setSub] = useState('Math');
  const handleChangeUser = () => {
    if (clicks === true) {
      setUsername('Nisha');
      setSub('Marathi');
    } else {
      setUsername('Mayuri');
      setSub('Maths');
    }
    setClicks(!clicks);
  };
  return (
    <div>
      <h1>
        Hello {username}!{' '}
        <button className="changeUserBtn" onClick={handleChangeUser}>
          Change User
        </button>
      </h1>
      <p>My favourite subject is {sub}</p>
      <User.Provider value={username}>
        <Subject.Provider value={sub}>
          <Component1 />
        </Subject.Provider>
      </User.Provider>
    </div>
  );
}

export { User, Subject };
