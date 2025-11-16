import express from 'express';
import { embeddingText } from '../Controller/controller.js';


// Create a new router instance
const router = express.Router();


// Define a simple route

// GET Method route
router.get('/embedding',embeddingText)

// POST Method route


// PUT Method route


// DELETE Method route


// export the router
export default router;