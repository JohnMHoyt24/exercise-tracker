/*First, create the objects for each of the installed packages */
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

//require('dotenv').config();

const app = express();
const uri = `mongodb+srv://${process.env.ATLAS_USER}:${process.env.ATLAS_PW}
                @cluster0.rxelvz9.mongodb.net/?retryWrites=true&w=majority`;

async function connect(){
    try{
        mongoose.connect(uri);
        console.log("Connection to MongoDB established.");
    }
    catch(error){
        console.error(error);
    }
}

connect();

//Import the files from the routes folder.
const exerciseRouter = require('./routes/exercises');
const userRouter = require('./routes/users');

//If a user enters '/exercises' or '/users' in the URL it will load everything from the file.
app.use('/exercises', exerciseRouter);
app.use('/users', userRouter);

app.listen(3000, () =>{
    console.log("Server started on port 3000.");
});

/*app.use(cors());
app.use(express.json());

mongoose
    .connect(uri)
    .then(() => console.log( 'Database Connected' ))
    .catch(err => console.log( err ));


//When the app starts this information will get logged into the terminal.
//Run `nodemon server` on workspace/exercise-tracker/exercise-tracker
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});*/