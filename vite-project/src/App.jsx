import { useState } from "react";
import Sidebar from "./component/Sidebar";

const App = () => {
 /*  //state
  const [age, setAge] = useState(33)
  //variable
  let name ="darryl";

  const changeName = () => {
    console.log("name", name);
    name = "dimas";
  };

  const changeAge = () => {
    setAge(40);
  };

  console.log("name", name);

  return (
    <div>
      <h1>{name}</h1>
      <button onClick={changeName}>ganti nama</button>
      <h1>{age}</h1>
      <button onClick={changeAge}>tambah umur</button>
    </div>
  )*/
  /*const [age, setAge] = useState(0);
  
  let thisYear = new Date().getFullYear();
  let bornYear = 1999;

  const calculateAge = () => {
    let age = thisYear - bornYear;
    setAge(age);
  };

  return (
    <div>
      <h1>{age}</h1>
      {}
      <button onClick={calculateAge}>calculate my age</button>
    </div>
  );*/

  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div>
      {!showSidebar && (
        <button
          style={{ transform: "rotate(90deg)", marginBottom: "40px" }}
          onClick={toggleSidebar}
        >
          |||
        </button>
      )}

      <div>
        {showSidebar && <Sidebar onClose={toggleSidebar} />}
      </div>
      {/* tanpa file sidebar.jsx{showSidebar && (
        <div>
          <button onClick={toggleSidebar}>X</button>
          <p>Home</p>
          <p>About</p>
          <p>Contact</p>
        </div>
      )} */}
    </div>
  );
};

export default App;
