import React, {useState}  from 'react'

export default function Textform(props) {
    const handleUpClick = () => {
        console.log("Uppercase was clicked " ,text)
        let newtext = text.toUpperCase();
        setText(newtext)
    }
    const handleonChange = (event) => {
console.log("handleonChange")
setText(event.target.value)
    }
    const [text, setText] = useState("Enter text Here")
    // text = "enter the text"; // wrong wauy to change the state
    // setText("Enter your opinion here");// correct way to change the state
return (
  <div>
    <h1>{props.heading}</h1>
  <div className="mb-3">
   
    <textarea className="form-control" onChange={handleonChange} value={text} id="boxform" rows="8"></textarea>
    <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
  </div>
  </div>
  )
}
