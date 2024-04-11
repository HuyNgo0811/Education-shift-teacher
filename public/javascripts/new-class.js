  const addManualDiv = document.querySelector("#addmanual");
  const addAutoDiv = document.querySelector("#addauto");
  const manualFields = document.querySelector("#manualFields");
  const autoFields = document.querySelector("#autoFields");
  const teacherEachday= document.querySelector('#teachereachday');
  const findTeacher = document.querySelector('#findteacher')
  const settkb = document.querySelector('#settkb');
  const autoagain = document.querySelector('#autoagain');
  const createteacher = document.querySelector('#createteacher');
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
  addManualDiv.addEventListener("click", function() {
    event.preventDefault();
    if (manualFields.style.display === "none" || manualFields.style.display === "") {
      manualFields.style.display = "block";
    } 
    // Ẩn div#autoFields khi click vào div#addmanual
    autoFields.style.display = "none";
    manualteacher();
    //console.log(manualgv);
    //showteachereachdaymanual();
  });

  // Xử lý sự kiện khi click vào div Add Auto
  addAutoDiv.addEventListener("click", function() {
    event.preventDefault();
    if (autoFields.style.display === "none" || autoFields.style.display === "") {
      autoFields.style.display = "block";
      teacherEachday.style.display = 'block';
    } 
    // Ẩn div#manualFields khi click vào div#addauto
    manualFields.style.display = "none";
    autoteacher();
    createAutoTeacher();
    showteachereachday();
    //console.log(backupgv);
  });

  settkb.addEventListener('click', function(){
    event.preventDefault();
    let tkbbuoi=document.getElementsByClassName('tkbbuoi');
    for(var i = 0; i < tkbbuoi.length; i++) {
      tkbbuoi[i].value = null;
    }
    tkbBuoi1();
    tkbBuoi2();
    maketkb();
    statussettkb.innerText='Set thời khóa biểu roài nhá';
  })
  
  autoagain.addEventListener("click", function() {
    event.preventDefault();
    autoTeacherAgain();
    statusautoagain.innerText='Đã gán lại giáo viên ùi nhé';
  })
  
  findTeacher.addEventListener('click',function(){
    event.preventDefault();
    autoteacher();
    statusfindteacher.innerText='Tìm được giáo viên rảnh gùi nhé!!!';
    console.log(buoigv);
  })

  createteacher.addEventListener('click', () => {
    event.preventDefault();
    teacherEachday.style.display = 'block';
    showteachereachdaymanual();
  })

})

