const express = require('express');
const app = express();
const http = require('http');
const {Server} = require('socket.io');
const server = http.createServer(app);
const io = new Server(server);
const cors = require('cors');
const mongoose = require('mongoose');
const Message = require('./Message');
const path = require('path');

//use cors to allow cross origin resource sharing
app.use(
    cors({
      origin: 'http://localhost:3000',
      credentials: true,
    })
  );
app.use(express.static('build'));

app.use(async (req,res,next)=>{
if(req.url.includes('adminData')){
    const messages = await Message.find();
// console.log(messages)
if(messages){
    
    return res.send(messages);
}
else{
    return res.send("Some error occured");

}
}else if(req.url.includes('post')){


    app.post('/post',async (req,res)=>{
        
    console.log('here');
    // const {name,email,subject,message} = req.body;
    console.log(req);
const {name,email,subject,message} = req.body;
    const message_obj = new Message({
        name,
        email,
        subject,
        message
    });
    res.setHeader('Content-Type', 'application/json');
   await message_obj.save().then((result)=>{
        console.log("Info saved");
        if(result){
            return res.redirect('/');
        }

    }).catch((err)=>{
    console.log(err);
   return res.redirect('/');
    })

    console.log('React connected...'+"email :");

  
    })




}
else{

    res.sendFile(path.join(__dirname,'build','index.html'))
}
    
})
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// Database Connection
const URI = 'mongodb://localhost/Portfolio';

mongoose.connect(URI, {

useNewUrlParser: true, 

useUnifiedTopology: true 

}, err => {
if(err) throw err;
console.log('Connected to MongoDB!!!')
});








app.get('/adminData',async (req,res)=>{
    res.setHeader('Content-Type', 'application/json');
const messages = await Message.find();
const data = {messages: messages}
if(messages){
    console.log(messages)
    return res.json(data);
}
else{
    return res.json({err:"Some error occured"});

}
})


io.on('connection',(socket)=>{
    console.log("Connected....",socket.id);
})

app.listen(5000,()=>{
    console.log(`Server is running at http://localhost:5000`);
})

