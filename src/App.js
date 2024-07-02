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
    {
      id: 6,
      name: "sarman",
    },
    {
      id: 7,
      name: "satyam",
    },
    {
      id: 8,
      name: "shubham",
    },
    {
      id: 9,
      name: "sahil",
    },
    {
      id: 10,
      name: "sarthak",
    },
  ];

  const [name, setName] = useState("")
  const [newArr, setNewArr] = useState([])


  useEffect(() => {
    setNewArr( prev => name_arr.filter( n=>  (name !== "") && (n.name).includes(name)  ) )
  }, [name])
  

  return (
   <>
   <h1>Search Auto Complete</h1>
   <div className="container">
     <input type="text" value={name} placeholder="Search For Name" onChange={(e)=>{setName(e.target.value)}} />
     { newArr.length && <div className="box">
     {newArr.map((ele)=>{
        return <div key={ele.id} onClick={()=>setName(ele.name)} className="name">{ele.name}</div>
      })}
     </div>}
   </div>

   </>
  );
}

export default App;
