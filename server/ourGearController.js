const db = require('./models/ourGearModels');

const ourGearController = {};

ourGearController.addNewPerson = (req, res, next) => {
  const b = req.body;
  const myQuery = 'INSERT INTO people (name, birth_date, pronouns, phy_address, email_address) VALUES($1, $2, $3, $4, $5);';
  const values = [b.name, b.birth_date, b.pronouns, b.phy_address, b.email_address];       
  
  db.query(myQuery, values)
    .then(data => {
      res.locals.person = data.rows[0];
      next();
      return;
    })
    .catch(err => {
      const defaultErr = {
        log: 'ourGearController.addNewPerson',
        message: {err: 'Error occured while adding Person to DB'}
      };
      return next(defaultErr);
    });
};

ourGearController.addNewItem = (req, res, next) => {
  const b = req.body;
  const myQuery = 'INSERT INTO items (common_name, manufacturer, product_id, description, owner) VALUES($1, $2, $3, $4, $5);';
  const values = [b.common_name, b.manufacturer, b.product_id, b.description, b.owner];       
  console.log(b);
  db.query(myQuery, values)
    .then(data => {
      res.locals.newItem = data.rows[0];
      next();
      return;
    })
    .catch(err => {
      const defaultErr = {
        log: 'ourGearController.addNewItem',
        message: {err: 'Error occured while adding Item to DB'}
      };
      return next(defaultErr);
    });
};

ourGearController.getPeople = (req, res, next) => {
  const myQuery = 'SELECT * FROM people;'; // change later so user-owner info is on one table, and owner_id is on items table

  db.query(myQuery)
    .then(data => {
      res.locals.people = data.rows;
      console.log(res.locals.people);
      next();
    })
    .catch(err => {
      const defaultErr = {
        log: 'ourGearController.getPeople',
        message: {err: 'Error occured while getting People from DB'}
      };
      return next(defaultErr);   
    });
};

ourGearController.getItems = (req, res, next) => {
  const myQuery = 'SELECT * FROM items;'; // change later so user-owner info is on one table, and owner_id is on items table

  db.query(myQuery)
    .then(data => {
      res.locals.items = data.rows;
      console.log(res.locals.items);
      next();
    })
    .catch(err => {
      const defaultErr = {
        log: 'ourGearController.getItems',
        message: {err: 'Error occured while getting items from DB'}
      };
      return next(defaultErr);   
    });
};

ourGearController.deletePerson = (req, res, next) => {
  // const { _id } = req.body;
  const myQuery = 'DELETE FROM people WHERE _id = $1;';
  const values = [req.body._id];

  db.query(myQuery, values)
    .then(data => {
      res.locals.person = data.rows[0];
      next();
      return;
    })
    .catch(err => {
      const defaultErr = {
        log: 'ourGearController.deletePerson',
        message: {err: 'Error occured while deleting person from DB'}
      };
      return next(defaultErr);
    });
}

ourGearController.deleteItem = (req, res, next) => {
  // const { item_id } = req.body;
  const myQuery = 'DELETE FROM items WHERE item_id = $1;';
  const values = [req.body.item_id];

  db.query(myQuery, values)
    .then(data => {
      res.locals.item = data.rows[0];
      next();
      return;
    })
    .catch(err => {
      const defaultErr = {
        log: 'ourGearController.deleteItem',
        message: {err: 'Error occured while deleting item from DB'}
      };
      return next(defaultErr);
    });
}

ourGearController.getItemSearch = (req, res, next) => {
  
}

ourGearController.getPersonSearch = (req, res, next) => {
  
}

module.exports = ourGearController;
