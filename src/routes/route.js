const express = require('express');
const router = express.Router();
const _=require('underscore')
const booksUpdate=require('../../Bookof/list')
const totalBooks=require('../../reaching/reaches')


router.post ('/booksUpload', totalBooks.booksData);
router.get('/totalbooks',totalBooks.Allbooks);



      
module.exports = router;

