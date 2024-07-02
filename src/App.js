import { useEffect, useState } from "react";
import "./App.css";

function App() {  
  const name_arr = [
    {
      id: 1,
      name: "rohith",
    },
    {
      id: 2,
      name: "rohini",
    },
    {
      id: 3,
      name: "rohan",
    },
    {
      id: 4,
      name: "rahul",
    },
    {
      id: 5,
      name: "radhika",
    },
  ];

  const [name, setName] = useState("")
  const [newArr, setNewArr] = useState([])

  const handleInput = (e)=>{
    setName(e.target.value)
  }

  useEffect(() => {
    setNewArr( prev => name_arr.filter( n=>  (name !== "") && (n.name).includes(name)  ) )
  }, [name])
  

  return (
   <>
   <div className="container">
     <input type="text" value={name} placeholder="Search For Name" onChange={(e)=>{setName(e.target.value)}} />
     <div className="box">
     { newArr.map((ele)=>{
        return <div key={ele.id} onClick={()=>setName(ele.name)} className="name">{ele.name}</div>
      })}
     
     </div>
   </div>

   </>
  );
}

export default App;
