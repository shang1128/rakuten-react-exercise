import "./styles.css";
import User from './components/user/User';
import Navbar from './components/navbar/Navbar';
import {BrowserRouter as Router, Route} from 'react-router-dom';


import { useState } from 'react';

const App = () => {
  const [ state, setState ] = useState({
    userA: {
      firstName: "Shinya",
      avatarUrl: "https://www.rakuten-sec.co.jp/web/shared/images/og-image.gif",
      bootcamp: 'Rakuten'
    },
    userB: {
      firstName: "Hayato",
      avatarUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Rakuten_Global_Brand_Logo.svg/440px-Rakuten_Global_Brand_Logo.svg.png",
      bootcamp: 'Rakuten'
    },
    clickCount: 0,
    backColor: 'yellow',
    bootcamp: 'Rakuten Shoken'
  })

  const colorMapper = () => {
    const hexColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return hexColor;
  };

  const clickHandler = () => {
    
    if (state.clickCount % 5 === 4) {
      setState({
        ...state,
        backColor: colorMapper(),
        clickCount : state.clickCount + 1
      })
    }
    else {
      setState({
        ...state, 
        clickCount : state.clickCount + 1 
      });
    }
  };

    return (
      <div className="App">
        <Navbar></Navbar>
        <h1>React - state</h1>
        <p>Count is: {state.clickCount}</p>
        <button onClick={clickHandler}> Click me </button>
        <User
          theColor={state.backColor}
          firstName={state.userA.firstName}
          image={state.userA.avatarUrl}
          bootcampName={state.userA.bootcamp}
           />
        <User 
          firstName={state.userB.firstName}
          image={state.userB.avatarUrl}
          bootcampName={state.userB.bootcamp}
           />
      </div>
    );
}
export default App;
