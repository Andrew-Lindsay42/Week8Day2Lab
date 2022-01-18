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

  router.post('/', (req, res) => {
    const newData = req.body
    collection
    .insertOne(newData)
    .then((result) => {
      res.json(result.ops[0])
    })
    .catch((error) => {
      console.error(error);
      response.status(500);
      response.json({status:500, error: error})
    })
  })

  // router.delete('/:id', (req, res) => {

  // })

  return router;
};

module.exports = createRouter;
