import "./App.css";
import Navbar from "./components/Navbar";
import { useState  } from "react";
import Textform from "./components/Textform";
// import About from "./components/About";
function App() {
const [mode,setMode] = useState('light');
 const toggleMode=()=>{
  if (mode==='light'){
setMode('dark')
document.body.style.backgroundColor = 'black'
  }
  else{
    setMode('light')
    document.body.style.backgroundColor = 'white'
  }
 }
  return (
    <>
      <Navbar title="Textutils " Hometext= " Home " mode={mode} toggleMode={toggleMode}/>
      {/* <Navbar/> */}
      <div className="textform my-3">
        <Textform id="box" heading = "Enter the text to analyse below" mode={mode}/>
      </div>
      <div>
        {/* <About/> */}
          
      </div>
    </>
  );
}
export default App;
