// Create a web server
// 1. Create a web server
// 2. Create a route for '/' and send a welcome message in response
// 3. Create a route for '/comments' and send all the comments as response
// 4. Create a route for '/comments/:id' and send the comment with given id as response
// 5. Start the server and listen on port 3000
// 6. Test the routes using Postman

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.status(200).send("Welcome");
});

const comments = [
  {
    id: 1,
    name: "John Doe",
    comment: "Hello World",
  },
  {
    id: 2,
    name: "Jane Doe",
    comment: "Hi, there",
  },
];

app.get("/comments", (req, res) => {
  res.status(200).send(comments);
});

app.get("/comments/:id", (req, res) => {
  const comment = comments.find((comment) => comment.id === parseInt(req.params.id));
  if (!comment) {
    res.status(404).send("Comment not found");
  }
  res.status(200).send(comment);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
