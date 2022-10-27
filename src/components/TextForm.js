import React ,{useState} from 'react';

export default function TextForm(props) {
    const [text,setText]=useState("");

    const handleOnChange=(event)=>{
        setText(event.target.value)
    };
    let mystyle={
        color:props.mode==='dark'?'black':'black',
        backgroundColor:props.mode==='dark'?'darkgrey':'white'
      }
    const handleUpclick=()=>{
        let newtext=text.toUpperCase()
        setText(newtext)
    };
    const handleloclick=()=>{
        let newtext=text.toLowerCase()
        setText(newtext)
    };
  return (
    <>
    
    <div>
        <div className="mb-3">
            <h1>Text area</h1>
            <textarea style={mystyle} className="form-control" placeholder='Enter the text here..' id="mybox" rows="6"  value={text} onChange={handleOnChange}></textarea>
            <button disabled={text.length===0}className="btn btn-primary" onClick={handleUpclick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleloclick}>Convert to lowercase</button>
        </div>
        <div className="container my-3">
            <h1>Your text summary</h1>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words and {text.length} Character</p>
            <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read</p>
        </div>
    
    </div>
    </>
   
  )
}
