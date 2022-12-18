const express = require('express');
const router = express.Router();
const _=require('underscore')
const booksUpdate=require('../../Bookof/list')
const totalBooks=require('../../reaching/reaches')


router.post ('/booksUpload', totalBooks.booksData);
router.get('/listOfbooks',totalBooks.booksList);



      
module.exports = router;

