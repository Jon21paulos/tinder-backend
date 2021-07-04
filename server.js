const express=require('express');
const mongoose=require('mongoose');
const Cards=require('./dbCards.js');
const Cors=require('cors');

const app=express();
const port=process.env.PORT||8001;

const connection_url = 'mongodb+srv://Jon21paulos:ff@cluster0.fhqvh.mongodb.net/tinderdb?retryWrites=true&w=majority';

app.use(express.json());
app.use(Cors());

mongoose.connect(connection_url,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
})

app.get("/",(req,res)=>res.status(200).send("HELLO"));

app.post('/tinder/cards',(req,res)=>{
    const dbCard=req.body;
    Cards.create(dbCard,(err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
})
app.get('/tinder/cards',(req,res)=>{
    Cards.find((err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
})

app.listen(port,()=>console.log(`listening on the port ${port}`));
