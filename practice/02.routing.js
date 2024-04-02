const http = require('node:http');
const dittoJSON = require('./pokemon/ditto.json');

const desiredPort = process.env.PORT ?? 1234;

const processRequest = (req, res) => {
  const { method, url } = req;

  switch (method) {
    case 'GET':
      switch (url) {
        case '/pokemon/ditto':
          res.setHeader('Content-Type', 'application/json; charset=utf-8');
          return res.end(JSON.stringify(dittoJSON));
        default:
          res.statusCode = 404;
          res.setHeader('Content-Type', 'text/html; charset=utf-8');
          return res.end('<h1>404</h1>');
      }
    case 'POST':
      switch (url) {
        case 'pokemon': {
          // const body = '';
          break;
        }
        default:
          res.statusCode = 404;
          res.setHeader('Content-Type', 'text/plain; charset=utf-8');
          return res.end('404 Not Found');
      }
  }
};

const server = http.createServer(processRequest);

server.listen(desiredPort, () => {
  console.log(`Aplication listening on http://localhost:${desiredPort}`);
});
