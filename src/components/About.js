import React from "react";
// import { useState } from "react";

function About(props) {
  const myStyle = {
    color:props.mode === 'dark'?'white':'black',
    backgroundColor:props.mode === 'dark'? 'black':'white'
  }
  // let backgroundcolor = () => {
  //   document.querySelector("body").style.backgroundColor = "black";
  //   document.querySelector("body").style.color = "white";
  // };
  // const [myStyle, setmyStyle] = useState({
  //   // border:'1px solid blue',
  //   // padding:'1rem',
  //   background: "white",
  //   color: "black",
  // });
  // const [btntext, setBtnText] = useState("Enable light Mode");
  // const toggleStyle = () => {
  //   if (myStyle.color === "white") {
  //     setmyStyle({
  //       color: "black",
  //       backgroundColor: "white",
  //       //  border:'1px solid black'
  //     });
  //     setBtnText("Enable Dark Mode");
  //   } else {
  //     setmyStyle({
  //       color: "white",
  //       backgroundColor: "black",
  //     });
  //     setBtnText("Enable Light Mode");
    // }
  // };
  return (
    <div className="container">
      <h1 style={myStyle} >About Us</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingOne">
            <button
              style={myStyle}
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Analyze Your text
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Textutils gives you a way to analyze your text quickly and
              efficiently. Be it word count, character count or
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingTwo">
            <button
              style={myStyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Free to use
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Textutils is a free character counter tool that provides instant
              character count & word count statistics for a given text.
              Textutils reports the number of words and characters. Thus it is
              suitable for writing text with word/ character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingThree">
            <button
              style={myStyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Browser Compatible
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              This word counter software works in any web browsers such as
              Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to
              count characters in facebook, blog, books, excel document, pdf
              document, essays, etc.
            </div>
          </div>
        </div>
      </div>
      {/* <div className="button">
        <button className="btn btn-dark my-3px" onClick={backgroundcolor}>Enable dark mode of background</button>
        <button className="btn btn-dark " onClick={toggleStyle}>{btntext} </button>
      </div> */}
    </div>
  );
}

export default About;
