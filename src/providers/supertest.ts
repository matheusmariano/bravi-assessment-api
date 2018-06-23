import * as request from 'supertest';
import app from '../providers/routing';

export default request(app);
