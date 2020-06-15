import React,{useState} from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom'



const Login = (props)=>{
  const [values,setValues] = useState({username:'', password:''})

  const handleChange = (event)=>{
    const {name, value} = event.target
    setValues({...values,[name]:value})
  }

  const handleSubmit = (event)=>{
    event.preventDefault()
    axios({
      url:'v1/login',
      method:"POST",
      data:{
        username:values.username,
        password:values.password
      }
    })
    .then(res=>{
      if(res.data.found){
        console.log(res.data)
        return props.history.push('/')
      }else{
        console.log(res.data.message)
      }
    }) // printing out the info we get back
    .catch(error=>console.log(error))

  }

  return(
    <div>
      <form onSubmit={(event)=>{handleSubmit(event)}}>
      <div>
          <label>
            <input type='text' name="username" value={values.username} onChange={(event)=>{handleChange(event)}}></input>
          </label>
        </div>
        <div>
          <label>
            <input type='text' name="password" value={values.password} onChange={(event)=>{handleChange(event)}}></input>
          </label>
        </div>
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  )
}

export default Login
