
const express = require('express')
const bodyParser = require('body-parser')
const mailer = require('./mailer')

const server = express()

server.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

server.use(bodyParser.json())

server.post('/api/contact', (req, res) => {
  let values = req.body;
  //process.stdout.write(values + '\n');
  const { email = '', body = '', phone='',subject='' } = values;


  mailer({ email, phone, text: body,subject }).then(() => {
    console.log('success')
    res.send('success')
  }).catch((error) => {
    console.log('failed', error)
    res.send('badddd')
  })
})

server.get('/*', (req, res) => {
  return res.send("hello");
})

server.listen(80, (err) => {
  if (err) throw err
  console.log('> Read on http://localhost:80')
})