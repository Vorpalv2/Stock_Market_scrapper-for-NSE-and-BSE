two directories by the name of images and PDF are needed to store the files in respectively.

Documentation for different files and how to run the software

scrapper.js --> Documentation

Scrapper.js contains a function that takes two arguments: companyName and format. The function uses the puppeteer library to launch a browser instance, create a new page, add a custom CSS rule, and navigate to a URL based on the company name passed as an argument.

The if statement checks if the format argument is "pdf", in which case the function emulates a screen media type, generates a PDF of the page, and saves it to a file named after the company name with the ".pdf" extension. If the format argument is "png", the function takes a screenshot of the entire page and saves it to a file with the same name and extension.

The function returns the generated data, which can be used by the calling function.

servercall.routes.js --> Documentation

Is a backend server written in JavaScript that uses the Express framework. It has several routes defined, including:

A route for testing purposes (/postTest) that returns a JSON response with the text "Getting this data through /test route in backend".
A route for running a function (/runFunction) that logs the request body and returns a JSON response with the text "test".
A route for submitting a form (/form-submit) that checks if the request body contains data and, if so, runs the scrapScreener function with the form data.

The code imports the necessary modules (express, cors, and dotenv), defines a constant for the Express app, and sets up middleware for parsing JSON and URL-encoded data. It also sets up CORS to allow requests from the origin http://localhost:5173.

The code runs a function called scrapScreener that takes two arguments (companyName and fileType) which is being imported from scrapper.js

Some front end code as well which i wont be docmenting here so you can look at the code file and figure it out by yourself. Its a pretty simple logic.

Backend Server is on localhost:3000
FrontEnd Server is on localhost:5137 with is setup in cors to as origin point. PS. only the 5137 Port is setup in cors, other port wont work without changing them in cors object.
