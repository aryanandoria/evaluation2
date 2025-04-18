const express = require('express');
const app = express();
const connectDB = require('./DB/connectDB');
const PORT = 5000;
const resultRoutes = require('./routes/resultRoute');


require('dotenv').config();
connectDB();
app.use(express.json());



app.use('/',resultRoutes);

app.listen(PORT,()=>{
    console.log("Server is listening to port 5000");
})
