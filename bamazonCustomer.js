require("dotenv").config();
const mysql = require("mysql");
const cTable = require("console.table");   //Displays tabular data as a table.
const inquirer = require("inquirer");

// Creat connection
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : process.env.mysqlusername,
    password : process.env.password,
    database : 'bamazon'
  });

// Starts the application and displayed the products table  
  function startApp(){
    connection.connect(function(err){
        if(err) throw err;

        displayProducts();
    });
  }

  // Displayed all rowes from the products table  
  function displayProducts(){
    connection.query('SELECT * from products', function (error, results, fields) {
        if (error) throw error;
        console.table(results);        
        const availableItems = results.map(product => product.product_name);

        promptCustomer(availableItems);
      });
  }

  // Allowed the user to select a product and quantity
  function promptCustomer(products){
    inquirer.prompt([{
        type: "list",
        message: "What would you like to buy?",
        choices: products,
        name: "itemToPurchase"
    }, 
{
    type: "input",
    message: "How many would you like to buy?",
    name: "purchaseQuantity"
}
]).then(answers => {
        checkAvailability(answers.itemToPurchase, answers.purchaseQuantity);
    })
  }

  //Queris the database to check quantity on hand for selected item
  function checkAvailability(item, quantity){
    connection.query(`SELECT * FROM products WHERE product_name=?`, [item], function(error, results, fields){
        if(error) throw error;        
        const inStock = results[0].stock_quantity;        

        if(quantity <= inStock){
            console.log(`congrats! You purchased ${quantity} ${item}s`);            
            return updateDatabase(item, inStock - quantity);
        }

        console.log("insufficient quantity!");
        return continuePrompt();
    })
  }
// If the customer's request can be fulfilled, then update the quantity on hand
function updateDatabase(item, updatedQuantity) {
    connection.query(`UPDATE products SET ? WHERE ?`, [
    {
        stock_quantity: updatedQuantity
    }, 
    {
        product_name: item
    }
], (error, results, fields) =>{
    if(error) throw error;

    return continuePrompt();
})
} 
// Allowes the user to continue shopping or quit the application
function continuePrompt(){
    inquirer.prompt([{
        type: "confirm",
        message: "Would you like to continue shopping?",
        name: "continue"
    }]).then(answer => {
        if(answer.continue){
            return displayProducts();
        }

        console.log("Thank you for shopping! Come back soon!");
        return connection.end();
    })
}

  startApp();
   
//   connection.end();