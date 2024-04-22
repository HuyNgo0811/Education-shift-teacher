let setTeacher = document.getElementsByName('teacherday');
let gradeSelect = document.querySelector("#grades");
let placeSelect = document.querySelector("#place");
let time1Select = document.querySelector('#time1');
let time2Select = document.querySelector('#time2');
let manualmathElement = document.getElementById('mathteacher');
let manuallitElement = document.getElementById('literatureteacher');
let manualengElement = document.getElementById('englishteacher');
let manualsciElement = document.getElementById('scienceteacher');
let manualhisElement = document.getElementById('historyteacher');
let mathnum = document.getElementById('math');
let englishnum = document.getElementById('english');
let literaturenum = document.getElementById('literature');
let sciencenum = document.getElementById('science');
let historynum = document.getElementById('history');
let statusautoagain = document.getElementById('statusAutoAgain');
let statusmanualagain = document.getElementById('statusManualAgain');
let statusfindteacher = document.getElementById('statusFindTeacher');
let statussettkb = document.getElementById('statusSetTkb');
let buoigv = {
  bgv1: [], bgv2: [], bgv3: [], bgv4: [], bgv5: [], bgv6: [], bgv7: [], bgv8: [], bgv9: [], bgv10: [], bgv11: [], bgv12: [], bgv13: [], bgv14: [], bgv15: [], bgv16: [], bgv17: [], bgv18: [], bgv19: [], bgv20: [], bgv21: [], bgv22: [], bgv23: []
};
let backupgv = {
  bgv1: [], bgv2: [], bgv3: [], bgv4: [], bgv5: [], bgv6: [], bgv7: [], bgv8: [], bgv9: [], bgv10: [], bgv11: [], bgv12: [], bgv13: [], bgv14: [], bgv15: [], bgv16: [], bgv17: [], bgv18: [], bgv19: [], bgv20: [], bgv21: [], bgv22: [], bgv23: []
};
let manualgv = [];
let autoteachereachday = [];
const strings = [];
let shuffled = [];
document.addEventListener('DOMContentLoaded', function(){
  //khai báo các nút bấm
  const addManualDiv = document.querySelector("#addmanual");
  const addAutoDiv = document.querySelector("#addauto");
  const manualFields = document.querySelector("#manualFields");
  const autoFields = document.querySelector("#autoFields");
  const teacherEachdayAuto= document.querySelector('#teachereachdayauto');
  const teacherEachdayManual = document.querySelector('#teachereachdaymanual')
  const findTeacher = document.querySelector('#findteacher')
  const settkb = document.querySelector('#settkb');
  const autoagain = document.querySelector('#autoagain');
  const manualagain = document.querySelector('#manualagain');
  const createteacher = document.querySelector('#createteacher');

  // add event button
  // Bước 1: Tạo thời khóa biểu cho từng buổi
  settkb.addEventListener('click', function(){
    event.preventDefault();
    // for(var i = 1; i < 157; i++) {
    //   let tkbbuoi=document.getElementById('buoi'+i);
    //   tkbbuoi[i].value = '';
    // }
    tkbBuoi1(); // Gán day1 cho buoi1 -> buoi13
    tkbBuoi2(); // Gán day2 cho buoi1 -> buoi13
    maketkb();  // Gán day3 -> day24 cho buoi14 -> buoi156
    statussettkb.innerText='Set thời khóa biểu roài nhá';
  })

  //Bước 2: Tìm giáo viên free và gán vào buoigv
  findTeacher.addEventListener('click',function(){
    event.preventDefault();
    autoteacher(); // Gán các gv thỏa đk vào object buoigv{} và backupgv{}
    statusfindteacher.innerText='Tìm được giáo viên rảnh gùi nhé!!!';
  })

  //Bước 3: chọn thêm gv thủ công hoặc auto
  // Thêm thủ công
  addManualDiv.addEventListener("click", function() {
    event.preventDefault();
    if (manualFields.style.display === "none" || manualFields.style.display === "") {
      manualFields.style.display = "block";
    } 
    autoFields.style.display = "none";
    manualteacher();
  });
  // Thêm thủ công
  createteacher.addEventListener('click', () => {
    event.preventDefault();
    teacherEachdayManual.style.display = 'block';
    createManualTeacher();
    showteachereachdaymanual();
  })

  // Thêm tự động
  addAutoDiv.addEventListener("click", function() {
    event.preventDefault();
    if (autoFields.style.display === "none" || autoFields.style.display === "") {
      autoFields.style.display = "block";
      teacherEachdayAuto.style.display = 'block';
      document.getElementById('countautosubject').style.display = 'block';
    } 
    manualFields.style.display = "none";
    createAutoTeacher();
    showteachereachday();
  });

  //Bước 4: Gán lại giáo viên
  // Gán lại thủ công
  manualagain.addEventListener("click", function() {
    event.preventDefault();
    manualTeacherAgain();
    statusmanualagain.innerText='Đã gán lại giáo viên ùi nhé';
    document.getElementById('submit').disabled=false;
  })  
  
  // Gán lại tự động
  autoagain.addEventListener("click", function() {
    event.preventDefault();
    autoTeacherAgain();
    statusautoagain.innerText='Đã gán lại giáo viên ùi nhé';
    document.getElementById('submit').disabled=false;
  })
  
  
  

})

