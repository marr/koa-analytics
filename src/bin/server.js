import './_bootstrap';
import createServer from 'lib/createServer';

const PORT = process.env.PORT || 1338;

createServer().then(app => {
  app.listen(PORT, () => {
    const mode = process.env.NODE_ENV || 'development';
    console.log('Server listening on', PORT, 'in', mode, 'mode');
  });
}, err => {
  console.error(err.stack);
  process.exit(1);
});
