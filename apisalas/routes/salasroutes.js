'use strict';
module.exports = function(app) {
  var rooms = require('../controllers/salascontroller');
  var auth = require('../controllers/AuthController');

  // todoList Routes
  app.route('/rooms')
    .get(rooms.list_all_rooms)
    .post(rooms.create_a_room)
    .put(rooms.update_a_room);

  app.route('/rooms/updateall')
    .put(rooms.update_rooms);

  app.route('/rooms/:roomName')
     .get(rooms.read_a_room)
     .delete(rooms.delete_a_room);

  //app.route('/api/auth/:username/:password')
  app.route('/auth')
     .post(auth.authUser);

  app.route('/users')
    .get(auth.list_all_users);
  
  app.route('/users/:user')
    .get(auth.get_an_user);
};