import {Book} from '../../../db/models/book.model.js'

export const addBook = async(req,res,next)=>{
 const createbook= await Book.create(req.body);
 return res.status(201).json({message:"book added successfully",success:true,createbook})
}
export const getAllBooks =async(req,res,next)=>{
    try {
        const { page = 1, limit = 10, title, author } = req.query;
        const query = {};
        if (title) query.title = new RegExp(title, 'i');
        if (author) query.author = new RegExp(author, 'i');
        const books = await Book.find(query)
          .limit(limit * 1)
          .skip((page - 1) * limit)
          .exec();
        const count = await Book.countDocuments(query);
        res.json({
          books,
          totalPages: Math.ceil(count / limit),
          currentPage: page
        });
      } catch (err) {
        res.status(500).send(err);
      }
}
export const getBookId= async(req,res,next)=>{
    const {id}=req.params;

    const getBookById=await Book.findById(id);
    if (!getBookById) {
        return res.status(404).json({ message: "Book not found", success: false });
      }
      return res.status(200).json({ getBookById, success: true });
  
}
export const updateBookById= async(req,res,next)=>{
    const {id}=req.params;
    const updateBook=await Book.findByIdAndUpdate(id, req.body,{ new: true, runValidators: true })
    if (!updateBook) {
        return res.status(404).json({ message: "Book not found", success: false });
      }
      return res.status(200).json({ message:"Book updated successfully", success: true ,book:updateBook});
}
export const deleteBook= async(req,res,next)=>{
    const {id}=req.params;
    const deleteBook= await Book.findByIdAndDelete(id)
    if(!deleteBook){
        return res.status(404).json({ message: "Book not found", success: false });
    }
    return res.status(200).json({ message:"Book deleted successfully", success: true });

}