import React, {useState} from 'react'

export default function TextArea(props) {
    const handleUpClick = () =>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text is converted to Uppercase","success");
    }
    const handleLowClick = ()=>{
        let newText = text.toLocaleLowerCase();
        setText(newText);
        props.showAlert("Text is converted to Lowercase","success");

    }
    const handleClearClick = ()=>{
        let newText = '';
        setText(newText);
        props.showAlert("Text has been cleared","success");

    }
    const handleOnChange = (event) =>{
        // console.log("on change");
        setText(event.target.value);
    }
    const handleCopy = ()=>{
        let text = document.getElementById("textBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied to clipboard","success");

    }
    const handleExtraSpace = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra space has been removed","success");

    }
    const [text, setText] = useState('');
    return (
        <>       
        <div className='container' style={{color: props.mode==='dark'?'white':'black'}}> 
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'gray':'white', color: props.mode==='dark'?'black':'black'}} id="textBox" value={text} onChange={handleOnChange} rows="8"></textarea>
            </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove extra space</button>
                <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy text</button>
                <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear text</button>


        </div>
            <div className="container my-3"  style={{color: props.mode==='dark'?'white':'black'}}>
                <h3>Text summary</h3>
                <p> {text.split(" ").length} words and {text.length} charecters</p>
                <p> {0.008 * text.split(" ").length} minits to read</p>
                
                <h3>Preview</h3>
                <p>{text.length>0?text:"Enter some text in textbox for preview"}</p>

            </div>
        </>
        
    )
}
