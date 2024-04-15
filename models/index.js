const mongoose = require('mongoose');
const config = require('config');
mongoose.Promise = Promise;

const settingsConnection = mongoose.createConnection(config.get('mongodb'));

const {serverSchema} = require('./server');
const {serverGroupSchema} = require('./server-group')
const {userActionSchema} = require('./user-action');
const {taskSchema} = require('./task');

const Server = settingsConnection.model('servers', serverSchema);
const ServerGroup = settingsConnection.model('serverGroups', serverGroupSchema)
const UserAction = settingsConnection.model('useractions', userActionSchema);
const Task = settingsConnection.model('tasks', taskSchema);


module.exports = {
  Server,
  ServerGroup,
  UserAction,
  Task,
};