function tkbBuoi1() {
  let selectedtime1 = time1Select.value;
    switch(selectedtime1){
      case 'Thứ 2':
        document.getElementById('buoihoc1').value = 'day1';
        break;
      case 'Thứ 3':
        document.getElementById('buoihoc2').value = 'day1';
        break;
      case 'Thứ 4':
        document.getElementById('buoihoc3').value = 'day1';
        break;
      case 'Thứ 5':
        document.getElementById('buoihoc4').value = 'day1';
        break;
      case 'Thứ 6':
        document.getElementById('buoihoc5').value = 'day1';
        break;
      case 'Thứ 7 - 1':
        document.getElementById('buoihoc6').value = 'day1';
        break;
      case 'Thứ 7 - 2':
        document.getElementById('buoihoc7').value = 'day1';
        break;
      case 'Thứ 7 - 3':
        document.getElementById('buoihoc8').value = 'day1';
        break;
      case 'Thứ 7 - 4':
        document.getElementById('buoihoc9').value = 'day1';
        break;
      case 'Chủ nhật - 1':
        document.getElementById('buoihoc10').value = 'day1';
        break;
      case 'Chủ nhật - 2':
        document.getElementById('buoihoc11').value = 'day1';
        break;
      case 'Chủ nhật - 3':
        document.getElementById('buoihoc12').value = 'day1';
        break;
      case 'Chủ nhật - 4':
        document.getElementById('buoihoc13').value = 'day1';
        break;
      default:
        document.getElementById('buoihoc1').value = '' ; 
    }
} //done
function tkbBuoi2() {
  let selectedtime2 = time2Select.value;
    switch(selectedtime2){
      case 'Thứ 2':
        document.getElementById('buoihoc1').value = 'day2';
        break;
      case 'Thứ 3':
        document.getElementById('buoihoc2').value = 'day2';
        break;
      case 'Thứ 4':
        document.getElementById('buoihoc3').value = 'day2';
        break;
      case 'Thứ 5':
        document.getElementById('buoihoc4').value = 'day2';
        break;
      case 'Thứ 6':
        document.getElementById('buoihoc5').value = 'day2';
        break;
      case 'Thứ 7 - 1':
        document.getElementById('buoihoc6').value = 'day2';
        break;
      case 'Thứ 7 - 2':
        document.getElementById('buoihoc7').value = 'day2';
        break;
      case 'Thứ 7 - 3':
        document.getElementById('buoihoc8').value = 'day2';
        break;
      case 'Thứ 7 - 4':
        document.getElementById('buoihoc9').value = 'day2';
        break;
      case 'Chủ nhật - 1':
        document.getElementById('buoihoc10').value = 'day2';
        break;
      case 'Chủ nhật - 2':
        document.getElementById('buoihoc11').value = 'day2';
        break;
      case 'Chủ nhật - 3':
        document.getElementById('buoihoc12').value = 'day2';
        break;
      case 'Chủ nhật - 4':
        document.getElementById('buoihoc13').value = 'day2';
        break;
      default:
        document.getElementById('buoihoc1').value = '' ; 
    }
} //done
function maketkb() {
  let a=0,b=0;
  for(let i=1;i<14;i++){
    let input='buoihoc'+i; 
    if(document.getElementById(input).value === 'day1'){
      a=i;
    }
    if(document.getElementById(input).value === 'day2'){
      b=i;
    }
  }
  for(let x=a+13 , y=b+13 , z=3 ; x<157 && y<157 && z<=24 ; x+=13 , y+=13 , z++){
    let input1 = 'buoihoc'+x;
    let input2 = 'buoihoc'+y;
    let output = 'day'+z;
    document.getElementsByName(input1)[0].value=output;
    z++;
    output= 'day'+z;
    document.getElementsByName(input2)[0].value=output;
  }
} //done
function autoteacher() {
  let selectGrade = gradeSelect.value;
  let selectedPlace = placeSelect.value;
  fetch('/class/teacher')
  .then(response => response.json())
  .then(teacher => {
    console.log(teacher)
    teacher.forEach(t => {
      for(let g=1 ;g<9;g++){
        let gradekey = 'grade'+g;
        for(let p=1;p<11;p++){
          let placekey ='place'+p;
          for(let b=1;b<157;b++){
            let buoi='buoi'+b;
            let buoivalue = document.getElementById('buoihoc'+b).value;
              if(t[gradekey] === selectGrade && t[placekey] === selectedPlace && buoivalue !== '' && t[buoi] === 'free'){
                console.log('co gv phu hop')
                if(buoivalue === 'day1'){
                  buoigv.bgv1.push(t.teacherID);
                  backupgv.bgv1.push(t.teacherID);
                }
                if(buoivalue === 'day2'){
                  buoigv.bgv2.push(t.teacherID);
                  backupgv.bgv2.push(t.teacherID);
                }
                if(buoivalue === 'day3'){
                  buoigv.bgv3.push(t.teacherID);
                  backupgv.bgv3.push(t.teacherID);
                }
                if(buoivalue === 'day4'){
                  buoigv.bgv4.push(t.teacherID);
                  backupgv.bgv4.push(t.teacherID);
                }
                if(buoivalue === 'day5'){
                  buoigv.bgv5.push(t.teacherID);
                  backupgv.bgv5.push(t.teacherID);
                }
                if(buoivalue === 'day6'){
                  buoigv.bgv6.push(t.teacherID);
                  backupgv.bgv6.push(t.teacherID);
                }
                if(buoivalue === 'day7'){
                  buoigv.bgv7.push(t.teacherID);
                  backupgv.bgv7.push(t.teacherID);
                }
                if(buoivalue === 'day8'){
                  buoigv.bgv8.push(t.teacherID);
                  backupgv.bgv8.push(t.teacherID);
                }
                if(buoivalue === 'day9'){
                  buoigv.bgv9.push(t.teacherID);
                  backupgv.bgv9.push(t.teacherID);
                }
                if(buoivalue === 'day10'){
                  buoigv.bgv10.push(t.teacherID);
                  backupgv.bgv10.push(t.teacherID);
                }
                if(buoivalue === 'day11'){
                  buoigv.bgv11.push(t.teacherID);
                  backupgv.bgv11.push(t.teacherID);
                }
                if(buoivalue === 'day12'){
                  buoigv.bgv12.push(t.teacherID);
                  backupgv.bgv12.push(t.teacherID);
                }
                if(buoivalue === 'day13'){
                  buoigv.bgv13.push(t.teacherID);
                  backupgv.bgv13.push(t.teacherID);
                }
                if(buoivalue === 'day14'){
                  buoigv.bgv14.push(t.teacherID);
                  backupgv.bgv14.push(t.teacherID);
                }
                if(buoivalue === 'day15'){
                  buoigv.bgv15.push(t.teacherID);
                  backupgv.bgv15.push(t.teacherID);
                }
                if(buoivalue === 'day16'){
                  buoigv.bgv16.push(t.teacherID);
                  backupgv.bgv16.push(t.teacherID);
                }
                if(buoivalue === 'day17'){
                  buoigv.bgv17.push(t.teacherID);
                  backupgv.bgv17.push(t.teacherID);
                }
                if(buoivalue === 'day18'){
                  buoigv.bgv18.push(t.teacherID);
                  backupgv.bgv18.push(t.teacherID);
                }
                if(buoivalue === 'day19'){
                  buoigv.bgv19.push(t.teacherID);
                  backupgv.bgv19.push(t.teacherID);
                }
                if(buoivalue === 'day20'){
                  buoigv.bgv20.push(t.teacherID);
                  backupgv.bgv20.push(t.teacherID);
                }
                if(buoivalue === 'day21'){
                  buoigv.bgv21.push(t.teacherID);
                  backupgv.bgv21.push(t.teacherID);
                }
                if(buoivalue === 'day22'){
                  buoigv.bgv22.push(t.teacherID);
                  backupgv.bgv22.push(t.teacherID);
                }
                if(buoivalue === 'day23'){
                  buoigv.bgv23.push(t.teacherID);
                  backupgv.bgv23.push(t.teacherID);
                }
              }
          }
        }
      }
      
    })
    
    // createManualTeacher();
    // showteachereachdaymanual();
  })
} //done
function createAutoTeacher(){
  let numofmath = parseInt(mathnum.value);
  let numofenglish = parseInt(englishnum.value);
  let numofliterature = parseInt(literaturenum.value);
  let numofscience = parseInt(sciencenum.value);
  let numofhistory = parseInt(historynum.value);
  let nummath = 0;
  let numeng = 0;
  let numlit = 0;
  let numsci = 0;
  let numhis = 0;
  for(let index = 1; index<24;index++){
    let bgv='bgv'+index;
    let day='day'+index;
    let firstteacher =null;
    // gán biến cho firstteacher
    for(let i=0;i<=buoigv[bgv].length;i++){
      if(typeof buoigv[bgv][i] === 'string'){
        if(buoigv[bgv][i].includes('1')) {
          firstteacher = buoigv[bgv][i];
          break;
        }
      }
    }
    if(firstteacher === null){
      for(let i=0;i<=buoigv[bgv].length;i++){
        if(typeof buoigv[bgv][i] === 'string'){
          if(buoigv[bgv][i].includes('2')) {
            firstteacher = buoigv[bgv][i];
            break;
          }
        }
      }
    }
    if(firstteacher !== null){
      let space = firstteacher.lastIndexOf(' ');
      let subject = firstteacher.substring(0, space);
      //gán gv vào môn vào tkb tổng
      for(let b=1;b<157;b++){
        let buoi='buoi'+b;
        let buoihoc='buoihoc'+b;
        let subday = 'sub'+b;
        if(document.getElementById(buoihoc).value === day){
          console.log('gan gv vo buoi hoc ne '+buoi)
          document.getElementById(buoi).value=firstteacher;
          autoteachereachday.push(firstteacher);
          document.getElementById(subday).value=subject;
          if(subject === 'Toán'){
            nummath++;
            if(nummath === numofmath){
              for(let d=index;d<24;d++){
                let bgvx = 'bgv'+d;
                if(buoigv.hasOwnProperty(bgvx)){
                  buoigv[bgvx] = buoigv[bgvx].filter(item => !item.includes('Toán'));
                  console.log('Xóa Toán')
                  console.log(nummath);
                }
              }
              // console.log(buoigv);
            }
          }
          if(subject === 'Anh'){
            numeng++;
            if(numeng === numofenglish){
              for(let d=index;d<24;d++){
                let bgvx = 'bgv'+d;
                if(buoigv.hasOwnProperty(bgvx)){
                  buoigv[bgvx] = buoigv[bgvx].filter(item => !item.includes('Anh'));
                  // console.log('Xóa Anh')
                }
              }
              // console.log(buoigv);
            }
          }
          if(subject === 'Văn'){
            numlit++;
            if(numlit === numofliterature){
              for(let d=index;d<24;d++){
                let bgvx = 'bgv'+d;
                if(buoigv.hasOwnProperty(bgvx)){
                  buoigv[bgvx] = buoigv[bgvx].filter(item => !item.includes('Văn'));
                  // console.log('Xóa Văn')
                }
              }
              // console.log(buoigv);
            }
          }
          if(subject === 'KH'){
            numsci++;
            if(numsci === numofscience){
              for(let d=index;d<24;d++){
                let bgvx = 'bgv'+d;
                if(buoigv.hasOwnProperty(bgvx)){
                  buoigv[bgvx] = buoigv[bgvx].filter(item => !item.includes('KH'));
                  // console.log('Xóa Khoa học')
                }
              }
              // console.log(buoigv);
            }
          }
          if(subject === 'LS'){
            numhis++;
            if(numhis === numofhistory){
              for(let d=index;d<24;d++){
                let bgvx = 'bgv'+d;
                if(buoigv.hasOwnProperty(bgvx)){
                  buoigv[bgvx] = buoigv[bgvx].filter(item => !item.includes('LS'));
                  // console.log('Xóa Lịch Sử')
                }
              }
              // console.log(buoigv);
            }
          }
        }
        //các hàm xóa khi đủ số môn
        // if(nummath == numofmath){
        //   for(let d=index;d<24;d++){
        //     let bgvx = 'bgv'+d;
        //     if(buoigv.hasOwnProperty(bgvx)){
        //       buoigv[bgvx] = buoigv[bgvx].filter(item => !item.includes('Toán'));
        //       // console.log('Xóa Toán')
        //     }
        //   }
        //   // console.log(buoigv);
        // }
        // if(numeng == numofenglish){
        //   for(let d=index;d<24;d++){
        //     let bgvx = 'bgv'+d;
        //     if(buoigv.hasOwnProperty(bgvx)){
        //       buoigv[bgvx] = buoigv[bgvx].filter(item => !item.includes('Anh'));
        //       // console.log('Xóa Anh')
        //     }
        //   }
        //   // console.log(buoigv);
        // }
        // if(numlit == numofliterature){
        //   for(let d=index;d<24;d++){
        //     let bgvx = 'bgv'+d;
        //     if(buoigv.hasOwnProperty(bgvx)){
        //       buoigv[bgvx] = buoigv[bgvx].filter(item => !item.includes('Văn'));
        //       // console.log('Xóa Văn')
        //     }
        //   }
        //   // console.log(buoigv);
        // }
        // if(numsci == numofscience){
        //   for(let d=index;d<24;d++){
        //     let bgvx = 'bgv'+d;
        //     if(buoigv.hasOwnProperty(bgvx)){
        //       buoigv[bgvx] = buoigv[bgvx].filter(item => !item.includes('KH'));
        //       // console.log('Xóa Khoa học')
        //     }
        //   }
        //   // console.log(buoigv);
        // }
        // if(numhis == numofhistory){
        //   for(let d=index;d<24;d++){
        //     let bgvx = 'bgv'+d;
        //     if(buoigv.hasOwnProperty(bgvx)){
        //       buoigv[bgvx] = buoigv[bgvx].filter(item => !item.includes('LS'));
        //       // console.log('Xóa Lịch Sử')
        //     }
        //   }
        //   // console.log(buoigv);
        // }
      }   
    } 
  }
  console.log(autoteachereachday);
  checkgvauto(autoteachereachday)
}
function showteachereachdaymanual() {
  for(let i = 0;i<23;i++){
    let idinput = 'manualteacherdaysetted'+ (i+1);
    document.getElementById(idinput).value=shuffled[i];
  }
  for( let i=1;i<24;i++){
    let selectElement = document.getElementById('manualteacherday'+i);
    for(let value of manualgv){
      let option = document.createElement("option");
      option.text = value;
      option.value = value;
      selectElement.appendChild(option);
    }
  }
} //done
function showteachereachday() {
  for(let i = 0;i<23;i++){
    let idinput = 'autoteacherdaysetted'+ (i+1);
    document.getElementById(idinput).value=autoteachereachday[i];
  }
  // Lặp qua từng cặp key-value trong đối tượng bgv
  for (let key in backupgv) {
    if (backupgv.hasOwnProperty(key)) {
        let selectId = key.replace('bgv', ''); // Lấy số chỉ mục từ key
        let selectElement = document.getElementById(`autoteacherday${selectId}`);

        // Tạo các option từ mảng giá trị trong bgv[key]
        for (let value of backupgv[key]) {
            let option = document.createElement("option");
            option.text = value;
            option.value = value;
            selectElement.appendChild(option);
        }
    }
  }
}

