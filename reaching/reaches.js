const booksone=require('../Bookof/list')

const booksData= async function(req,res) {
    var data=req.body;
    let sendingData=await booksone.create(data)
    res.send({ sendingData })
}

const Allbooks=async function (req,res){
    //let allListofBooks=await booksone.find();
    //let allListofBooks=await booksone.find().select({BookName:1,authorName:1,_id:0})
   // let allListofBooks=await booksone.find().select({BookName:1,year:1,_id:0})
   //let allListofBooks=await booksone.find({authorName:"Saikrishna",year:2021})
  // let allListofBooks=await booksone.find({
    //$or:[{indianPrice:{$eq:"100"}},{indianPrice:{$eq:"200"}},{indianPrice:{$eq:"500"}}]});
    //let allListofBooks=await booksone.find({Stockavailable:"Available",TotalPages:{$gte:500}});

    res.send({ allListofBooks})
}

module.exports.booksData=booksData;
module.exports.Allbooks=Allbooks;