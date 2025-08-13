// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
 

function App() {
  
  const li =["apple","mango","banna"]
  const [data,setData]=useState("logged in")
    
  return (
        <div class="my">
          <form>
           <ul>
            {li.map(element=>(
                <li>{element}</li>
            ))}
           </ul>
          </form>
      </div>        
  
  );
}
export default App