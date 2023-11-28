import { useCallback, useEffect, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberallowed, setnumberallowed] = useState(false);
  const [characterallowed, setcharacterallowed] = useState(false);
  const [password, setpassword] = useState("");

  const passwordgenerator= useCallback(()=>{
    let pass="";
    let string="ABCDEFGHIJKLMNOPQRSTUVWXY";
    if (numberallowed) {
      string+="0123456789";
    }
    if (characterallowed) {
      string+="!@#$%^&*()_{}|?";
    }
    for (let index = 0; index <length; index++) {
      let char=Math.floor(Math.random()* string.length+1) //a radnom index will be generated
      pass+=string.charAt(char);      
    }
    setpassword(pass);
  }, [length, numberallowed, characterallowed, setpassword])

  const copypassword=()=>{
    window.navigator.clipboard.writeText(password);
  }
  
  useEffect(()=>{
    passwordgenerator();
  }, [length, numberallowed, characterallowed, passwordgenerator])

  return (
    <div className="container">
      <h1>PassWord Generator</h1>
      <div className="inputpass">
        <input type="text" name="text" id="passcontain" readOnly value={password}/>
        <button onClick={copypassword}>Copy</button>
      </div>
      <div className="first">
        <input value={length} type="range" id='range' min={1} max={100} onChange={(e)=>{setLength(e.target.value)}}/>
        <label htmlFor="name">Length: {length}</label>
        <input type="checkbox" name="checkbox" id="number" defaultChecked={numberallowed} onChange={()=>{setnumberallowed((prev)=>!prev)}} />Numbers
        <input type="checkbox" name="checkbox" id="character" defaultChecked={characterallowed} onChange={()=>{setcharacterallowed((prev)=>!prev)}}/>Characters
      </div>

    </div>
  )
}

export default App
