import React,{useState} from 'react';



export default function TextForm(props) {
    const handleUpClick =()=>{
        // console.log("UpperCase was clicked"+text);
        // setText("my name saurabh singh");
        let newText= text.toUpperCase();
        setText(newText);
    }
    const handleLoClick =()=>{
      
        let newText= text.toLowerCase();
        setText(newText);
    }
     const handleClearClick =()=>{
      
        let newText= '';
        setText(newText);
    }
     const handleOnChange =(event)=>{
        // console.log("on change");
        setText(event.target.value);
    }
    
    const [text,setText]=useState('');
    // text ="new text"
    // setText("new text");
  return (
    <>
    <div className="container">
   <h2>{props.heading}</h2>
    <div class="mb-3">
    {/* <label for="myBox" class="form-label">  {props.heading}</label> */}
    <textarea class="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
    </div>
        <button className="btn-primary mx-1"onClick={handleUpClick}>convert to Uppercase</button>
        <button className="btn-primary mx-1"onClick={handleLoClick}>convert to LowerCase</button>
        <button className="btn-primary mx-1"onClick={handleClearClick}>clear</button>
    </div>
    <div className="container my-3">
        <h2>your text summary </h2>
        <b><p>{text.split("").length} words and  {text.length} charecters</p>
        <p>{0.008*text.split("").length} minnutes</p></b>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
