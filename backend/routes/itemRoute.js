import express from 'express';
import { createItem, getItems, deleteItem } from '../controllers/itemController.js';
import upload from '../middleware/upload.js';

const itemRouter = express.Router();

itemRouter.post('/', upload.single('image'), createItem);

itemRouter.get('/', getItems);

itemRouter.delete('/:id', deleteItem);

export default itemRouter;