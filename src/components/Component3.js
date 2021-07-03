import React, { useContext } from 'react';
import { User, Subject } from '../App';

const Component3 = () => {
  const username = useContext(User);
  const sub = useContext(Subject);
  return (
    <div className="myComponent">
      <h1>Component3</h1>
      <p>Accessing prop from App component here.. Hi {username}</p>
      <p>My favourite subject is {sub}</p>
    </div>
  );
};

export default Component3;