function autoTeacherAgain() {
  for(let i=1;i<157;i++){
    for(let k=1;k<24;k++){
      let day='day'+k;
      if(document.getElementById('buoihoc'+i).value === day){
        document.getElementById('buoi'+i).value = document.getElementById('autoteacherdaysetted'+k).value;

      }
    }
  }
} //done
function manualTeacherAgain() {
  for(let i=1;i<157;i++){
    for(let k=1;k<24;k++){
      let day='day'+k;
      if(document.getElementById('buoihoc'+i).value === day){
        let teacher = document.getElementById('manualteacherdaysetted'+k).value;
        let space = teacher.lastIndexOf(' ');
        let subject = teacher.substring(0, space);
        document.getElementById('buoi'+i).value = teacher;
        document.getElementById('sub'+i).value=subject;
      }
    }
  }
} //done
function manualteacher() {
  let selectedGrade = gradeSelect.value;
  let selectedPlace = placeSelect.value;
  let selectedtime1 = time1Select.value;
  let selectedtime2 = time2Select.value;
  let matchedmathTeachers = [];
  let matchedengTeachers = [];
  let matchedlitTeachers = [];
  let matchedsciTeachers = [];
  let matchedhisTeachers = [];
  fetch('/class/teacher')
    .then(response => response.json())
    .then(data => {
      data.forEach(t => {
        for (let i = 1; i <= 10; i++) {
          const gradeKey = 'grade' + i;
          for (let j = 1; j <= 10; j++) {
            const placeKey = 'place' + j;
            if (t[gradeKey] === selectedGrade && t[placeKey] === selectedPlace && t.subject === "math") {
              for (let x = 1; x < 14; x++) {
                const time1Key = 'time' + x;
                if (t[time1Key] === selectedtime1 || t[time1Key] === selectedtime2) {
                  matchedmathTeachers.push(t.teacherID); // Thêm tên vào mảng kết quả
                  manualgv.push(t.teacherID);
                  break; // Dừng vòng lặp khi tìm thấy một kết quả
                }
              }
            }
            if (t[gradeKey] === selectedGrade && t[placeKey] === selectedPlace && t.subject === "english") {
              for (let x = 1; x < 14; x++) {
                const time1Key = 'time' + x;
                if (t[time1Key] === selectedtime1 || t[time1Key] === selectedtime2) {
                  matchedengTeachers.push(t.teacherID); // Thêm tên vào mảng kết quả
                  manualgv.push(t.teacherID);
                  break; // Dừng vòng lặp khi tìm thấy một kết quả
                }
              }
            }
            if (t[gradeKey] === selectedGrade && t[placeKey] === selectedPlace && t.subject === "literature") {
              for (let x = 1; x < 14; x++) {
                const time1Key = 'time' + x;
                if (t[time1Key] === selectedtime1 || t[time1Key] === selectedtime2) {
                  matchedlitTeachers.push(t.teacherID); // Thêm tên vào mảng kết quả
                  manualgv.push(t.teacherID);
                  break; // Dừng vòng lặp khi tìm thấy một kết quả
                }
              }
            }
            if (t[gradeKey] === selectedGrade && t[placeKey] === selectedPlace && t.subject === "science") {
              for (let x = 1; x < 14; x++) {
                const time1Key = 'time' + x;
                if (t[time1Key] === selectedtime1 || t[time1Key] === selectedtime2) {
                  matchedsciTeachers.push(t.teacherID); // Thêm tên vào mảng kết quả
                  manualgv.push(t.teacherID);
                  break; // Dừng vòng lặp khi tìm thấy một kết quả
                }
              }
            }
            if (t[gradeKey] === selectedGrade && t[placeKey] === selectedPlace && t.subject === "history") {
              for (let x = 1; x < 14; x++) {
                const time1Key = 'time' + x;
                if (t[time1Key] === selectedtime1 || t[time1Key] === selectedtime2) {
                  matchedhisTeachers.push(t.teacherID); // Thêm tên vào mảng kết quả
                  manualgv.push(t.teacherID);
                  break; // Dừng vòng lặp khi tìm thấy một kết quả
                }
              }
            }
          }
        }
      });
      manualmathElement.innerHTML = ''; // Xóa tất cả các option hiện có
      manualengElement.innerHTML = '';
      manuallitElement.innerHTML = '';
      manualsciElement.innerHTML = '';
      manualhisElement.innerHTML = '';
      matchedmathTeachers.forEach(teacherName => {
        const option = document.createElement("option");
        option.value = teacherName;
        option.textContent = teacherName;
        manualmathElement.appendChild(option);
      });
      matchedengTeachers.forEach(teacherName => {
        const option = document.createElement("option");
        option.value = teacherName;
        option.textContent = teacherName;
        manualengElement.appendChild(option);
      });
      matchedlitTeachers.forEach(teacherName => {
        const option = document.createElement("option");
        option.value = teacherName;
        option.textContent = teacherName;
        manuallitElement.appendChild(option);
      });
      matchedsciTeachers.forEach(teacherName => {
        const option = document.createElement("option");
        option.value = teacherName;
        option.textContent = teacherName;
        manualsciElement.appendChild(option);
      });
      matchedhisTeachers.forEach(teacherName => {
        const option = document.createElement("option");
        option.value = teacherName;
        option.textContent = teacherName;
        manualhisElement.appendChild(option);
      });
      for(let i=1;i<24;i++){
        let selectElement = document.getElementById('manualteacherday'+i);
        selectElement.innerHTML='';
        manualgv.forEach(m => {
          const option = document.createElement("option");
          option.value = m;
          option.textContent = m;
          selectElement.appendChild(option);
        });
      }
    });
} //done
function createManualTeacher() {
  let mathtea = document.getElementById('mathteacher').value || '';
  let englishtea = document.getElementById('englishteacher').value || '';
  let literaturetea = document.getElementById('literatureteacher').value || '';
  let sciencetea = document.getElementById('scienceteacher').value || '';
  let historytea = document.getElementById('historyteacher').value || '';
  let math=parseInt(document.getElementById('math').value) || 0;
  let english=parseInt(document.getElementById('english').value) || 0;
  let literature=parseInt(document.getElementById('literature').value) || 0;
  let science=parseInt(document.getElementById('science').value) || 0;
  let history=parseInt(document.getElementById('history').value) || 0;
  createStringsArray(math,english,literature,science,history,mathtea,englishtea,literaturetea,sciencetea,historytea);
  shuffleStrings(strings);
} //done

