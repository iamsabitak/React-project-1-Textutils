import React, {useState}  from 'react'
import './Textform.css'
export default function Textform(props) {
    const handleUpClick = () => {
        console.log("Uppercase was clicked " ,text)
        let newtext = text.toUpperCase();
        setText(newtext)
    }
    const handleloClick = () => {
      console.log("Lowercase was clicked " ,text)
      let newtext = text.toLowerCase();
      setText(newtext)
  }
  const handleclearClick = () => {
    let newtext = " "
    setText(newtext)
  }
    const handleonChange = (event) => {
console.log("handleonChange")
setText(event.target.value)
    }
    const [text, setText] = useState(" ")
    // text = "enter the text"; // wrong way to change the state
    // setText("Enter your opinion here");// correct way to change the state
return (
  <>
  <div>
    <h1>{props.heading}</h1>
  <div className="mb-3">
   
    <textarea className="form-control" onChange={handleonChange} value={text} id="boxform" rows="8"></textarea>
    <button className="btn btn-warning mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
    <button className="btn btn-warning" onClick={handleloClick}>Convert to LowerCase</button>
    <button className="btn btn-warning" onClick={handleclearClick}>Clear text</button>
  </div>
  </div>
  <div className="container my-4">
    <h1>The Summary is Here</h1>
    <p> {text.split(" ").length} words and {text.length} charachters</p>
    <p>{0.008 * text.split (" ").length} Minutes read</p>
    <h2>Preview</h2>
    <p> {text} </p>
  </div>
  </>
  )
}
