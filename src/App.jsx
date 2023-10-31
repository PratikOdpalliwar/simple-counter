import React, { useState } from "react";
import './App.css'

export default function App() {
  const [add, setAdd] = useState(0);

  return (
    <div className="App">
      <div className="container">
        <div className="displaycont">
          <div className="display">{add}</div>
        </div>

        <div className="btn-container">
          <button className="btn1" onClick={(e)=>setAdd(add-1)}>-</button>
          <button className="btn1" onClick={(e) => setAdd(add + 1)}>+</button>
          
        </div>
      </div>

      <div className="container2"></div>
    </div>
  )
}