function createStringsArray(math, english, literature, science, history,mathtea,englishtea,literaturetea,sciencetea,historytea) {
  const total = math + english + literature + science + history;
  console.log('math: '+math+'|eng:'+english+'|lit:'+literature+'|sci:'+science+'|Total:'+total)
  
  for (let i = 0; i < math; i++) {
    strings.push(mathtea);
  }
  for (let i = 0; i < english; i++) {
    strings.push(englishtea);
  }
  for (let i = 0; i < literature; i++) {
    strings.push(literaturetea);
  }
  for (let i = 0; i < science; i++) {
    strings.push(sciencetea);
  }
  for (let i = 0; i < history; i++) {
    strings.push(historytea);
  }
  return strings;    
} //done

function shuffleStrings(strings) {
  let stringsCopy = [...strings]; // Tạo bản sao của mảng strings
  while (shuffled.length < strings.length) {
    const randomIndex = Math.floor(Math.random() * stringsCopy.length);
    const selectedString = stringsCopy[randomIndex];
    // Kiểm tra xem chuỗi đang xét có trùng với chuỗi trước đó không
    if (
      shuffled.length === 0 ||
      selectedString !== shuffled[shuffled.length - 1]
    ) {
      shuffled.push(selectedString);
      stringsCopy.splice(randomIndex, 1); // Loại bỏ chuỗi đã chọn khỏi bản sao mảng
    }
  }
  // Lặp qua từng phần tử trong mảng shuffled và gán giá trị cho các input tương ứng
  for (let i = 0; i < shuffled.length; i++) {
    const inputName = 'manualteacherdaysetted' + (i + 1); // Tạo tên của input, ví dụ: day1, day2, ...
    const inputValue = shuffled[i]; // Giá trị cần gán cho input

    // Tìm input tương ứng theo name và gán giá trị
    const inputElement = document.querySelector(`input[id='${inputName}']`);
    if (inputElement) {
      inputElement.value = inputValue;
    }
  }
  return shuffled;
} //done

