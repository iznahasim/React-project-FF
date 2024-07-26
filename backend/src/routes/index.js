const express = require('express');
const authRoutes = require('./auth/routes');
const petRoutes = require('./pets/routes');

const initializeEndpoints = (app) => {
  app.use('/api/v1/auth', authRoutes);
  app.use('/api/v1/pets', petRoutes);
};

module.exports = initializeEndpoints;
