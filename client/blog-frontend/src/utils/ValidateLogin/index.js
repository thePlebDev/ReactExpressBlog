

export default function validate(values){
  let errors = {}

  if(!values.username){
    errors.username = "Email address is required"
  }
  if(!values.password){
    errors.password = 'Password is required'
  }else if(values.password.length <10){
    errors.password = 'Password must be longer than 10 characters'
  }

  return errors
}
