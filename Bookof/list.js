const mongoose=require('mongoose')
// bookname, bookmodel,price(india,euroes),year,tagsarray,authorname,totalpages,stockavailable
const booksSchema=new mongoose.Schema(
    {
    BookName:
    { String,
        type:String,
        required:true
        },
    
    authorName: String,
    Tags:[String],
    BookModel:String,
    year: Number,
    TotalPages:Number,
    Stockavailable:String,
    Price:{
        indianPrice:String,
        EuropeanPrice:String
    }

},
    {timestamps:true}
)

module.exports=mongoose.model('User',booksSchema)