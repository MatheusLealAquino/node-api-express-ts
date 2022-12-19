import express from 'express';
import morgan from 'morgan';
import * as bodyParser from 'body-parser';
import cors from 'cors';

import routes from './src/routes';

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(
    morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length]')
);

app.use('/v1', routes);

export default app;
