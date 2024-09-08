import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLowClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        // let newText = text.trim();
        setText(newText)
    }
    const clearClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = "";
        setText(newText)
    }
    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value);
    }
    const handleCopy =() =>{
        console.log("I am  copy");
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value)
    }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    
    const [text , setText] = useState('');
  return (
    // lang="ar", dir="rtl"
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading} </h1>
        <div className="mb-10">
        <label htmlFor="myBox" className="form-label">only english:</label>
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows={8}></textarea>
        <button className="btn btn-primary mx-2 my-3" onClick={handleUpClick}>Convert to upercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Clear Extra Spaces</button>
        <button className="btn btn-primary mx-2" onClick={clearClick}>Clear Text</button>
        </div>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Your text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in textbox above to preview it here"}</p>
    </div>
    </>
  )
}
