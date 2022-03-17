const express = require('express');

const ourGearController = require('./ourGearController');

const router = express.Router();

router.get('/',
  ourGearController.getItems,
  (req, res) => res.status(200).json(res.locals.items)
);

// router.get('/addOwner',
//   ourGearController.getOwners,
//   (req, res) => res.status(200).json(res.locals.owner)//
// );

router.post('/addNewItem',
  ourGearController.addNewItem,
  (req, res) => res.status(200).json(res.locals.newItem)
);

module.exports = router;
