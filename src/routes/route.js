const express = require('express');
const router = express.Router();
const _=require('underscore')


/*
router.get('/movies/:indexNumber', function (req, res) {
  let movi=["sai","ram","baba","rolex"]
  
  
  //for(let i=0;i<=movi.length-1;i++){
    console.log(movi[req.params.indexNumber])
  //}
  res.send("Hlo buddy")
  

});
*/

let persons= [
  {
  name: "PK",
  age: 10,
  votingStatus: false
},
{
  name: "SK",
  age: 20,
  votingStatus: false
},
{
  name: "AA",
  age: 70,
  votingStatus: false
},
{
  name: "SC",
  age: 5,
  votingStatus: false
},
{
  name: "HO",
  age: 40,
  votingStatus: false
}
]

router.post('/age', function (req,res){
  let newpersons=req.query;
  let newOne=[];
  for(let i=0;i<persons.length;i++){
    if(persons[i].age===newpersons.age){
      persons[i].votingStatus=true;
      newOne.push(persons[i])
      console.log(newOne)
    }
  }

})


      
module.exports = router;

//- welcome() -> prints ‘Welcome to my application. I am <name> and a part of FunctionUp Californium cohort.’ 