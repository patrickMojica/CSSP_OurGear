const express = require('express');

const ourGearController = require('./ourGearController');

const router = express.Router();

router.get('/allPeople',
  ourGearController.getPeople,
  (req, res) => res.status(200).json(res.locals.people)
);

router.get('/allItems',
  ourGearController.getItems,
  (req, res) => res.status(200).json(res.locals.items)
);

router.post('/addNewPerson',
  ourGearController.addNewPerson,
  (req, res) => res.status(200).json(res.locals.person)
);

router.post('/addNewItem',
  ourGearController.addNewItem,
  (req, res) => res.status(200).json(res.locals.newItem)
);

// delete Item

// detete person

router.get('/search',
  ourGearController.getMatch,
  (req, res) => res.status(200).json(res.locals.results)
);

module.exports = router;
