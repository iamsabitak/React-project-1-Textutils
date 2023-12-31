import "./App.css";
import Navbar from "./components/Navbar";
import { useState  } from "react";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
import About from "./components/About";
import { BrowserRouter as Router , Route ,Switch} from "react-router-dom";

function App() {
  const removeBodyClasses=()=> {
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
  }
const [mode,setMode] = useState('light');
 const toggleMode=(cls)=>{
  console.log(cls);
  removeBodyClasses()
  document.body.classList.add('bg-'+cls)
  
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
    <Router>
      <Navbar title="Textutils " Hometext= " Home " mode={mode} toggleMode={toggleMode}/>
      {/* <Navbar/> */}
      <Alert alert={alert}/>
      <div className="textform my-3">
      <Switch>
<Route exact path="/about">
  <About mode={mode} />
</Route>
<Route exact path="/">
   <Textform showAlert = {showAlert} id="box" heading = "Enter the text to analyse below" mode={mode}/>
</Route>
</Switch>
</div>  
</Router>

      
    </>
  );
}
export default App;
