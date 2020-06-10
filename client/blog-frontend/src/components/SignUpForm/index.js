import React,{useState} from 'react'

import useForm from '../../utils/CustomHooks/UseForm'
import validateLogin from '../../utils/validateLogin'


const SignUpForm = ()=>{
  const {handleChange,handleSubmit,values}= useForm(validateLogin)

  return(
    <div>
      <form onSubmit={handleSubmit} noValidate action="/v1/signup"method="POST">
        <div className="signupform-container">

          <h2>Sign Up</h2>
          <div>
            <label htmlFor="user">User Name</label>
            <input type="text" placeholder="Enter User Name" name='username' value={values.username} onChange={handleChange}/>
            {/*error message here*/}
          </div>
          <div>
            <label htmlFor="psw">Password</label>
            <input type="password" placeholder="Enter Password" name='password' value={values.password} onChange={handleChange}/>
            {/*error message here*/}
          </div>
          <div>
            <label htmlFor="psw-repeat">User Name</label>
            <input type="password" placeholder="Repeat Password" name='passwordRepeat' value={values.passwordRepeat} onChange={handleChange}/>
          {/*error message here*/}
          </div>
          <input type="submit" value="Submit"/>

        </div>
      </form>
    </div>
  )
}

export default SignUpForm
