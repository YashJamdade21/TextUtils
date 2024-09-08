// import logo from './logo.svg';
import './App.css';
import About1 from './Components/About1';

import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React,{useState} from 'react';


// let name = "Yash";
function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
    }
  }
  return (
    <>
    <html lang="ar" dir="ltr"></html>
  {/* <Navbar title="TextUtils1" aboutText="About_Textutils"/> */}
  <Navbar title="TextUtils1" mode={mode} toggleMode={toggleMode}/>
  <div className="container my-3">
   <TextForm heading="Enter your text here:"my-3  mode={mode}/>
  </div>
  <div>
 <About1/>
  </div>
    </>
  );
}

export default App;
