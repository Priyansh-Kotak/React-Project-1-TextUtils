import React,{useState} from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {

  const uppercase = ()=>{
    console.log("UpperCase is ready"+text);
    let uc = text.toUpperCase();
    setText(uc);
    {props.showAlert("Converted to UpperCase !!","success")};
    
  }

  const changeText=(event)=>{
    console.log("Hello");
    setText(event.target.value)
  }

  const cleart=()=>{
    // console.log("I am in clear "+ text);
    setText('');
    {props.showAlert("Cleared !!","success")};
  }

  const [text,setText]=useState("Enter your text...");

  




  return (

    <>
    
    
    <div>   
        <div className ="my-3 ">
        <h1 style={{color: props.mode==='light'?'black':'white'}}>{props.heading}</h1>
            {/* <label for="mybox" class="form-label"></label> */}
            <textarea className="form-control my-3"  style={{backgroundColor: props.mode==='light'?'white':'grey', color: props.mode==='light'?'black':'white'}} value = {text} onChange={changeText} id="mybox" rows="8"></textarea>
        </div>

        <button className="btn btn-primary" onClick={uppercase} >Convert to Upper case </button>  
        <button className="btn btn-primary mx-3" onClick={cleart}>Clear Text</button>    
    </div>    

    <div className="container mg-10" style={{color: props.mode==='light'?'black':'white'}} >
      <h1 className='my-3' >Text Summary</h1>

      <p>{text.split(" ").length} words, {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} minutes to read the entire text.</p>

      <h2>Preview</h2>
      <p>{text}</p>

    </div>



    </>

  )
}

TextForm.propTypes={
    heading: PropTypes.string.isRequired
}

