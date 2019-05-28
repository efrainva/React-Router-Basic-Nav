import React from 'react';
import { Link } from 'react-router-dom';
const Navigation = (props) => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <div>
          <a href="/">Home</a>
            <Link exact to="/">
              Home
            </Link>
        </div>
        <div>
          <a href="/about">About</a>
        </div>
        <div>
          <a href="contact">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
