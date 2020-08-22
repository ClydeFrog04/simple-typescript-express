import express from 'express';
import { exampleRouter } from './routes/example.router';

const app = express();

const port = process.env.PORT ?? 3000;

app.use('/api/examples', exampleRouter);
app.listen(port, () => console.log(`Listening on port ${port}...`));
