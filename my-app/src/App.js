//import logo from './logo.svg';
//import './App.css';
import React from 'react';
import FunctionalComponent from "./Components/FunctionalComponent";
import { ClassComp1 }from "./Components/ClassComp";
import Click from "./Components/Click" ;
import Counter from "./Components/Counter";

function App() {
  return (
    <div>
   <h1> Hello Tieirra Marie</h1>
   <h1>Im the realest!</h1>
   <FunctionalComponent/>
    {/* <ClassComp/> */}
   <ClassComp1/>
   <Click/>
   <Counter/>
   </div>
   

  );
}

export default App;
