const express = require('express');
const AppController = require('../controllers/AppController');
const StudentsController = require('../controllers/StudentsController');

const controllerRouting = (app) => {
  const router = express.Router();
  app.use('/', router);

  router.get('/', AppController.getHomepage);

  router.get('/students', (req, res) => {
    StudentsController.getAllStudents(req, res, process.argv[2]);
  });

  router.get('/students/:major', (req, res) => {
    StudentsController.getAllStudentsByMajor(req, res, process.argv[2]);
  });
};

module.exports = controllerRouting;
