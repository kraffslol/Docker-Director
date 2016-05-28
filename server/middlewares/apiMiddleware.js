process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
const express = require('express');
const router = express.Router();
const Docker = require('dockerode');
const fs = require('fs');

/* socket.on('connection', function(client){
  console.log('client connected');
}); */

const docker = new Docker({
 host: '188.166.28.91',
 port: process.env.DOCKER_PORT || 2376,
 ca: fs.readFileSync('/Users/rickard/.docker/ca.pem'),
 cert: fs.readFileSync('/Users/rickard/.docker/cert.pem'),
 key: fs.readFileSync('/Users/rickard/.docker/key.pem')
});

function getContainers(res) {
  docker.listContainers({all: true}, function(err, containers) {
    if(err) res.json(500, { error: 'Couldnt fetch containers' });
    res.json({ containers });
  });
}

function getContainer(req, res) {
  var container = docker.getContainer(req.params.id);
  container.inspect(function (err, container) {
    if(err) res.json(500, { error: 'Couldnt fetch container' });
    res.json({ container });
  });
}

const addRoutes = (io) => {
  router.get('/containers', (req, res, next) => getContainers(res));
  router.get('/container/:id', (req, res, next) => getContainer(req, res));

  io.on('connection', (socket) => {
    console.log('Client connected');

    const container = docker.getContainer('f6a4de311146cc4120d9b71e23a13173fb04feedb2264c745c104d7be0f0ce31');
    console.log(container);
    container.attach({stream: true, stdout: true, stderr: true}, function (err, stream) {
      //stream.pipe(process.stdout);
      stream.on('data', (buf) => {
        socket.emit('test', { buffer: new Int8Array(buf) });
      })
      // socket.emit('test', { buffer: stream.pipe(socket) })
    });
  });
};

module.exports = (io) => {
  addRoutes(io);
  return router
};
