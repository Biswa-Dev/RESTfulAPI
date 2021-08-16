# RESTfulAPI
RESTful API that can /create/read/update/delete Product and Category data from a persistence database.
How to run the code?
Before running the code in your system make sure you have all the following software’s in your system:
o	A code editor e.g., Visual Studio Code 
o	A Command Lind Interface e.g., Hyper Terminal
o	An API client platform e.g., Postman
o	Make sure you have installed MongoDB in your system
o	A platform for using MongoDB database with GUI e.g., Robo 3T.
Make sure all of them are up to date.
•	Download the project directory in your system.
•	Make a database named “pcDB” with two collections “categories” and “products”. 
•	Create all the documents as shown above.
•	Before running app.js make sure node_modules folder is there inside RESTfulAPI directory. 
•	Run the app.js file using command line (hyper terminal).
•	Use Postman for making request and receiving resposes.

API Documentation
•	For reading a specific product and fetching its category.
Set method to get.
URL: localhost:3000/read/productName
Where productName is name of the product.

•	For creating new product and category.
Set method to post. 
URL: localhost:3000/create
And provide all the key value pair for product and category
productId: xxx // Number max=3
productName: xxx //String
qtyPerUnit: xxx // Number
unitPrice: xxx // Number
unitStock: xxx //Number
discontinued: xxx //Boolean(true/false)
categoryId: xxx // Number max = 3
categoryName: xxx // String

•	For reading all products and fetching their categories.
Set method to get.
URL: localhost:3000/readall
This will return an array of json objects for all categories.

•	For updating a specific product record.
Set method to put to replace a product document with new one.
URL: localhost:3000/update/productName
Where productName is name of the product.

Set method to patch to modify existing product document.
URL: localhost:3000/update/productName
Where productName is name of the product.

•	For deleting a specific product.
Set method to delete.
URL: localhost:3000/delete/productName
Where productName is name of the product.