function tkbBuoi1() {
  let selectedtime1 = time1Select.value;
    switch(selectedtime1){
      case 'Thứ 2':
        document.getElementsByName('buoi1')[0].value = 'day1';
        break;
      case 'Thứ 3':
        document.getElementsByName('buoi2')[0].value = 'day1';
        break;
      case 'Thứ 4':
        document.getElementsByName('buoi3')[0].value = 'day1';
        break;
      case 'Thứ 5':
        document.getElementsByName('buoi4')[0].value = 'day1';
        break;
      case 'Thứ 6':
        document.getElementsByName('buoi5')[0].value = 'day1';
        break;
      case 'Thứ 7 - 1':
        document.getElementsByName('buoi6')[0].value = 'day1';
        break;
      case 'Thứ 7 - 2':
        document.getElementsByName('buoi7')[0].value = 'day1';
        break;
      case 'Thứ 7 - 3':
        document.getElementsByName('buoi8')[0].value = 'day1';
        break;
      case 'Thứ 7 - 4':
        document.getElementsByName('buoi9')[0].value = 'day1';
        break;
      case 'Chủ nhật - 1':
        document.getElementsByName('buoi10')[0].value = 'day1';
        break;
      case 'Chủ nhật - 2':
        document.getElementsByName('buoi11')[0].value = 'day1';
        break;
      case 'Chủ nhật - 3':
        document.getElementsByName('buoi12')[0].value = 'day1';
        break;
      case 'Chủ nhật - 4':
        document.getElementsByName('buoi13')[0].value = 'day1';
        break;
      default:
        document.getElementsByName('buoi1')[0].value = '' ; 
    }
}
function tkbBuoi2() {
  let selectedtime2 = time2Select.value;
    switch(selectedtime2){
      case 'Thứ 2':
        document.getElementsByName('buoi1')[0].value = 'day2';
        break;
      case 'Thứ 3':
        document.getElementsByName('buoi2')[0].value = 'day2';
        break;
      case 'Thứ 4':
        document.getElementsByName('buoi3')[0].value = 'day2';
        break;
      case 'Thứ 5':
        document.getElementsByName('buoi4')[0].value = 'day2';
        break;
      case 'Thứ 6':
        document.getElementsByName('buoi5')[0].value = 'day2';
        break;
      case 'Thứ 7 - 1':
        document.getElementsByName('buoi6')[0].value = 'day2';
        break;
      case 'Thứ 7 - 2':
        document.getElementsByName('buoi7')[0].value = 'day2';
        break;
      case 'Thứ 7 - 3':
        document.getElementsByName('buoi8')[0].value = 'day2';
        break;
      case 'Thứ 7 - 4':
        document.getElementsByName('buoi9')[0].value = 'day2';
        break;
      case 'Chủ nhật - 1':
        document.getElementsByName('buoi10')[0].value = 'day2';
        break;
      case 'Chủ nhật - 2':
        document.getElementsByName('buoi11')[0].value = 'day2';
        break;
      case 'Chủ nhật - 3':
        document.getElementsByName('buoi12')[0].value = 'day2';
        break;
      case 'Chủ nhật - 4':
        document.getElementsByName('buoi13')[0].value = 'day2';
        break;
      default:
        document.getElementsByName('buoi1')[0].value = '' ; 
    }
}
function maketkb() {
  let a=0,b=0;
  for(let i=1;i<14;i++){
    let input='buoi'+i; 
    if(document.getElementsByName(input)[0].value === 'day1'){
      a=i;
    }
    if(document.getElementsByName(input)[0].value === 'day2'){
      b=i;
    }
  }
  for(let x=a+13 , y=b+13 , z=3 ; x<158 && y<158 && z<24 ; x+=13 , y+=13 , z++){
    let input1 = 'buoi'+x;
    let input2 = 'buoi'+y;
    let output = 'day'+z;
    document.getElementsByName(input1)[0].value=output;
    z++;
    output= 'day'+z;
    document.getElementsByName(input2)[0].value=output;
  }
}
function autoteacher() {
  let selectGrade = gradeSelect.value;
  let selectedPlace = placeSelect.value;
  fetch('/class/teacher')
  .then(response => response.json())
  .then(teacher => {
    // console.log(teacher)
    teacher.forEach(t => {
      let foundTeacher=false;
      for(let g=1 ;g<9;g++){
        let gradekey = 'grade'+g;
        for(let p=1;p<11;p++){
          let placekey ='place'+p;
          for(let b=1;b<157;b++){
            let buoi='buoi'+b;
            let buoivalue = document.getElementById(buoi).value;
            if(t[gradekey] === selectGrade && t[placekey] === selectedPlace && buoivalue !== '' && t[buoi] === 'free'){
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
              console.log(buoigv); 
              console.log("backup");
              console.log(backupgv);
              // backupgv = buoigv;
              if(foundTeacher){break;};
            }
          }
        }
      }
    })
  })
}
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
    // let backupgv = buoigv;
    if(firstteacher !== null){
      let space = firstteacher.lastIndexOf(' ');
      let subject = firstteacher.substring(0, space);
      //gán gv vào môn vào tkb tổng
      for(let b=1;b<157;b++){
        let buoi='buoi'+b;
        let buoihoc='buoihoc'+b;
        let subday = 'subday'+b;
        if(document.getElementById(buoi).value === day){
          console.log('gan gv vo buoi hoc ne')
          document.getElementById(buoihoc).value=firstteacher;
          autoteachereachday.push(firstteacher);
          document.getElementById(subday).value=subject;
          if(subject.includes('Toán')){
            nummath++;
          }else 
          if(subject.includes('Anh')){
            numeng++;
          }else 
          if(subject.includes('Văn')){
            numlit++;
          }else 
          if(subject.includes('KH')){
            numsci++;
          }else 
          if(subject.includes('LS')){
            numhis++;
          }
        }
        //các hàm xóa khi đủ số môn
        if(nummath == numofmath){
          for(let d=index;d<24;d++){
            let bgvx = 'bgv'+d;
            if(buoigv.hasOwnProperty(bgvx)){
              buoigv[bgvx] = buoigv[bgvx].filter(item => !item.includes('Toán'));
              // console.log('Xóa Toán')
            }
          }
          // console.log(buoigv);
        }
        if(numeng == numofenglish){
          for(let d=index;d<24;d++){
            let bgvx = 'bgv'+d;
            if(buoigv.hasOwnProperty(bgvx)){
              buoigv[bgvx] = buoigv[bgvx].filter(item => !item.includes('Anh'));
              // console.log('Xóa Anh')
            }
          }
          // console.log(buoigv);
        }
        if(numlit == numofliterature){
          for(let d=index;d<24;d++){
            let bgvx = 'bgv'+d;
            if(buoigv.hasOwnProperty(bgvx)){
              buoigv[bgvx] = buoigv[bgvx].filter(item => !item.includes('Văn'));
              // console.log('Xóa Văn')
            }
          }
          // console.log(buoigv);
        }
        if(numsci == numofscience){
          for(let d=index;d<24;d++){
            let bgvx = 'bgv'+d;
            if(buoigv.hasOwnProperty(bgvx)){
              buoigv[bgvx] = buoigv[bgvx].filter(item => !item.includes('KH'));
              // console.log('Xóa Khoa học')
            }
          }
          // console.log(buoigv);
        }
        if(numhis == numofhistory){
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
  }
  // console.log(autoteachereachday);
  checkgvauto(autoteachereachday)
}
function showteachereachday() {
  for(let i = 0;i<23;i++){
    let idinput = 'teacherdaysetted'+ (i+1);
    document.getElementById(idinput).value=autoteachereachday[i];
  }
  // Lặp qua từng cặp key-value trong đối tượng bgv
  for (let key in backupgv) {
    if (backupgv.hasOwnProperty(key)) {
        let selectId = key.replace('bgv', ''); // Lấy số chỉ mục từ key
        let selectElement = document.getElementById(`teacherday${selectId}`);

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
        document.getElementById('buoihoc'+i).value = document.getElementById('teacherdaysetted'+k).value;
      }
    }
  }
}
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
                  matchedmathTeachers.push(t.name); // Thêm tên vào mảng kết quả
                  manualgv.push(t.name);
                  break; // Dừng vòng lặp khi tìm thấy một kết quả
                }
              }
            }
            if (t[gradeKey] === selectedGrade && t[placeKey] === selectedPlace && t.subject === "english") {
              for (let x = 1; x < 14; x++) {
                const time1Key = 'time' + x;
                if (t[time1Key] === selectedtime1 || t[time1Key] === selectedtime2) {
                  matchedengTeachers.push(t.name); // Thêm tên vào mảng kết quả
                  manualgv.push(t.name);
                  break; // Dừng vòng lặp khi tìm thấy một kết quả
                }
              }
            }
            if (t[gradeKey] === selectedGrade && t[placeKey] === selectedPlace && t.subject === "literature") {
              for (let x = 1; x < 14; x++) {
                const time1Key = 'time' + x;
                if (t[time1Key] === selectedtime1 || t[time1Key] === selectedtime2) {
                  matchedlitTeachers.push(t.name); // Thêm tên vào mảng kết quả
                  manualgv.push(t.name);
                  break; // Dừng vòng lặp khi tìm thấy một kết quả
                }
              }
            }
            if (t[gradeKey] === selectedGrade && t[placeKey] === selectedPlace && t.subject === "science") {
              for (let x = 1; x < 14; x++) {
                const time1Key = 'time' + x;
                if (t[time1Key] === selectedtime1 || t[time1Key] === selectedtime2) {
                  matchedsciTeachers.push(t.name); // Thêm tên vào mảng kết quả
                  manualgv.push(t.name);
                  break; // Dừng vòng lặp khi tìm thấy một kết quả
                }
              }
            }
            if (t[gradeKey] === selectedGrade && t[placeKey] === selectedPlace && t.subject === "history") {
              for (let x = 1; x < 14; x++) {
                const time1Key = 'time' + x;
                if (t[time1Key] === selectedtime1 || t[time1Key] === selectedtime2) {
                  matchedhisTeachers.push(t.name); // Thêm tên vào mảng kết quả
                  manualgv.push(t.name);
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
        let selectElement = document.getElementById('teacherday'+i);
        selectElement.innerHTML='';
        manualgv.forEach(m => {
          const option = document.createElement("option");
          option.value = m;
          option.textContent = m;
          selectElement.appendChild(option);
        });
      }
    });
}
function showteachereachdaymanual() {
  let mathtea = document.getElementById('mathteacher').value;
  let englishtea = document.getElementById('englishteacher').value;
  let literaturetea = document.getElementById('literatureteacher').value;
  let sciencetea = document.getElementById('scienceteacher').value;
  let historytea = document.getElementById('historyteacher').value;
  let math=parseInt(document.getElementById('math').value);
  if(isNaN(math) || !math){math=0;}
  let english=parseInt(document.getElementById('english').value);
  if(isNaN(english) || !english){english=0;}
  let literature=parseInt(document.getElementById('literature').value);
  if(isNaN(literature) || !literature){literature=0;}
  let science=parseInt(document.getElementById('science').value);
  if(isNaN(science) || !science){science=0;}
  let history=parseInt(document.getElementById('history').value);
  if(isNaN(history) || !history){history=0;}
  createStringsArray(math,english,literature,science,history,mathtea,englishtea,literaturetea,sciencetea,historytea);
  shuffleStrings(strings)
}

function createStringsArray(math, english, literature, science, history,mathtea,englishtea,literaturetea,sciencetea,historytea) {
  const total = math + english + literature + science + history;
  console.log('math: '+math+'|eng:'+english+'|lit:'+literature+'|sci:'+science+'|Total:'+total)
  if (total !== 23) {
    alert("Tổng số buổi phải bằng 23. Vui lòng nhập lại.");
    return [];
  }
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
}

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
    const inputName = 'teacherdaysetted' + (i + 1); // Tạo tên của input, ví dụ: day1, day2, ...
    const inputValue = shuffled[i]; // Giá trị cần gán cho input

    // Tìm input tương ứng theo name và gán giá trị
    const inputElement = document.querySelector(`input[id='${inputName}']`);
    if (inputElement) {
      inputElement.value = inputValue;
    }
  }
  // alert("finish tkb")
  console.log(shuffled)
  return shuffled;
}

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

}

function setteacheragain(i) {
  document.getElementById('teacherdaysetted'+i).value=document.getElementById('teacherday'+i).value;
}
  


