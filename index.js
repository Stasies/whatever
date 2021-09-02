const [{ Server: h1 }, x] = [require('http'), require('express')];

const Router = x.Router();
const PORT = 4321;
// const { log } = console;
// const hu = { 'Content-Type': 'text/html; charset=utf-8' };
const app = x();
// const mw0 = (r, rs, n) => rs.status(200).set(hu) && n();
const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,PUT,DELETE',
  'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers'
  };
Router
  .route('/')
  .get(r => r.res.end('tia.nntr.wth'));
app
.get('/login/', (req, res) => res
.status(200)
.set({"Content-Type":"text/html; charset=utf-8", ...CORS})
.end('tia.nntr.wth')
)
.get('/sample/', (req, res) => res
.status(200)
.set({"Content-Type":"text/plain; charset=utf-8", ...CORS})
.end(`function task(x){
  this.x = x*x;
  return x*this.x;
  };`)

  /* .set('view engine', 'pug') */
  .set('x-powered-by', false);
module.exports = h1(app)
  .listen(process.env.PORT || PORT, () => log(process.pid));
