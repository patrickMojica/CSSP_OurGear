# DevNotes for OurGear

This is an app for sharing camping and adventure gear with your friends.

## Installation

Use the package manager [pip](https://pip.pypa.io/en/stable/) to install foobar.

```bash
nothing here yet
```

## Common SQL Queries
### Insert Row to Table
To insert a row into the people table with the provided values, you can use the following SQL query:
~~~~sql
INSERT INTO people (name, birth_date, pronouns, phy_address, email_address)
VALUES ('Patli_Mexica', '1109', 'They/Them', '1234 Moon way', 'siguanaba@protonmail.com');
~~~~
This query will insert a new row into the people table with the specified values for each column.

##

### Add ID Column to Table
To add a new column named item_id to the leftmost side of the table and ensure that it cannot be null and automatically increments for each new row, you can follow these steps:

First, alter the table to add the new column.
Then, update the new column to set it as a primary key.
Finally, set the column to be of type SERIAL, which automatically increments and ensures uniqueness.

Here's the SQL query to achieve this:

~~~~sql
ALTER TABLE your_table_name
ADD COLUMN item_id SERIAL PRIMARY KEY;
~~~~
Replace your_table_name with the actual name of your table. This query will add a new column named item_id to the leftmost side of the table, ensuring it cannot be null and automatically increments for each new row, ensuring uniqueness. The SERIAL type automatically generates a unique integer for each row inserted.

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)