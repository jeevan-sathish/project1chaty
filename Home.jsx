import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';



const Home = () => {
  return (
    <>
      <div className="container">
        <span>
          <h1 className="title">
            Welcome to the <span style={{ color: 'saddlebrown' }}>ChatPholio</span>
          </h1>
          <p
            style={{
              padding: '0 30px 0 30px',
              fontSize: '10px',
            }}
          >
            Interact and analyze my resume and personal info through digital chatting
          </p>
        </span>
        <Link to="/chat">
          <button className="btn">Let's Drive</button>
        </Link>
      </div>
      <div className="footer">
        <p>Copyright 2025 ChatPholio All reserved</p>
        <a href="mailto:sathishjeevan2004@gmail.com">Send me an email @sathishjeevan2004@gmail.com</a>
      </div>
    </>
  );
};

export default Home;
