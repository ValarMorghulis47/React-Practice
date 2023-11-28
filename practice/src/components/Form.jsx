import React, { useState } from 'react'

export default function Form(props) {
    const UppercaseHandle = () => {
        let newtext = text.toUpperCase();
        setText(newtext);
    }
    const LowercaseHandle = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
    }
    const HandleCopy = () => {
        setText("");
    }
    const RemoveExtrSpace = () => {
        let newtext= text.split(/[ ]+/);
        setText(newtext.join(" "));
    }
    const handlechange = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState("");
    return (
        <>
            <div className="textarea">
                <h1>{props.heading}</h1>

                <label htmlFor="area">Enter The Text Below:</label>
                <textarea name="text" id="textarea" cols="30" rows="10" value={text} onChange={handlechange}></textarea>
                <button type="submit" className='btn btn-uppercase' onClick={UppercaseHandle}>Convert To Uppercase</button>
                <button type="submit" className='btn btn-lowercase' onClick={LowercaseHandle}>Convert To Lowercase</button>
                <button type="submit" className='btn btn-lowercase' onClick={RemoveExtrSpace}>Remove Extra Spaces</button>
                <button type="submit" className='btn btn-lowercase' onClick={HandleCopy}>Clear Text</button>
            </div>
            <div className="Summary">
                <h1>Your Text Summary:</h1>
                <p>{text.trim().split(/\s+/).filter(word => word !== "").length} Words And {text.replace(/\s/g, '').length} Characters</p>
                <p>{text}</p>
            </div>
        </>
    )
}
