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
  res.render('class/index', { classes,teachers,grades });
});

router.get('/create', async (req, res) => {
    let classes = await classModel.find();
    let teachers = await teacherModel.find();
    let grades = await gradeModel.find();
    let tkbs = await tkbModel.find();
    res.render('class/create', { classes, teachers, grades, tkbs });
});

// Route để lấy dữ liệu JSON
router.get('/json', async (req, res) => {
    const data = await teacherModel.find();
    res.json(data); // Gửi dữ liệu dạng JSON về client-side
});


router.post('/create', async (req,res) => {
  const body = req.body 
  let clssData = {
    classID: body.classID,
    name: body.name,
    grade:body.grade,
    place:body.place,
    time1:body.time1,
    time2:body.time2,
    manualmathtea:body.mathteacher,
    manualengtea: body.englishteacher,
    manuallittea: body.literatureteacher,
    manualscitea:body.scienceteacher,
    manualhistea:body.historyteacher,
    automathtea:body.mathteacherauto,
    autoengtea: body.englishteacherauto,
    autolittea: body.literatureteacherauto,
    autoscitea:body.scienceteacherauto,
    autohistea:body.historyteacherauto,
    note:body.note
  }
  // Lặp qua từ 1 đến 23 để gán giá trị cho subject1 đến subject23
  for (let i = 1; i <= 23; i++) {
    let subjectKey = 'subject' + i;
    clssData[subjectKey] = body[subjectKey];
  }
  for (let i = 1; i <= 23; i++) {
    let dayKey = 'day' + i;
    clssData[dayKey] = body[dayKey];
  }
  for (let i = 1; i <= 157; i++) {
    let buoiKey = 'buoi' + i;
    clssData[buoiKey] = body[buoiKey];
  }
  for (let i = 1; i <= 157; i++) {
    let buoihocKey = 'buoihoc' + i;
    clssData[buoihocKey] = body[buoihocKey];
  }
  for (let i = 1; i <= 157; i++) {
    let subdayKey = 'subday' + i;
    clssData[subdayKey] = body[subdayKey];
  }
  for (let i = 1; i < 157; i++) {
    let buoihocKey = 'note' + i;
    clssData[buoihocKey] = body[buoihocKey];
  }

  let clss = new classModel(clssData);
  await clss.save()

  for (let i = 1; i <= 157; i++) {
    let buoihoc = 'buoihoc' + i;
    let buoi = 'buoi' + i;

    // Lấy giá trị của input có tên là buoihoc
    let teacherIDtkb = req.body[buoihoc];

    // Tìm và cập nhật teacherModel dựa trên teacherID
    await teacherModel.findOneAndUpdate(
      { teacherID: teacherIDtkb },
      { $set: { [buoi]: body.classID } },
      { new: true }
    )
  }
  res.redirect('/class')
})

// Route để lấy dữ liệu JSON
router.get('/teacher', async (req, res) => {
  const teacher = await teacherModel.find();
  res.json(teacher);
});

router.get('/update/:id',async (req,res) => {
  let classes = await classModel.findById(req.params.id)
  let grades = await gradeModel.find()
  let t= await teacherModel.find()
  res.render('class/update',{c : classes,grades,t})
})

router.post('/update/:id', async (req,res) => {
  const body = req.body ;
  const id = req.params.id;
  let clssData = {
    classID: body.classID,
    name: body.name,
    grade:body.grade,
    place:body.place,
    time1:body.time1,
    time2:body.time2,
    manualmathtea:body.mathteacher,
    manualengtea: body.englishteacher,
    manuallittea: body.literatureteacher,
    manualscitea:body.scienceteacher,
    manualhistea:body.historyteacher,
    automathtea:body.mathteacherauto,
    autoengtea: body.englishteacherauto,
    autolittea: body.literatureteacherauto,
    autoscitea:body.scienceteacherauto,
    autohistea:body.historyteacherauto,
    note:body.note
  }
  // Lặp qua từ 1 đến 23 để gán giá trị cho subject1 đến subject23
  for (let i = 1; i <= 23; i++) {
    let subjectKey = 'subject' + i;
    clssData[subjectKey] = body[subjectKey];
  }
  for (let i = 1; i <= 23; i++) {
    let dayKey = 'day' + i;
    clssData[dayKey] = body[dayKey];
  }
  for (let i = 1; i <= 157; i++) {
    let buoiKey = 'buoi' + i;
    clssData[buoiKey] = body[buoiKey];
  }
  for (let i = 1; i <= 157; i++) {
    let buoihocKey = 'buoihoc' + i;
    clssData[buoihocKey] = body[buoihocKey];
  }
  for (let i = 1; i <= 157; i++) {
    let subdayKey = 'subday' + i;
    clssData[subdayKey] = body[subdayKey];
  }
  for (let i = 1; i < 157; i++) {
    let buoihocKey = 'note' + i;
    clssData[buoihocKey] = body[buoihocKey];
  }

  //let clss = new classModel(clssData);
  await classModel.findByIdAndUpdate(id,clssData);

  for (let i = 1; i <= 157; i++) {
    let buoihoc = 'buoihoc' + i;
    let buoi = 'buoi' + i;

    // Lấy giá trị của input có tên là buoihoc
    let teacherIDtkb = req.body[buoihoc];

    // Tìm và cập nhật teacherModel dựa trên teacherID
    await teacherModel.findOneAndUpdate(
      { teacherID: teacherIDtkb },
      { $set: { [buoi]: body.classID } },
      { new: true }
    )
  }
  res.redirect('/class')
})

router.get('/delete/:id', async (req,res) => {
  let classID = req.body.classID;
  // await teacherModel.findOneAndReplace()
  await classModel.findByIdAndDelete(req.params.id)
  for(let i=1; i<157; i++){
    let buoi = 'buoi'+i;
    await teacherModel.findOneAndReplace(
      { buoi: classID },
      { $set: {[buoi]:'free'} },
      { new: true }
    )
  }
  let teachers = await teacherModel.find()
  let grades = await gradeModel.find()
  let classes = await classModel.find()
  res.render('class', {classes,grades,teachers})
})

module.exports = router;
