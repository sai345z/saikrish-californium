const mongoose=require('mongoose')

const booksSchema=new mongoose.Schema(
    {
    BookName: String,
    authorName: String,
    Category: String,
    year: Number
},
    {timestamps:true}
)

module.exports=mongoose.model('User',booksSchema)