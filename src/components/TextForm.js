import React,{useState} from 'react'


export default function TextForm(props) {
  const [text , setText] = useState("Enter Your Text Here");

  const handleUpClick = ()=>{
    // console.log("here uppper case is pressed"+text);
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleOnChange = (event)=>{
    // console.log("Onchange is pressed");
    setText(event.target.value)
  }

  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
      <textarea className="form-control" id="myBox" onChange={handleOnChange} value ={text} rows="8"></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>ConvetToUpperCase</button>
    </div>
  )
}
