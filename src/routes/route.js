const express = require('express');
const router = express.Router();
const welcome=require('../logger/logger')
const newnam=require('../validator/formatter')
const getBatchinfo=require('../util/helper')
const _=require('underscore')
const lodashing=require("lodash.frompairs")

router.get('/test-me', function (req, res) {
    

      const arr=['jan','feb','march','april','may','june','july','aug','sep','oct','nov','dec']
      let result=_.chunk(arr,4);
      console.log(result)

      const arrayNum=[1,3,5,7,9,11,13,15,17,19];
      console.log(_.tail(arrayNum))

      const values=[1,2,3,6]
      const value1=[2,4,6,9]
      const value2=[3,7,5,1]
      const value3=[8,9,4,5]
      const value4=[9,5,6,2]
      console.log(_.union(values,value1,value2,value3,value4));
      
      const filmy=[["horror","The Shining"],["drama","titanic"],["Thriller","Shutter Island"],["Fantasy","Pans Labyrinth"]]
      console.log(lodashing(filmy))
      console.log(newnam.trim);
      console.log(newnam.trim.toUpperCase());
      console.log(newnam.trim.toLowerCase());
      console.log(getBatchinfo.date);
      console.log(getBatchinfo.currentMonth);  //(Month is 0-based, so 11 means 12th Month)
    console.log(`Welcome to my application. I am ${welcome.myName}  and a part of FunctionUp Californium cohort.`)
    console.log(`${getBatchinfo.batchName},${getBatchinfo.week}${getBatchinfo.day},the topic for today nodejs module System`)
   res.send('My first ever api!')
});

module.exports = router;

//- welcome() -> prints ‘Welcome to my application. I am <name> and a part of FunctionUp Californium cohort.’ 