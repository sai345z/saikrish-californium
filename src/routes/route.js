const express = require('express');
const router = express.Router();
const welcome=require('../logger/logger')
const newnam=require('../validator/formatter')
const getBatchinfo=require('../util/helper')
const _=require('underscore')
const lodashing=require("lodash.frompairs")

/*
router.get('/movies/:indexNumber', function (req, res) {
  let movi=["sai","ram","baba","rolex"]
  
  
  //for(let i=0;i<=movi.length-1;i++){
    console.log(movi[req.params.indexNumber])
  //}
  res.send("Hlo buddy")
  

});
*/

router.get('/films/:filmid', function (req,res) {
  const filmid=req.params.filmid
  let list=[ {
 id: 1,
 "name": "The Shining"
}, {
 id: 2,
 "name": "Incendies"
}, {
 id: 3,
 "name": "Rang de Basanti"
}, {
 id: 4,
 "name": "Finding Nemo"
}]

//for(let r=0;r<obj.length+1;r++){
//console.log(obj[req.params.obj])
if(list[filmid] !== undefined){
  res.send(list[filmid])
}else{ res.send("Error: pleasee enter a valid index")}
  

//console.log(req.params)
//console.log(req.params.obj)
 

});


      
module.exports = router;

//- welcome() -> prints ‘Welcome to my application. I am <name> and a part of FunctionUp Californium cohort.’ 