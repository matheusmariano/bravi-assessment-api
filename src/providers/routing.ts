import * as express from 'express';
import v1 from '../routes/v1';

const app = express();

app.use('/v1', v1);

export default app;