function checkgvauto(autoteachereachday){
  // Tạo một đối tượng để lưu trữ tần suất của từng giá trị
  var frequencyMap = {};

  // Tính toán tần suất
  autoteachereachday.forEach(function(value) {
    if (!frequencyMap[value]) {
      frequencyMap[value] = 1;
    } else {
      frequencyMap[value]++;
    }
  });

  // Tạo đối tượng mostFrequentValues
  var mostFrequentValues = {
    "Anh": null,
    "Văn": null,
    "KH": null,
    "LS": null,
    "Toán": null
  };

  // Tìm giá trị có tần suất lớn nhất cho mỗi loại
  for (var checkValue in mostFrequentValues) {
    if (mostFrequentValues.hasOwnProperty(checkValue)) {
      var maxFrequency = 0;
      var mostFrequentValue = null;
      
      for (var value in frequencyMap) {
        if (frequencyMap.hasOwnProperty(value) && value.startsWith(checkValue)) {
          if (frequencyMap[value] > maxFrequency) {
            maxFrequency = frequencyMap[value];
            mostFrequentValue = value;
          }
        }
      }
      
      mostFrequentValues[checkValue] = mostFrequentValue;
    }
  }

  // Hiển thị kết quả
  // console.log(mostFrequentValues);

  // Gán giá trị vào các input tương ứng
  document.getElementById("mathteacherauto").value = mostFrequentValues["Toán"];
  document.getElementById("englishteacherauto").value = mostFrequentValues["Anh"];
  document.getElementById("literatureteacherauto").value = mostFrequentValues["Văn"];
  document.getElementById("scienceteacherauto").value = mostFrequentValues["KH"];
  document.getElementById("historyteacherauto").value = mostFrequentValues["LS"];

} //done

function setmanualteacheragain(i) {
  document.getElementById('manualteacherdaysetted'+i).value=document.getElementById('manualteacherday'+i).value;
} //done
  
function setautoteacheragain(i) {
  document.getElementById('autoteacherdaysetted'+i).value=document.getElementById('autoteacherday'+i).value;
  countautosubject();
} //done

countautosubject = () => {
  let math =0;
  let eng=0;
  let lit=0;
  let sci=0;
  let his =0;
  for(let i=1; i<24;i++){
    let subject = document.getElementById('autoteacherdaysetted'+i).value;
    if(subject.includes('Toán')){
      math++;
    }
    if(subject.includes('Anh')){
      eng++;
    }
    if(subject.includes('Văn')){
      lit++;
    }
    if(subject.includes('KH')){
      sci++;
    }
    if(subject.includes('LS')){
      his++;
    }
  }
  let total = math + eng + lit + sci + his;
  document.getElementById('numofautomath').value=math;
  document.getElementById('numofautoenglish').value=eng;
  document.getElementById('numofautoliterature').value=lit;
  document.getElementById('numofautoscience').value=sci;
  document.getElementById('numofautohistory').value=his;
  document.getElementById('numofautototal').value=total;
}
