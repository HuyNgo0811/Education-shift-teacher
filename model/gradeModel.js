const mongoose = require('mongoose')
const grade = mongoose.Schema({
  'gradeID':String,
  'name':String
})
module.exports=mongoose.model('grades',grade)