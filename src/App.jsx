import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   
    const handleincrement=()=>{
        console.log(5+5);
    }; 
    
    return <div> 
      <div>
        <button onClick={handleincrement()}><h1>+</h1></button>  

      </div>



    </div>
}

export default App
