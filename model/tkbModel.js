const mongoose = require('mongoose')
const tkb = mongoose.Schema({
  'tkbID':String,
  'day1':String,
  'day2':String,
  'day3':String,
  'day4':String,
  'day5':String,
  'day6':String,
  'day7':String,
  'day8':String,
  'day9':String,
  'day10':String,
  'day11':String,
  'day12':String,
  'day13':String,
  'day14':String,
  'day15':String,
  'day16':String,
  'day17':String,
  'day18':String,
  'day19':String,
  'day20':String,
  'day21':String,
  'day22':String,
  'day23':String
})
module.exports=mongoose.model('tkbs',tkb)