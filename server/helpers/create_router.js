const express = require('express');
const { response, request } = require('express');
const ObjectID = require('mongodb').ObjectID;

const createRouter = function (collection) {

  const router = express.Router();

  router.get('/', (req, res) => {
    collection
      .find()
      .toArray()
      .then((docs) => {res.json(docs)})
      .catch((error) => {
        console.error(error);
        response.status(500);
        response.json({status:500, error: error})
      })
  });

  router.get('/:id', (req, res) => {
    collection
      .findOne({ _id: ObjectID(id) })
      .then((doc) => {res.json(doc)})
  });

    return router;
};

module.exports = createRouter;
