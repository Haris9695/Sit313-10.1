import React, {useState}  from 'react'
import Input from './Input'
import Button from './Button'
import Greeting from './Greeting'
import './App.css'



const Login = (props) => {

    const handleClick =async()=>{
        await fetch ('http://localhost:8003/', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: contact.username,
                password: contact.password


            })

        })
        .then (response => response.json())
        .then(data => JSON.parse((data)))
        .catch(err =>{
            console.log("Error:" + err)


        })


    }

    
    
    
      const [contact, setContact] = useState({
        username: '',
        password: '',
      });
    
      const handleChange = (event) => {
        const { name, value } = event.target;
        setContact((preValue) => ({
          ...preValue,
          [name]: value,
        }));
      };
    
      return (
        <div className="header-div">
          <Input
            name="username"
            type="text"
            placeholder="email"
            onChange={handleChange}
            value={contact.username}
          />
    
          <br></br>
    
          
          
    
         <button onClick={handleClick} >   
    
         Subscribe
    
         </button>
    
    
          <br></br>
          <br></br>
    
          
        </div>
      );
    };
export default Login