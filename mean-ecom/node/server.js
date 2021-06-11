const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
var http=require('http');


const app = express();

var corsOptions = {
  origin: "http://localhost:4200"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db=require('./app/models');
//const { io } = require("socket.io-client");
const Role=db.role;
//db.sequelize.sync({alter:true})



// simple route
/*app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});*/
// routes

//images upload
app.use(express.static('./public'))
app.get("/",(req,res)=>{
  res.sendFile(__dirname + './index.html');
});


//---------------------------------chat--------------------

var server = http.createServer(app);

var io = require('socket.io')('8081');

io.on('connection',(socket)=>{

    console.log('new connection made.');


    socket.on('join', function(data){
      //joining
      socket.join(data.room);

      console.log(data.user + 'joined the room : ' + data.room);

      socket.broadcast.to(data.room).emit('new user joined', {user:data.user, message:'has joined this room.'});
    });


    socket.on('leave', function(data){
    
      console.log(data.user + 'left the room : ' + data.room);

      socket.broadcast.to(data.room).emit('left room', {user:data.user, message:'has left this room.'});

      socket.leave(data.room);
    });

    socket.on('message',function(data){

      io.in(data.room).emit('new message', {user:data.user, message:data.message});
    })
});
/**
* Listen on provided port, on all network interfaces.
*/



// routes


require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
require('./app/routes/product.routes')(app);
require('./app/routes/sysUpload.routes')(app);
require('./app/routes/category.routes')(app);
require('./app/routes/banner.routes')(app);
require('./app/routes/checkout.routes')(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});