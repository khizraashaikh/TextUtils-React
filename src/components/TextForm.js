import React, { useState } from 'react'

export default function TextForm(props) {
    const replaceAll = (original, find, replace) => {
        return original.replace(new RegExp(find, "gi"), replace);
    }

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }
    
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    }
    
    const handleClearTextClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }
    
    const handleRemoveWhiteSpacesClick = () => {
        let newText = replaceAll(text, " ", "");
        setText(newText);
        props.showAlert("All white spaces removed!", "success");
    }
    
    const handleCopy = () => {
        let newText = document.getElementById('myBox');
        newText.select();
        navigator.clipboard.writeText(newText.value);
        props.showAlert("Copied to Clipboard!", "success");
    }
    
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }

    const handleOnChange = (event) => {
        // console.log("onChange clicked");
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick} >Conver to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick} >Conver to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearTextClick} >Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={handleRemoveWhiteSpacesClick} >Remove White Spaces</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy} >Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces} >Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'$042743'}}>
            <h2>You text summary</h2>
            <p>{text.split(" ").length} words {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preivew</h2>
            <p>{text.length > 0 ? text : 'Enter something in the text box above to preview it here'}</p>
        </div>
        </>
    )
}
