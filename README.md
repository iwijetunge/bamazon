## Overview

This application is an Amazon-like storefront utilizing MySQL

The application will take in orders from customers and deplete stock from the store's inventory. 

If the quantity on hand is equal or greater than the requested qhantity, then the order is fulfiled and the quantity on hand is updated.

If the customer requestes a quantity more than what is on hand, the customer is notified and the database is not updated.

The "console.table"  npm package was used to display the tables in a more readable format.


# bamazon
Initial screen 

The next 4 screen shows the application in action where the customer requests a quantitiy that is less than or equal to the quantity on hand.

<img src="images/pic1.jpg">

"Fridge" was selected and "Enter" was pressed

<img src="images/pic2.png">


"3" was entered for qyantity


<img src="images/pic3.png">

When "Y" was entered the updated quantity is displayed

<img src="images/pic4.png">


The next screens shows the application in action when the customer requests a quantitiy that is more than the quantity on hand.

<img src="images/pic6.png">




