var express = require('express');
var router = express.Router();
const classModel = require('../model/classModel')
const teacherModel = require('../model/teacherModel')
const gradeModel = require('../model/gradeModel')
const tkbModel = require('../model/tkbModel')

/* GET home page. */
router.get('/',async function(req, res, next) {
  let classes = await classModel.find()
  let teachers = await teacherModel.find()
  let grades = await gradeModel.find()
  let tkbs = await tkbModel.find()
  res.render('index', { c:classes,teachers,grades,tkbs });
});

router.post('/update/:id',async (req,res) => {
  const body = req.body;
  let clid = body.idclass;
  
  for (let i = 1; i <= 157; i++) {
    let buoi = 'note' + i;

    // Lấy giá trị của input có tên là buoihoc
    let teacherIDtkb = req.body[buoi];

    // Tìm và cập nhật teacherModel dựa trên teacherID
    await classModel.findOneAndUpdate(
      { classID: clid },
      { $set: { [buoi]: body[buoi] } },
      { new: true }
    )
  }
  res.redirect('/')
})

// Route để lấy dữ liệu JSON
router.get('/json', async (req, res) => {
    const tkbdata = await classModel.find().lean();
    res.json(tkbdata);
});

router.get('/search',async function(req, res, next) {
  const searchText = req.query.name
  let c = await classModel.find({name:new RegExp(searchText,'i')})
  res.render('index', { c });
});

module.exports = router;
