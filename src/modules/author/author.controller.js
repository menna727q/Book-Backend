import {Author} from '../../../db/models/author.model.js'

export const addAuthor = async(req,res,next)=>{
 const createauthor= await Author.create(req.body);
 return res.status(201).json({message:"author added successfully",success:true,createauthor})
}
export const getAllAuthors =async(req,res,next)=>{
    const getauthors= await Author.find({});
    return res.status(200).json({getauthors,success:true});
}
export const getAuthorId= async(req,res,next)=>{
    const {id}=req.params;

    const getAuthorById=await Author.findById(id);
    if (!getAuthorById) {
        return res.status(404).json({ message: "Author not found", success: false });
      }
      return res.status(200).json({ getAuthorById, success: true });
  
}
export const updateAuthorById= async(req,res,next)=>{
    const {id}=req.params;
    const updateAuthor=await Author.findByIdAndUpdate(id, req.body,{ new: true, runValidators: true })
    if (!updateAuthor) {
        return res.status(404).json({ message: "Author not found", success: false });
      }
      return res.status(200).json({ message:"Author updated successfully", success: true ,author:updateAuthor});
}
export const deleteAuthor= async(req,res,next)=>{
    const {id}=req.params;
    const deleteAuthor= await Author.findByIdAndDelete(id)
    if(!deleteAuthor){
        return res.status(404).json({ message: "Author not found", success: false });
    }
    return res.status(200).json({ message:"Author deleted successfully", success: true });

}