

module.exports = function dbCheck(Model, queryObj){
  Model.findOne(queryObj)
  .then(doc=>{
    if(doc){
      //IF THE USERNAME EXISTS
      console.log('doc is here')
      return true
    }else{
      //IF THE USERNAME DOES NOT EXISTS
      console.log('doc is not here')
      return false
    }
  })
  .catch(error=>console.log( `Caught: ${error.message}`))

}
