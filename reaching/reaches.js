const booksone=require('../Bookof/list')

const booksData= async function(req,res) {
    var data=req.body;
    let sendingData=await booksone.create(data)
    res.send({ sendingData })
}

const booksList=async function (req,res){
    let allListofBooks=await booksone.find();
    res.send({ allListofBooks})
}

module.exports.booksData=booksData;
module.exports.booksList=booksList;