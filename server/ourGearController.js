const db = require('./models/ourGearModels');

const ourGearController = {};

ourGearController.addNewItem = (req, res, next) => {
  const b = req.body;
  const myQuery = 'INSERT INTO items (common_name, manufacturer, product_id, description, owner) VALUES($1, $2, $3, $4, $5);';
  const values = [b.common_name, b.manufacturer, b.product_id, b.description, b.owner];       
  
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

ourGearController.getMatch = (req, res, next) => {
  
}

module.exports = ourGearController;
