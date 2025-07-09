import React, {useState} from 'react'
 

export default function TextForm(props) {
    const [text, setText] = useState("Enter text here");
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state
    const handleUpClick = () => {
        //  console.log("Uppercase was clicked :" + text);
         setText("You have clicked on Uppercase button");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");
    }

    const handleLoClick = () => {
        //  console.log("Uppercase was clicked :" + text);
         setText("You have clicked on Uppercase button");
        let newText = text.toLowerCase();
        
        setText(newText);
        props.showAlert("Converted to Lowercase", "success");
    }

    const haldleOnChange = (event) => {
        // console.log("On change");
        countWords(text);
        setText(event.target.value);
    }

    const countWords = (text) => {
    const trimmed = text.trim();
    if (trimmed === "") return 0;
    return trimmed.split(/\s+/).length;
  };
    return (
        <>
        <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control"  value = {text}  onChange={haldleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}> Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}> Convert to Lowercase</button>

        </div>
        <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
                    <h2>Your text summary</h2>
                    <p>{text.split(" ").length} words and {text.length} characters</p>
                    <p>{0.008 * text.split(" ").length} Minutes read</p>
                    <h2>Preview</h2>
                    <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
        </div>
        </>
    )
}
