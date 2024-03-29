const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: [{model: Product}]
  }).then(categories => {
    res.status(200).json(categories)
  }).catch(error => {
    console.log(error)
    res.status(400).json(error)
  })
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findByPk(req.params.id, {
    include: [{model: Product}]
  }).then(categories => {
    res.status(200).json(categories)
  }).catch(error => {
    console.log(error)
    res.status(400).json(error)
  })
});

router.post('/', (req, res) => {
  // create a new category
  /* req.body should look like this...
    {
      "category_name": "Games"
    }
  */
  Category.create(req.body)
  .then(categories => {
    res.status(200).json(categories)
  }).catch(error => {
    console.log(error)
    res.status(400).json(error)
  })
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  /* req.body should look like this...
    {
      "category_name": "Games"
    }
  */
    Category.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    .then(categories => {
      res.status(200).json(categories)
    }).catch(error => {
      console.log(error)
      res.status(400).json(error)
    })
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  }).then(categories => {
    res.status(200).json(categories)
  }).catch(error => {
    console.log(error)
    res.status(400).json(error)
  })
});

module.exports = router;
