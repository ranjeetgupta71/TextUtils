import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react'
import Alert from './components/Alert';

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
      setInterval(() => {
        document.title = "Install TextUtils Now";
      }, 2000);
      setInterval(() => {
        document.title = "Virus";
      }, 1500);
    }else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled","success");
      document.title = "TextUtils - Home";
    }

  }

  return (
    <>
    <Navbar title = "TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <TextForm showAlert={showAlert} heading = "Enter the Text Heading" mode={mode}/>
    {/* <About/> */}

    </div>
    </>
  );
}

export default App;
