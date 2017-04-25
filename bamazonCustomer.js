var inquirer = require('inquirer');
var mysql = require('mysql'),
    selecteditem;

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,

    user: 'root',
    password: '',
    database: 'Bamazon'
});
connection.connect(function(err) {
    if (err) throw err;
})

connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;

    console.log("Here are all of the items on sale:");
    for (var i = 0; i < res.length; i++) {
        console.log('--------------------------------');
        console.log("Item: " + res[i].id + ": " + res[i].productName);
        console.log("Price: $" + res[i].price);
    }
})

function purchase() {
    connection.query('select * from products', function(err, res) {
        if (err) throw err;
        inquirer.prompt([{
            type: 'list',
            name: 'purchase',
            message: 'Which product would you like to purchase (Press Ctrl-C to quit!)',
            choices: function() {
                var choiceArray = [];
                for (var i = 0; i < res.length; i++) {
                    choiceArray.push(res[i].productName);
                }
                return choiceArray;
            }
        }, {
            type: 'input',
            name: 'unitsBought',
            message: 'How many units would you like to buy?'
        }]).then(function(answers) {
            var chosenItem;
            for (var i = 0; i < res.length; i++) {
                if (res[i].productName === answers.purchase) {
                    chosenItem = res[i];
                }
            }
            if (chosenItem.stock_quantity >= parseInt(answers.unitsBought)) {
                var newQuantity = chosenItem.stock_quantity - answers.unitsBought;
                connection.query('Update products set ? where ?', [{
                    stock_quantity: newQuantity
                }, {
                    id: chosenItem.id
                }], function(err) {
                    if (err) throw err;
                    console.log('-----------------------------');
                    console.log("Order successful!");
                    console.log("Total cost: " + (answers.unitsBought * chosenItem.price));
                    console.log('-----------------------------');
                    purchase();
                })
            } else if (chosenItem.stock_quantity <= 0) {
                console.log('\033[2J');
                console.log("Sorry, item is SOLD OUT!");
            } else {
                console.log('\033[2J');
                console.log("Insufficient quantity. Try again...");
                purchase();
            }
        })
    })
}
purchase();