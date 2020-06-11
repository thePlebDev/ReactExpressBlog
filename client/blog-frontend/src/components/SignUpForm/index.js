import React,{useState} from 'react'

import useForm from '../../utils/CustomHooks/UseForm'
import validateLogin from '../../utils/ValidateLogin'


const SignUpForm = ()=>{
  const {handleChange,handleSubmit,values,errors}= useForm(validateLogin)

  return(
    <div>
      <form onSubmit={(event)=>handleSubmit(event,validateLogin)} noValidate action="/v1/signup"method="POST">
        <div className="signupform-container">

          <h2>Sign Up</h2>
          <div>
            <label htmlFor="user">User Name</label>
            <input type="text" placeholder="Enter User Name" name='username' value={values.username} onChange={handleChange}/>
            <p>{errors.username }</p>
          </div>
          <div>
            <label htmlFor="psw">Password</label>
            <input type="password" placeholder="Enter Password" name='password' value={values.password} onChange={handleChange}/>
            <p>{errors.password}</p>
          </div>
          <div>
            <label htmlFor="psw-repeat">Reapeat Password</label>
            <input type="password" placeholder="Repeat Password" name='passwordRepeat' value={values.passwordRepeat} onChange={handleChange}/>
            {errors.passwordRepeat && <p>{errors.password}</p>}
          </div>
          <input type="submit" value="Submit"/>

        </div>
      </form>
    </div>
  )
}

export default SignUpForm
