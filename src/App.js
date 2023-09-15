import "./App.css";
import Navbar from "./components/Navbar";
import { useState  } from "react";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
// import About from "./components/About";
function App() {
const [mode,setMode] = useState('light');
 const toggleMode=()=>{
  if (mode==='light'){
setMode('dark')
document.body.style.backgroundColor = 'black'
showAlert ("Dark mode has been enabled","Success");
  }
  else{
    setMode('light')
    document.body.style.backgroundColor = 'white'
    showAlert ("light  mode has been enabled","Success");
  }
 }
 const [alert, setAlert] = useState (null);
 const showAlert =(messages,type)=>{
  setAlert({
    msg:messages,
    type:type
 })
 setTimeout(()=>{
setAlert(null)
 },1500)
}
  return (
    <>
      <Navbar title="Textutils " Hometext= " Home " mode={mode} toggleMode={toggleMode}/>
      {/* <Navbar/> */}
      <Alert alert={alert}/>
      <div className="textform my-3">
        <Textform showAlert = {showAlert} id="box" heading = "Enter the text to analyse below" mode={mode}/>
      </div>
      <div>
        {/* <About/> */}
          
      </div>
    </>
  );
}
export default App;
