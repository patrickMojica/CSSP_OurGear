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
  (req, res) => res.status(200).json(req.locals.person)
);

router.post('/addNewItem',
  ourGearController.addNewItem,
  (req, res) => res.status(200).json(req.locals.newItem)
);

// delete Item

// detete person

// getItemSearch

// getPersonSearch

module.exports = router;
