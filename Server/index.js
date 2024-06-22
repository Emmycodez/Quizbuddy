import express from 'express';
import connectDB from './database/connectDB.js'
import { mongoDBURL } from './config.js';
import { User } from './database/models/User.js'


const app = express();

// middleware for parsing post requests to json
app.use(express.json());

const port  = process.env.PORT || 5100;

// connectDB(mongoDBURL);

app.get('/', (request,response) => {
  response.send('Welcome to my API');
  console.log("This is quizbuddys server");
  console.log("The quizbuddy server is ready to go");
});


app.post('/api/users', async(request, response) => {
  try {
    const { email, givenName, familyName } = request.body;
    if(!email || !givenName || !familyName){
      return response.status(400).send({ message: "send all required fields: email, givenName, familyName"})
    }

    const newUser = {
      email, givenName, familyName
    };
  
    const user = await User.create(newUser);
    return response.status(201).send(user);
  } catch (error) {
    console.log(error.message);
    response.status(500).send
    ({ message: error.message });
  }
});

a



app.listen(port, () => {
  console.log(`server is running on ${port}`);
});