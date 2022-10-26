import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react'
import Alert from './components/Alert';
// import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  // Link,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");//whether dark mode is enabled or not
  const [alert, setAlert] = useState(null)

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode = ()=>{
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark Mode Enabled","success");
      document.title = "TextUtils - DarkMode";
      // setInterval(() => {
      //   document.title = "Install TextUtils Now";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Virus";
      // }, 1500);
    }else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled","success");
      document.title = "TextUtils - Home";
    }

  }

  return (
    <>
    <Router>
    <Navbar title = "TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
      <Routes>
        {/* //React always do partial mapping ex:
        /users  --->  component1
        /users/about ---->  component2,here when we try to go to users/about then it might go to /users as React do partially mapping
        so its always better to write "exact" keyword;
        */}
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/" element = {<TextForm showAlert={showAlert} heading = "Enter the Text Heading" mode={mode}/>}/>
      </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
