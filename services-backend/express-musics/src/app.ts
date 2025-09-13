import cors from 'cors';
import express from 'express';
import morgan from 'morgan';

import { tracksRouter } from './modules/tracks/tracks.routes';
import routes from './routes';

const app = express();

app.use(cors());

app.use(morgan('dev'));
app.use(express.json());
app.use('/api', routes);
app.use('/tracks', tracksRouter);

export default app;