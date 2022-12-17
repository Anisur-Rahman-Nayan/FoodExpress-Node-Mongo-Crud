import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
const {id} = useParams();
const [user,setuser] = useState({})
useEffect(()=>{
    const url = `http://localhost:5000/user/${id}`
    fetch(url)
    .then(res=>res.json())
    .then(data=> setuser(data))
})

const handleUpdateUser=(e)=>{
    e.preventDefault();
    const name = e.target.name.value;     
    const email = e.target.email.value;       
       // console.log(name, email)

       const updateUser = {name, email}

        const url = `http://localhost:5000/user/${id}`
       fetch(url, {
       method: 'PUT', // or 'PUT'
       headers: {
           'Content-Type': 'application/json',
       },
       body: JSON.stringify(updateUser),
       })
       .then((response) => response.json())
       .then((data) => {
       console.log('Success:', data);
       alert("User Added Successfuly !")
       e.target.reset()
       })
       .catch((error) => {
       console.error('Error:', error);
       });

   }

    return (
        <div>
            <h1>Updating User: {user.name}</h1>

            <form action="" onSubmit={handleUpdateUser}>
                <br />
                <input type="text" name="name" id="" placeholder='Enter Your Name' required/>
                <br />
                <input type="email" name="email" id="" placeholder='Enter Your Email' required/>
                <br />
                <input type="submit" value="Update User !" />
            </form>

        </div>
    );
};

export default UpdateUser;