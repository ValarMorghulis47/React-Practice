import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("");

  return (
    <div className="container" style={{ backgroundColor: color }}>
      <div className="buttonbar">
        <button onClick={() => setColor("red")}>Red</button>
        <button onClick={() => setColor("black")}>Black</button>
        <button onClick={() => setColor("green")}>Green</button>
        <button onClick={() => setColor("lavender")}>Lavender</button>
      </div>
    </div>
  )
}

export default App

