import express from 'express';

export const exampleRouter = express.Router();

exampleRouter.get('', (req, res) => res.send('Hello World'));
