import "./App.css";
import Navbar from "./components/Navbar";
// import Textform from "./components/Textform";
import About from "./components/About";
function App() {

  return (
    <>
      <Navbar title="textutils1 " Hometext="Home " />
      {/* <Navbar/> */}
      <div className="textform my-3">
        {/* <Textform id="box" heading = "Enter the text to analyse below"/> */}
      </div>
      <div>
        <About/>
          
      </div>
    </>
  );
}
export default App;
