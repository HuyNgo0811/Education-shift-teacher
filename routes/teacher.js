var express = require('express');
var router = express.Router();
const teacherModel = require('../model/teacherModel')
const gradeModel = require('../model/gradeModel')

/* GET home page. */
router.get('/',async function(req, res, next) {
  let teachers = await teacherModel.find()
  let grades = await gradeModel.find()
  res.render('teacher/index', { teachers,grades });
});

router.get('/create',async (req,res) => {
  let grades = await gradeModel.find()
  res.render('teacher/create',{grades})
})

router.post('/create', async (req,res) => {
  const body = req.body 
  let teacherData = {
    teacherID: body.teacherid,
    name: body.name,
    subject: body.subject,
    timemin: body.min,
    timemax: body.max,
  }

  for(let i=1;i<=10;i++){
    let placeKey = 'place'+i;
    let placeValue = 'coso'+i;
    teacherData[placeKey] = body[placeValue];
  }
  for(let i=1;i<158;i++){
    let buoikey = 'buoi'+i;
    teacherData[buoikey] = body[buoikey];
  }
  for(let i=1;i<14;i++){
    let timekey = 'time'+i;
    teacherData[timekey] = body[timekey];
  }
  let sokhoi = body.sokhoi;
  for(let i=1;i<=sokhoi;i++){
    let gradeKey = 'grade'+i;
    let gradeValue = 'khoi'+i;
    teacherData[gradeKey] = body[gradeValue];
  }
  let teach = new teacherModel(teacherData);
  await teach.save()
  res.redirect('/teacher')
})

router.get('/update/:id',async (req,res) => {
  let teacher = await teacherModel.findById(req.params.id)
  let grades = await gradeModel.find()
  res.render('teacher/update',{t : teacher,grades})
})


router.post('/update/:id', async (req, res) => {
  const teacherIDtkb = req.body.teacherid; // Lấy ID của giáo viên từ params
  const id = req.params.id;
  // Lấy thông tin từ body của request
  const body = req.body;
  let teacherData = {
    teacherID: body.teacherid,
    name: body.name,
    subject: body.subject,
    timemin: body.min,
    timemax: body.max,
  };

  // Cập nhật thông tin địa điểm
  for(let i = 1; i <= 10; i++) {
    let placeKey = 'place' + i;
    let placeValue = 'coso' + i;
    teacherData[placeKey] = body[placeValue];
  }

  // Cập nhật thông tin thời gian
  for(let i = 1; i < 158; i++) {
    let buoikey = 'buoi' + i;
    teacherData[buoikey] = body[buoikey];
  }

  // Cập nhật thông tin buổi học
  for(let i = 1; i < 14; i++) {
    let timekey = 'time' + i;
    teacherData[timekey] = body[timekey];
  }

  // Cập nhật thông tin khối lớp
  let sokhoi = body.sokhoi;
  for(let i = 1; i <= sokhoi; i++) {
    let gradeKey = 'grade' + i;
    let gradeValue = 'khoi' + i;
    teacherData[gradeKey] = body[gradeValue];
  }

  try {
    // Sử dụng findOneAndUpdate để update dữ liệu trong MongoDB
    await teacherModel.findByIdAndUpdate(id,teacherData);

    // Redirect sau khi update thành công
    res.redirect('/teacher');
  } catch (error) {
    // Xử lý lỗi nếu có
    console.error(error);
    res.status(500).send('Có lỗi xảy ra khi cập nhật thông tin giáo viên.');
  }
});



router.get('/delete/:id', async (req,res) => {
  await teacherModel.findByIdAndDelete(req.params.id)
  let teachers = await teacherModel.find()
  let grades = await gradeModel.find()
  res.render('teacher', {teachers,grades})
})

module.exports = router;
