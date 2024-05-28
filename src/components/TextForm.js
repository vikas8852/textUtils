import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log("UpperCase was Clicked"+ text);
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleLoClick=()=>{
        console.log("LowerCase was Clicked"+ text);
        let newText=text.toLowerCase();
       //  newText.style.color='red';
        setText(newText);
    }
    const Clear=()=>{
        console.log("UpperCase was Clicked"+ text);
        let newText=" ";
        setText(newText);
    }
    const RemoveSpace=()=>{
        console.log("RemoveSpace"+ text);
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const handleOnChange=(event)=>{
        console.log("OnChange");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    //text="new text";
    //setText("new text");  //Correct way to change the state
  return (
  <>
  <div className="container" style={{backgroundColor: props.mode==='dark'?'white':'black'}}></div>
  <h1 style={{color:props.mode==='dark'?'white':'black'}}>{props.heading}</h1>
   
 <div className="mb-3">
 
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black' }} id="exampleFormControlTextarea1" rows="3"></textarea>
 </div>
 <button disabled={text.length===0} className="btn btn-primary" onClick={handleUpClick}>Convert to Upper case</button>
 <button  disabled={text.length===0} className="btn btn-primary mx-3 my-3"  onClick={handleLoClick}>Convert to Lower case</button>
 <button  disabled={text.length===0} className="btn btn-primary mx-3 my-3"  onClick={Clear}>Clear All text</button>
 <button  disabled={text.length===0} className="btn btn-primary mx-3 my-3"  onClick={RemoveSpace}>Remove wide Space</button>
 <div className="container" style={{color:props.mode==='dark'?'white':'black'}} >
    <h1>Your text sumary</h1>
    <p>{text.split(' ').filter((element)=>{return element.length!=0}).length} words and {text.length} character</p>
 </div>
 </>

  )
}
 