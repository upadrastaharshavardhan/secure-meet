const path = require('path');
const express = require('express');
const http = require('http');
const moment = require('moment');
const socketio = require('socket.io');
const PORT = process.env.PORT || 8080;

const app = express();
const server = http.createServer(app);

const io = socketio(server);

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

let rooms = {};
let socketroom = {};
let socketname = {};
let micSocket = {};
let videoSocket = {};
let roomBoard = {};

io.on('connect', socket => {
  // Your socket.io code here
});

server.listen(PORT, () => console.log(`Server is up and running on port ${PORT}`)); 
