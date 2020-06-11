//username must be more than 5 characters and less than 20
//password must be more than ten characters
//passwordRepeat must be the same as password

export default function validate(values){

  const errors = {}
  const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{10,}$/

//USERNAME VALIDATION
  if(!values.username){
    errors.username ="Please enter a username"
  }
  else if(values.username.length< 5){
    errors.username = 'Username must be more than 5 characters'
  } else if(values.username.length > 20){
    errors.username = 'Username must be less than 20 characters'
  }

//PASSWORD VALIDATION
if(!values.password){
  errors.password ='Please enter a password'
}else if (values.password.length <10){
  errors.password ='Password must be more 10 characters'
}else if(!regex.test(values.password)){
  errors.password = "Password must contain atleast 10 characters and on number"
}

if(values.password !== values.passwordRepeat){
  errors.passwordRepeat="Passwords must match"
}


  return errors
}
