const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    include: [{model: Product}]
  }).then(tags => {
    res.status(200).json(tags)
  }).catch(error => {
    console.log(error)
    res.status(400).json(error)
  })
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findByPk(req.params.id, {
    include: [{model: Product}]
  }).then(tags => {
    res.status(200).json(tags)
  }).catch(error => {
    console.log(error)
    res.status(400).json(error)
  })
});

router.post('/', (req, res) => {
  // create a new tag
  /* req.body should look like this...
    {
      "tag_name": "orange"
    }
  */
    Tag.create(req.body)
    .then(tags => {
      res.status(200).json(tags)
    }).catch(error => {
      console.log(error)
      res.status(400).json(error)
    })
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
    /* req.body should look like this...
    {
      "tag_name": "Games"
    }
  */
    Tag.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    .then(tags => {
      res.status(200).json(tags)
    }).catch(error => {
      console.log(error)
      res.status(400).json(error)
    })
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id
    }
  }).then(tags => {
    res.status(200).json(tags)
  }).catch(error => {
    console.log(error)
    res.status(400).json(error)
  })
});

module.exports = router;
