import React,{useState} from 'react'


export default function TextForm(props) {
  const [text , setText] = useState("");

  const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted To UpperCase","success");
  }

  const handleExtraSpace = ()=> {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }

  const handleCopy = ()=>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const handleLowClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted To LowerCase","success");
  }
  const handleClearClick = ()=>{
    let newText = '';
    setText(newText);
  }
  const handleCapitaliseClick = ()=>{
    const arr = text.split(" ");
    for (var i = 0; i < arr.length; i++)
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    let newText = arr.join(" ");

    setText(newText);
  }

  const handleOnChange = (event)=>{
    setText(event.target.value)
  }

  return (
      <>
      <div className='container'>
          <h1>{props.heading}</h1>
          <div className="mb-3">
          <textarea className="form-control" id="myBox" onChange={handleOnChange} value ={text} rows="8"></textarea>
          </div>
          <button className="btn btn-primary mx-1" onClick={handleUpClick}>ConvetToUpperCase</button>
          <button className="btn btn-primary mx-1" onClick={handleLowClick}>ConvetToLowerCase</button>
          <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear</button>
          <button className="btn btn-primary mx-1" onClick={handleCapitaliseClick}>Capitalise</button>
          <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy</button>
          <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>RemoveExtaSpace</button>
      </div>
      <div className="container my-3">
          <h2>My Text Summary</h2>
          <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
          <p>{0.008*text.split(" ").length} Minutes read</p>
          <h2>Preview</h2>
          <p>{text}</p>
      </div>
      </>
  )
}
