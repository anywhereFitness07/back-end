const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const authRouter = require('./auth/clients/auth-router-client');
const instRouter = require('./auth/instructors/auth-router-instructor');
const classesRouter = require('./classes/classes-router');
const resRouter = require('./reservations/reservation-router')


const server = express();
server.use(express.json());
server.use(helmet());
server.use(cors());
server.use('/api/auth/clients', authRouter);
server.use('/api/auth/instructors', instRouter);
server.use('/api/classes', classesRouter);
server.use('/api/reservations', resRouter);

server.get('/', (req, res, next) => {
  res.json({api: 'up'});
});

server.use('*', (req, res, next) => {
  res.json({api: 'URL not found'});
});

server.use((err, req, res, next) => {
  res.status(500)
      .json({
        error: err.message,
        stack: err.stack
      });
});

module.exports = server;
