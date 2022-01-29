const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const db = require('./data/db-config');
const authRouter = require('./auth/auth-router');


const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())
server.use('/api/auth', authRouter)


server.get('/', (req, res, next) => {
  res.json({api: 'up'})
});

server.use('*', (req, res, next) => {
  res.json({api: 'URL not found'})
});

server.use((err, req, res, next) => {
  res.status(500)
      .json({
        error: err.message,
        stack: err.stack
      })
});

module.exports = server
