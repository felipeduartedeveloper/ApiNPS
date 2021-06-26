import express from 'express';

const app = express();

app.get("/users", (request, response) => {
  return response.json({message : "Server Online"})
});



app.listen(3333, () => console.log("Server is running"));