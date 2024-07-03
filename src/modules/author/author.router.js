import { Router } from "express";
import * as Ac from './author.controller.js'
const authorRouter=Router();

authorRouter.post('/',Ac.addAuthor)
authorRouter.get('/',Ac.getAllAuthors)
authorRouter.get('/:id',Ac.getAuthorId)
authorRouter.patch('/:id',Ac.updateAuthorById)
authorRouter.delete('/:id',Ac.deleteAuthor)

export default authorRouter;
