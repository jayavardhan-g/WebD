const express= require('express');
const mongoose = require('mongoose');
const mongoURI= "mongodb://localhost:27017/blogsnnotes"
const connectToMongo= async ()=>{
    await mongoose.connect(mongoURI);
    console.log("Connected to Mongo")
}
connectToMongo();
const app = express();
const port = 5000;
app.use(express.json());

//cors
const cors=require('cors');
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello Nani')
})

app.use('/api/blogs',require('./routes/Blogs.js'))
app.use('/api/auth',require('./routes/Users.js'))

app.listen(port, () => {
  console.log(`blogsnnotes listening on port ${port}`)
})