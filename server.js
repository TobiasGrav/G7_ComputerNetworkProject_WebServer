/**
 * main.js is the main file of the project, this wil run a server on your computer.
 */
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const net = require('net');


//which port number you want to listen on when starting the server
const portNumber = 25565;

var sockets = [];

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(__dirname + '/public'));

server.listen(portNumber, () => console.log('app available on http://localhost:' + portNumber));

/*
io.on('connection', (socket) => {
    
});
*/

const listen = net.createServer()

listen.listen(9000, () => {
    console.log('Listening on port 9000');
})

listen.on('connection', (socket) => {
    console.log('client connected');
    socket.setEncoding('utf8');

    socket.on('data', (data) => {
        console.log(data);
        io.emit('message', data);
    })

    socket.on('end', () => {
        console.log('client disconnected');
    })
})