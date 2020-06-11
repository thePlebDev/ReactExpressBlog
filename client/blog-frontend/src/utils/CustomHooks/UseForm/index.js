import { useState,useEffect } from 'react';


const useForm = (validateLogin)=>{
  const [values,setValues]= useState({username:'',password:'',passwordRepeat:''})
  const [errors,setErrors]= useState({})
  const [isSubmitting,setIsSubmitting] = useState(false)


  const handleChange =(event)=>{
    const {name,value} = event.target
    setValues({...values,[name]:value})
  }

  const handleSubmit =(event,validateLogin)=>{
    event.preventDefault()

    setErrors(validateLogin(values))
    setIsSubmitting(true)


  }

  useEffect(()=>{
    if(Object.keys(errors).length ===0 && isSubmitting){
      console.log('request sent')
      fetch("v1/signup",{
        method: 'post',
        body:JSON.stringify({
          username: values.username,
          password: values.password
        })
      }).then(response=> console.log(response))
      .catch(error=>console.log(error))
    }
  },[errors])


  return{
    values,
    errors,
    handleChange,
    handleSubmit
  }
}



export default useForm
