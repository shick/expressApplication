# expressApplication
---------------------------------------

My first Express application for learning purposes.

---------------------------------------
NOTE: [Node.js](https://nodejs.org/) is needed!
-----------------------------------------------

### Installation

Setting up the project requires some steps:

1. Clone this repo

2. Install all dependencies
```
npm install
```

### Run the application

Go to root folder of the project and execute the command
```
node server.js
```

If everything is ok, you can see in the terminal the message
```
Server running at http://localhost:3000/
```

This trivial project simply checks if in the URL the presence of 'name' parameter.
If 'name is setted, the result is
`
Hello 'name'
`
otherwise the result is 
`
What is your name?
`