USE GroceryListDB;

Create Table grocerylists
(
    id int not null
    auto_increment primary key,
    groceryList varchar
    (255),
    quantity varchar
    (255)
);