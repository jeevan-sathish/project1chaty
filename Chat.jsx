import React, { useState, useEffect } from 'react';
import './App.css';

const responses = {
    "your name": "I'm Jeevan",
    age: "I'm 21",
    "fathers name": " my fathers name is Sathish",
    "education qualification":"BE CSE",
    "know me more":"im jeevan basically im a web developer as a begineer ,extending my knowledge by small projects using web tools more on react,my age is 21 studying BE in computer science ,im from hassan karnataka",
    "hobbies":"listening musics,singing,drawing ,painting,cooking,content writing etc",
    "family members":"father:sathish, mother:akkamahadevi T R, YoungerBrother:prajwal,",
    "contact":"7892652247 this is my phone number as well as whats app no, email:sathishjeevan2004@gmail.com",
    "address":"#484 10th cross hinkal mysuru",
    "color":"my favourite color is black and white",
    "food":"all tym fav is biriyani",
    "movies":"KGF,bhageera,Good Night,banglore Daays etc "
  };
  
const Chat = () => {
  const [isTyping, setIsTyping] = useState(false);
  
  const handleKeyDown = (e) => {
    setIsTyping(true);
    if(e.key==="Enter"){
        createBox();
    }
  };

  const handleKeyUp = () => {
    setIsTyping(false);
  };

  useEffect(() => {
    const txtElement = document.getElementById('txt');
    if (txtElement) {
      txtElement.style.color = isTyping ? "green" : "";
      txtElement.innerHTML = isTyping ? 'You 🔥 Firing...' : '';
    }
  }, [isTyping]);

  const toggleTyping = (show) => {
    const typElement = document.getElementById("typing");
    if (typElement) {
      typElement.innerText = show ? "Typing..." : "";
    }
  };

  const createBox = () => {
    const inputElement = document.getElementById('inpt');
    const val = inputElement.value.toLowerCase();
    if (val) {
      const cont = document.getElementsByClassName('chat_box')[0];
      const userBox = document.createElement('div');
      userBox.className = 'box';
      userBox.style.alignSelf = 'flex-end';
      userBox.innerText = val;
      cont.appendChild(userBox);
      
      inputElement.value = '';
      
      toggleTyping(true);
      
      setTimeout(() => {
        let found = false;
        for (const key in responses) {
          if (val.includes(key)) {
            const responseBox = document.createElement('div');
            responseBox.className = 'box';
            
            responseBox.innerText = responses[key];
            responseBox.style.alignSelf = 'flex-start';
            cont.appendChild(responseBox);
            found = true;
            break;
          }
        }
        if (!found) {
          const responseBox = document.createElement('div');
          responseBox.className = 'box';
          responseBox.innerText = "Sorry, I didn't get it";
          responseBox.style.alignSelf = 'flex-start';
          responseBox.style.backgroundColor = "red";
          cont.appendChild(responseBox);
        }
        toggleTyping(false);
      }, 2000);
    }
  };

  const clear = () => {
    const cont = document.getElementsByClassName("chat_box")[0];
    while (cont.firstChild) {
      cont.removeChild(cont.firstChild);
    }
  };
  setInterval(() => {
    const tup = document.getElementById('timing');
    const time = new Date();
    const hour = time.getHours();
  
    let greeting;
    if (hour >= 5 && hour < 12) {
      greeting = 'Good Morning 🌄';
    } else if (hour >= 12 && hour < 17) {
      greeting = 'Good Afternoon ';
    } else if (hour >= 17 && hour < 21) {
      greeting = 'Good Evening ';
    } else {
      greeting = 'Good Night ';
    }
  
    if (tup) {
      tup.innerText = greeting;
    }
  }, 1000);
  function apend(){
    document.getElementById('inpt').value="know me more";
  }
  window.onload =function(){
    document.getElementById('inpt').focus();
  }

  return (
    <div className='chat_cont'>
      <nav className='nav'>
        <div className='profile'>
          <span className='span'>
            <div className='dp'></div>
            <h2 style={{ fontFamily: "cursive" }}>Jeevan S</h2>
          </span>
          <p id="typing"></p>
        </div>
        <div style={{
          width: "40%",
          height: "100%",
          backgroundColor: "transparent",
          justifyContent: "center",
          alignItems: "center",
          display: "flex"
        }}>
          <h6 id='txt'></h6>
        </div>
      </nav>
      <div className='chat_box'>
        <div className='message'>
            <p id='timing' style={{color:"salmon",fontWeight:"bolder"}}></p>
            <button className='know_btn' onClick={apend}>Know me more</button>
        </div>
      </div>
      <div className='search_bar'>
        <div className='search_wrap'>
          <input
            type='text'
            id='inpt'
            onKeyDown={handleKeyDown}
            onKeyUp={handleKeyUp}
            
            placeholder='Ask me the question'
          />
          <button className='sub_btn' onClick={createBox}>↑</button>
          <button className='clear_btn' onClick={clear}>🧹</button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
