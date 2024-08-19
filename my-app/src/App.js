//import logo from './logo.svg';
//import './App.css';
import React from 'react';
import FunctionalComponent from "./Components/FunctionalComponent";
import { ClassComp1 }from "./Components/ClassComp";
import Click from "./Components/Click" ;

function App() {
  return (
    <div>
   <h1> Hello Tieirra Single</h1>
   <h1>Im the realest!</h1>
   <FunctionalComponent/>
    {/* <ClassComp/> */}
   <ClassComp1/>
   <Click/>
   </div>
   

  );
}

export default App;
