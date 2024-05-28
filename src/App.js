import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React,{ useState } from 'react';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";



let name="Vikas";
function App() {
  const [mode, setMode] = useState('light');//wheather dark mode is enable or not
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
    
  }

  return (
    <>
   
   
 
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}>
 

</Navbar>

<div className="container my-3"> 

     
  <TextForm heading="Enter the text to analyze" mode={mode}></TextForm>
 {/* <About></About>  */}
</div>
 
    </>
  );
}

export default App;
