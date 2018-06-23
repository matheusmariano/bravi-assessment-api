import * as express from 'express';
import * as cors from 'cors';
import v1 from '../routes/v1';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/v1', v1);

export default app;
