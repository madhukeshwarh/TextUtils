import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("button clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Coverted to Uppercase", "success");
  };
  const handleLowClick = () => {
    // console.log("button clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Coverted to Lowercase", "success");
  };
  const handleClearClick = () => {
    // console.log("button clicked");
    let newText = "";
    let newSummary = "";
    setText(newText);
    setSummary(newSummary);
    props.showAlert("Data Cleared", "success");
  };
  const handleCopyClick = () => {
    let box = document.getElementById("myBox");
    box.select();
    navigator.clipboard.writeText(box.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to ClipBoard", "success");
  };
  const handleSumClick = () => {
    // console.log("button clicked");
    let newSummary = `Text have ${text.length} characters and ${
      text.split(/\s+/).filter(Boolean).length
    } words and ${0.008 * text.split(" ").length} Minutes Read`;
    setSummary(newSummary);
    props.showAlert("Summary fetched", "success");
  };
  const handleOnChange = (event) => {
    // console.log("onchange");
    setText(event.target.value);
  };
  const removeExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra space removed", "success");
  };
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1 className="my-4">{props.heading}</h1>
        <div className="mb-3 mt-3">
          <textarea
            className="form-control"
            id="myBox"
            rows={8}
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#042743" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          />
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleUpClick}
        >
          Covert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleLowClick}
        >
          Covert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleSumClick}
        >
          Summary
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleCopyClick}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={removeExtraSpace}
        >
          Remove Extra Space
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your Text Summary</h2>
        <p>{summary}</p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "enter the text to preview it.."}</p>
      </div>
    </>
  );
}
