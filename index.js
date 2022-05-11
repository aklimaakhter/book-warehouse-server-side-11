const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config()
const port=process.env.PORT ||5000;

const app = express();

// middleware
app.use(cors());
app.use(express.json());



const uri = `mongodb+srv://${process.env.DB_USER}:<password>@cluster0.u5yan.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    console.log('book warehouse db connected')
    // perform actions on the collection object
    client.close();
});


app.get('/',(req,res)=>{
    res.send('Book warehouse server')
})

app.listen(port,()=>{
    console.log('Listening to port',port)
})