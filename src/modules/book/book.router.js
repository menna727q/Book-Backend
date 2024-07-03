import { Router } from "express";
import * as bc from "./book.controller.js";
const bookrouter=Router();
bookrouter.post('/',bc.addBook)
bookrouter.get('/',bc.getAllBooks)
bookrouter.get('/:id',bc.getBookId)
bookrouter.patch('/:id',bc.updateBookById)
bookrouter.delete('/:id',bc.deleteBook)


export default bookrouter