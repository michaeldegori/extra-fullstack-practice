# Extra | Fullstack Practice

This exercise is intended to practice all the topics of this week. You have to set up the backend, write the code for your endpoints and use that data in React. Try to do as many steps as possible without looking at the demo code or using other labs. 

## Iteration 1 | Project Setup
Create a root folder with 2 sub folders for your api and client. Use `create-react-app` and `npm init`. Populate your database via Compas with the books.json file.

## Iteration 2 | First Endpoint GET /hello-world
Initialize your api with Express. In case you forgot how, use the npm page to reference the boilerplate code. Make an endpoint that returns a simple hello world. Verify that you got this to work with either Postman or your browser. Don't forget about <a href="https://www.npmjs.com/package/cors">cors </a>.

## Iteration 3 | Model Book
Setup mongoose in express. Go over the lesson of Week 7 Day if you forgot how. Verify that you are connected to mongoose, model the book collection. Verify that you modelled the book correctly by using the `.find` method and console logging the result somewhere.

## Iteration 4 | Second Endpoint GET /books
Set up an extra endpoint with Express. The endpoint should respond with all books in the database. Verify that you got it right by using either postman or your browser.

## Iteration 5 | Connect React to your Backend
Install axios in the client directory and fire up React. Remember that you need to have your backend running first. Request all the movies by using `axios.get` in the callback of `useEffect`. 

## Iteration 6 | Render a List of all Book Titles
This iteration continues with iteration 5. Put all the books in state with `useState`. Now render a list of all book titles.

## Iteration 7 | Third Endpoint POST /book
In nodeJs, create another endpoint for posting data. Use `app.post` or `router.post`. This endpoint should read the book data from `req.body` and insert into the database by using the `Book.create`.  Remember that you need to use body-parser. The cors settings are also a bit tighter for posting data, which is why you need to use `app.options('*', cors()) // include before other routes`. Verify that your endpoint is working by using Postman. Don't forget to change "GET" into "POST". You can enter the JSON data in: body=>raw=>select json (default is text).

## Iteration 8 | Create an add Book Component in React
Use an `<input name='nameofproperty'>` field for every Book property. Control the data of the input fields through state. Use handleChange event listeners and remember you can extract the value through `e.target.value` and find out which input field triggered the eventHandler through `e.target.name`.

## Iteration 9 | Add the Book When you Submit the Form
Create a submit button in the add Book Component. If you click the that button, you should post the book data you've stored in the state to the POST endpoint. Use axios for this. Do not forget to use `e.preventDefault()` in the onClick or onSubmit event handler.
