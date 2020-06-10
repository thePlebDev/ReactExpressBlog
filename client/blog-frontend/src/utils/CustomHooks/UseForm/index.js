import { useState } from 'react';


const useForm = (validateLogin)=>{
  const [values,setValues] = useState({username:'',password:'',passwordRepeat:''});
  const [error,setError] = useState({username:'',password:'',passwordRepeat:''});

     const handleChange=(event)=>{
       const{ name, value } = event.target;
       console.log(value)

       setValues({
         ...values,
         [name]:value
       });
     };

    const handleSubmit=(event)=>{
      event.preventDefault();
      setError(validateLogin(values))
    }

    return {
      handleChange,
      handleSubmit,
      values,
      error
    }
}



export default useForm
