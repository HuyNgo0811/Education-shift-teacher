var express = require('express');
var router = express.Router();
const classModel = require('../model/classModel')
const teacherModel = require('../model/teacherModel')

/* GET home page. */
router.get('/',async function(req, res, next) {
  res.render('tkb/index');
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
