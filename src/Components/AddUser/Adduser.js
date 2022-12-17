import React from 'react';

const Adduser = () => {

    const handleAddUser=(e)=>{
     e.preventDefault();
     const name = e.target.name.value;     
     const email = e.target.email.value;       
        // console.log(name, email)

        const user = {name, email}

        fetch('http://localhost:5000/user', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
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
            <h1>Please Add A New User !</h1>

            <form action="" onSubmit={handleAddUser}>
                <br />
                <input type="text" name="name" id="" placeholder='Enter Your Name' required/>
                <br />
                <input type="email" name="email" id="" placeholder='Enter Your Email' required/>
                <br />
                <input type="submit" value="Add User !" />
            </form>
        </div>
    );
};

export default Adduser;