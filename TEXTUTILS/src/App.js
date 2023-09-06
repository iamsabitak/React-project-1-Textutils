import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
function App() {
  return (
    <>
      <Navbar title="textutils1 " Hometext="Home " />
      {/* <Navbar/> */}

      <div className="textform my-3">


      <Textform heading = "Enter the text to analyse below"/>
        </div>
    </>
  );
}
export default App;
