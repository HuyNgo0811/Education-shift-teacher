var express = require('express');
var router = express.Router();
const gradeModel = require('../model/gradeModel')

/* GET home page. */
router.get('/',async function(req, res, next) {
  let grades = await gradeModel.find()
  res.render('grade/index', { grades });
});

router.get('/create', (req,res) => {
  res.render('grade/create')
})

router.post('/create', async (req,res) => {
  const body = req.body 
  let grade = new gradeModel({
    gradeID:body.gradeID,
    name:body.name
  })
  await grade.save()
  res.redirect('/grade')
})

router.get('/update/:id',async (req,res) => {
  let grade = await gradeModel.findById(req.params.id)
  res.render('grade/update',{g : grade})
})

router.post('/update/:id', async (req,res) => {
  const body = req.body 
  let grade = new gradeModel({
    _id:body.id,
    gradeID:body.gradeID,
    name:body.name,
    math:body.math,
    english:body.english,
    literature:body.literature,
    science:body.science
  })
  const id = req.params.id;
  await gradeModel.findByIdAndUpdate(id,grade) 
  res.redirect('/grade')
})

router.get('/delete/:id', async (req,res) => {
  await gradeModel.findByIdAndDelete(req.params.id)
  let grades = await gradeModel.find()
  res.render('grade', {grades})
})

module.exports = router;
