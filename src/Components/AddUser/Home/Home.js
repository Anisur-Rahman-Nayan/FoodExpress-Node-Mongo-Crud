import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [users , setusers] = useState([])
  useEffect(()=>{
    fetch('http://localhost:5000/user')
    .then(res=>res.json())
    .then(data=> setusers(data))
  },[])

  const handleUserDelete=(id)=>{
    // console.log(id)
    const proceed =window.confirm("Are yo sure you want to delete ?")
    if(proceed){
      //  console.log(id)
      const url = `http://localhost:5000/user/${id}`
      fetch(url, {
        method: 'DELETE'
      })
      .then(res=> res.json())
      .then(data=>{
        // console.log(data)
        if(data.deletedCount > 0){
          console.log('Delected')
          const remaining = users.filter(user=> user._id !== id)
          setusers(remaining)
        }
      })
    }
  }

    return (
        <div>
          <h1>Available Users: {users.length} </h1> 
          <ul>
            {
              users.map(user=> <li key={user._id}>{user.name} :: {user.email} 
              <Link to={`/update/${user._id}`}> <button> Update </button></Link> 
              <button onClick={()=>handleUserDelete(user._id)}> X </button> </li>)
            }
          </ul>
        </div>
    );
};

export default Home;