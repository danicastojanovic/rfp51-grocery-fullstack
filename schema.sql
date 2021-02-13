
-- +-------------+-------------+------+-----+---------+----------------+
-- | Field       | Type        | Null | Key | Default | Extra          |
-- +-------------+-------------+------+-----+---------+----------------+
-- | id          | int         | NO   | PRI | NULL    | auto_increment |
-- | groceryItem | varchar(20) | YES  |     | NULL    |                |
-- | quantity    | int         | YES  |     | NULL    |                |
-- +-------------+-------------+------+-----+---------+----------------+

-- mysql> select * from groceryListItems
--     -> ;
-- +----+-------------+----------+
-- | id | groceryItem | quantity |
-- +----+-------------+----------+
-- |  1 | banana      |        5 |
-- |  2 | kiwi        |        3 |
-- |  3 | avocado     |        4 |
-- +----+-------------+----------+

-- SELECT groceryItem, quantity FROM groceryListItems;