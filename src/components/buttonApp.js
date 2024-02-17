import "./App.css";
import "./components/grid";
import { React } from "react";
import MyButton from "./components/myButton";
import About from "./components/about";
import UserCards from "./components/userCards";
import users from "./data/userData";
import { useState } from "react";

function App() {

  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div>
      <About />
      <MyButton placeHolder="Button 1" count={count} onClick={handleClick}/>
      <MyButton placeHolder="Button 2" count={count} onClick={handleClick}/>
      <hr></hr>
      <UserCards users={users}></UserCards>
    </div>
  );
}

export default App;
