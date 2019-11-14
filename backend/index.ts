import path from 'path'
import Express from 'express';

const app = Express();

app.use(Express.static(path.join(__dirname, '.')));

app.listen(8080,"0.0.0.0",() => {
  console.log(path.join(__dirname, '.'));
  console.log('listening on :8080')
})
