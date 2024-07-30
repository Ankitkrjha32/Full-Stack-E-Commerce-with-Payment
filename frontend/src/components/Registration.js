import React, { useContext, useState } from 'react'
import Layout from './layout'
import './styles/registration.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from './UserContext';

function Registration() {

  const history = useNavigate();
  const { setUser } = useContext(UserContext);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');

  function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z][a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  async function submit(e) {
    e.preventDefault();

    console.log('Form submitted'); // For Debugging

    if(!username || !email || !password || !ConfirmPassword) {
      alert("Please fill out all Fields..!");
      return;
    }

    if (!isValidEmail(email)) {
      alert('Please enter a valid email address!');
      return;
    }

    if (password !== ConfirmPassword) {
      alert('Almost there! Just make sure both passwords match');
      return;
    }

    try {
      await axios.post("http://localhost:5000/signup", {
        username, email, password
      })
        .then(res => {
          if (res.data.status === "exist") {
            alert("User already exists");
          } else if (res.data.status === "NotExist") {
            alert("Registration Successfully..!")
            setUser(username);
            history("/", { state: { id: username } });
          }
        })
        .catch(e => {
          alert("Wrong Details..!");
          // console.log(res.body.name);
          console.log('Error : ' + e);
        })
      //   console.log('Response received:', res.data);

      //   if (res.data.status === "exist") {
      //     alert("User already exists");
      //   } else if (res.data.status === "NotExist") {
      //     alert("Registration Successful!");
      //     history("/", { state: { id: username } });
      //   }
    }
    catch (e) {
      console.log(`Error : ${e}`);
    }
  }

  return (
    <Layout>
      <div className='formContainer'>
        <form>
          <h3>Registration</h3>
          <div className='inputs'>
            <div className='username'>
              <input type='text' onChange={(e) => { setUsername(e.target.value) }} placeholder='Enter Username' />
            </div>
            <div className='email'>
              <input type='email' onChange={(e) => { setEmail(e.target.value) }} placeholder='Enter Email' />
            </div>
            <div className='password'>
              <input type='password' onChange={(e) => { setPassword(e.target.value) }} placeholder='Enter Password' />
            </div>
            <div className='cpassword'>
              <input type='password' onChange={(e) => { setConfirmPassword(e.target.value) }} placeholder='Enter Confirm Password' />
            </div>
          </div>
          <div className='labels'>
            <div className='loginText'>
              <spam>Already have an Account ?</spam>
            </div>
            <div className='login'>
              <Link to="/login" className=' text-light text-decoration-none'>Login</Link>
            </div>
          </div>
          <div className='btn'>
            <button onClick={submit}>Register</button>
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default Registration
