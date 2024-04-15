const mongoose = require('mongoose');

const serverGroupSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

module.exports = {
  serverGroupSchema
}