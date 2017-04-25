# HW-12 - Bamazon

## Description on how to use the app

* Make sure to install the npm packages using the attached package.json.
* From there, just run the file and follow the prompts!

## Requirements

### Overview

I created an Amazon-like storefront with a MySQL database. The app will take in orders from customers and deplete stock from the store's inventory.

#### Instructions

### Challenge #1: Customer View (Minimum Requirement)

1. Create a MySQL Database called `Bamazon`.

2. Then create a Table inside of that database called `products`.

3. The products table should have each of the following columns:

   * item_id (unique id for each product)

   * product_name (Name of product)

   * department_name

   * price (cost to customer)

   * stock_quantity (how much of the product is available in stores)

4. Populate this database with around 10 different products. (i.e. Insert "mock" data rows into this database and table).

5. Then create a Node application called `bamazonCustomer.js`. Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.

6. The app should then prompt users with two messages.

   * The first should ask them the ID of the product they would like to buy.
   * The second message should ask how many units of the product they would like to buy.

7. Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.

   * If not, the app should log a phrase like `Insufficient quantity!`, and then prevent the order from going through.

8. However, if your store _does_ have enough of the product, you should fulfill the customer's order.
   * This means updating the SQL database to reflect the remaining quantity.
   * Once the update goes through, show the customer the total cost of their purchase.



### Bonus:

* If a product reaches 0 inventory, have the application display a message that the item is sold out. Then, have the application automatically remove that item from the database.

* This will only occur after a customer requests the item one time after it reaches 0 inventory, allowing the manager to have the opportunity to add to the item inventory before it is removed from the database. 

## Technologies Used

- NPM packages
- Node.js
- MySQL Database
- Javascript
- CLI
0
