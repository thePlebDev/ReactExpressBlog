import React,{ useState,useEffect } from 'react'


const Home = ()=>{
const[state,setState] = useState('this')

  const getList =()=>{
    fetch('v1/test')
    .then(doc=>console.log(doc))
    .catch(err => console.log(err))
  }

  useEffect(()=>{
    getList()
  });

  return(
    <div>
      <h1>{state}</h1>
    </div>
  )
}

export default Home
