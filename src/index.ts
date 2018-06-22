import app from './providers/routing';
import config from './config';

const { port } = config.api;

app.listen(port, () => {
  console.log(`Listening at port ${port}.`);
});
