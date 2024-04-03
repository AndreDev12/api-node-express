const express = require('express');
const app = express();

const dittoJSON = require('./pokemon/ditto.json');

app.disable('x-powered-by');

const PORT = process.env.PORT ?? 1234;

app.use(express.json());

// app.use((req, res, next) => {
//   if (req.method !== 'POST') return next();
//   if (req.headers['content-type'] !== 'application/json') return next();
//   // solo llegan request que son POST y que tienen el header Content-Type: application/json
//   let body = '';

//   // escuchar evento data
//   req.on('data', (chunk) => {
//     body += chunk.toString();
//   });

//   req.on('end', () => {
//     const data = JSON.parse(body);
//     data.timestamp = Date.now();
//     // mutar la request y meter la información en el req.body
//     req.body = data;
//     next();
//   });
// });

app.get('/pokemon/ditto', (req, res) => {
  res.json(dittoJSON);
});

app.post('/pokemon', (req, res) => {
  // req.body deberíamos guardar en bbdd
  res.status(201).json(req.body);
});

app.use((req, res) => {
  res.status(404).send('<h1>404 Not Found</h1>');
});

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
