var express = require('express');
var router = express.Router();
const tkbModel = require('../model/tkbModel')
const classModel = require('../model/classModel')
const teacherModel = require('../model/teacherModel')
const gradeModel = require('../model/gradeModel')

/* GET home page. */
router.get('/',async function(req, res, next) {
  let tkbs = await tkbModel.find()
  res.render('tkb/index', { tkbs });
});

router.get('/create', (req,res) => {
  res.render('tkb/create')
})

router.get('/teacher',async (req,res,next) => {
  let teachers = await teacherModel.find();
  res.render('tkb/teacher',{teachers})
})

router.get('/class',async (req,res) => {
  let classes = await classModel.find();
  res.render('tkb/class',{classes})
})

router.post('/create', async (req,res) => {
  const body = req.body 
  let tkb = new tkbModel({
    tkbID:body.tkbID,
    day1:body.time1,
    day2:body.time2,
    day3:body.time1,
    day4:body.time2,
    day5:body.time1,
    day6:body.time2,
    day7:body.time1,
    day8:body.time2,
    day9:body.time1,
    day10:body.time2,
    day11:body.time1,
    day12:body.time2,
    day13:body.time1,
    day14:body.time2,
    day15:body.time1,
    day16:body.time2,
    day17:body.time1,
    day18:body.time2,
    day19:body.time1,
    day20:body.time2,
    day21:body.time1,
    day22:body.time2,
    day23:body.time1,
  })
  await tkb.save()
  res.redirect('/tkb')
})

router.get('/delete/:id', async (req,res) => {
  await tkbModel.findByIdAndDelete(req.params.id)
  let tkbs = await tkbModel.find()
  res.render('tkb', {tkbs})
})

// Route để lấy dữ liệu JSON
router.get('/teacher-json', async (req, res) => {
  const teacherdata = await teacherModel.find();
  res.json(teacherdata);
});
router.get('/class-json', async (req, res) => {
  const classdata = await classModel.find();
  res.json(classdata);
});

module.exports = router;
