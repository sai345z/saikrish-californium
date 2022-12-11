const express = require('express');
const router = express.Router();

const _=require('underscore')
const lodashing=require("lodash.frompairs")

router.get('/movies', function (req, res) {
  let movies=["RRR","Mirchi","Valayam","Simha"]
  console.log(movies)
  res.send(movies)

})

router.get('/movies/:indexNumber', function (req, res) {
  const indexNumber=req.params.indexNumber
  let movies=["RRR","Mirchi","Valayam","Simha"]
 
  if(movies[indexNumber] !== undefined){
    res.send(movies[indexNumber])
    console.log(movies[indexNumber])
  }else{ 
    res.send("Error: pleasee enter a valid index")
    console.log("Error: pleasee enter a valid index")
  }
  
  // console.log(movies[req.params.indexNumber])
  
  //res.send(movies[req.params.indexNumber])
  
});
router.get('/films', function (req,res) {
  let list=[ { id: 1, "name": "The Shining"}, {id: 2,"name": "Incendies"
}, {id: 3,"name": "Rang de Basanti"}, { id: 4, "name": "Finding Nemo"}]

console.log(list)
res.send(list)
});

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

if(list[filmid] !== undefined){
  res.send(list[filmid])
  console.log(list[filmid])
}else{ 
  res.send("No movie exists with this id")
  console.log("No movie exists with this id")
}



});


      
module.exports = router;
