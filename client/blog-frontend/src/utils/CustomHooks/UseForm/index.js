import { useState,useEffect } from 'react';
import axios from 'axios';

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
      axios.post('/v1/signup', values)
      .then(res=>console.log(res.data)) // printing out the info we get
      .catch(error=>console.log(error))
    }
  },[errors,isSubmitting,values])


  return{
    values,
    errors,
    handleChange,
    handleSubmit
  }
}



export default useForm
