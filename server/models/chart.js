const mongoose = require('mongoose')

const Schema = mongoose.Schema

const chartSchema = new Schema({
  title: { type: String, required: true },
  
})

module.exports = mongoose.model('Chart', chartSchema)
