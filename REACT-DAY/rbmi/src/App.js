// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Table from  './table.jsx'
// import Pagination from './pagination.jsx'

 

function App() {
  let  [users,setUser]=useState([])
  let [data,setData]=useState({"email":"","name":""}) 

  const inputchange=(e)=>{
      const {name,value}=e.target
      setData({...data,[name]:value})
    
  }
 
//   const [email,setEmail]=useState("")
//   const [name,setName]=useState("")
//  const emailchange=(e)=>{
//   setEmail(e.target.value)
//  }
//   const namechange=(e)=>{
//   setName(e.target.value)
//  }

 const handleSumit=(e)=>{
    e.preventDefault()
    let user ={
      id:Date.now(),
      name:data.name,
      email:data.email,
    }
    // alert([data.email,data.name])
    setUser([...users,user])
    console.log(users)
 }
  
    // let [data,setData]=useState("normal")
  // const [dec,setDec]=useState(0)
  // const [inc,setInc]=useState(0)
  // let data ="content"
  // console.log(data)
  // const decrease =()=>{
  //  setData((prev)=> prev-1)
  //   setData((prev)=> prev-1)
  // setDec(dec+1)
  // setData(`decrease ${dec}`)
    
  // }
  // const Increase =()=>{
  //   setInc(inc+1)
  //    setData(`Increase ${inc}`)
  // }
     
  return (


     <>
        <form onSubmit={handleSumit}>
          <input
            value={data.email}
            name="email"
            onChange={inputchange}
          />
         <input
            value={data.name}
            name="name"
            onChange={inputchange}
          />
          <input type='submit'/>
        </form>
        <Table users={users}/>
       
      </>
      
     )
}

export default App
    

 