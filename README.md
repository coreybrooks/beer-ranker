# Texas Beer Wars

### Overview
Texas Beer Wars, or Beer Ranker, is an interactive web application created by Corey Brooks, Jeff Mensing, Toby Boyd and Karl Girling.  This app is designed to allow users to vote on their favorite beer in a battle to find the best native Texan beer.

This project was built using an MVC structure.  The backend of this full-stack application incorporates Node.js and Express to route get and post request.  The beer choices and the user choice history are both stored in MySQL and JawsDB using a Sequelize ORM.  After a user chooses a category, they are prompted to click on their favorite in a one-on-one battle until the ultimate winner for the category is chosen.  The app sends a counter for the overall winner to the database to increase the win count for the winning beer.  When the page is reset, the top five ranking beers are displayed.  There is also a "beer api" link in the header where an array of JSON objects for every beer can be viewed including the updated rank counter.


The final product is deployed on Heroku and uses basic SEO strategies.  The application can be viewed here: [Texas Beer Wars](https://texas-beer-wars.herokuapp.com/)
