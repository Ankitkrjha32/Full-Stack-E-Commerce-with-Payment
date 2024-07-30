import React, { useContext, useState } from 'react'
import Layout from './layout'
import './styles/registration.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from './UserContext';

function Login() {

  const { setUser } = useContext(UserContext);
  const history = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function submit(e) {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/login", {
        email, password
      });
      console.log('Response received:', response.data); // For Debugging 

      if (response.data.status === "exist") {
        setUser(response.data.user.username);
        history("/", { state: { id: response.data.user.username } });
      } else if (response.data.status === "NotExist") {
        alert("User does not exist or wrong credentials");
      }
    } catch (e) {
      alert("Wrong Details..!");
      console.log('Error : ' + e);
    }


    // try {
    //   await axios.post("http://localhost:3000/login",{
    //     email,password
    //   })
    //   .then(res => {
    //     if (res.data.status === "exist") {
    //       history("/", { state: { id: res.data.user.username } });
    //     } else if (res.data.status === "NotExist") {
    //       alert("User does not exist or wrong credentials");
    //     }
    //   })
    //   .catch(e=>{
    //     alert("Wrong Details..!");
    //     console.log('Error : ' + e);
    //   })
    // }
    // catch(e) {
    //   console.log(`Error : ${e}`);
    // }

  }

  return (
    <Layout>
      <div className='formContainer'>
        <form action='POST'>
          <h3>Login</h3>
          <div className='inputs'>
            <div className='username'>
              <input type='email' onChange={(e) => { setEmail(e.target.value) }} placeholder='Enter Email' />
            </div>
            <div className='password'>
              <input type='password' onChange={(e) => { setPassword(e.target.value) }} placeholder='Enter Password' />
            </div>
          </div>
          <div className='labels'>
            <div className='loginText'>
              <spam>Don't have an Account ?</spam>
            </div>
            <div className='login'>
              <Link to="/signup" className=' text-light text-decoration-none'>Register</Link>
            </div>
          </div>
          <div className='btn'>
            <button onClick={submit}>Login</button>
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default Login;
