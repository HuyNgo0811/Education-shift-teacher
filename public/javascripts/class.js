// document.addEventListener("DOMContentLoaded", function() {
//   const addManualDiv = document.querySelector("#addmanual");
//   const addAutoDiv = document.querySelector("#addauto");
//   const manualFields = document.querySelector("#manualFields");
//   const autoFields = document.querySelector("#autoFields");
//   const tkbid = document.querySelector('#tkbID');
//   const gradeSelect = document.querySelector("#grades");
//   const placeSelect = document.querySelector("#place");
//   const time1Select = document.querySelector('#time1');
//   const time2Select = document.querySelector('#time2');
//   const selectmathElement = document.getElementById('mathteacher');
//   const selectlitElement = document.getElementById('literatureteacher');
//   const selectengElement = document.getElementById('englishteacher');
//   const selectsciElement = document.getElementById('scienceteacher');
//   const selecthisElement = document.getElementById('historyteacher');

//   addManualDiv.addEventListener("click", function() {
//     event.preventDefault();
//     toggleDisplay(manualFields);
//     autoFields.style.display = "none";
//   });

//   addAutoDiv.addEventListener("click", function() {
//     event.preventDefault();
//     toggleDisplay(autoFields);
//     manualFields.style.display = "none";
//     autoTeacher2();
//   });

//   [gradeSelect, placeSelect].forEach(select => {
//     select.addEventListener("change", function() {
//       updateTeachers(gradeSelect.value, placeSelect.value, time1Select.value, time2Select.value);
//     });
//   });

//   [time1Select, time2Select].forEach(select => {
//     select.addEventListener("change", function() {
//       confirm('Are you sure?');
//       updateTeachers(gradeSelect.value, placeSelect.value, time1Select.value, time2Select.value);
//     });
//   });

//   const btntkb = document.getElementById('finishtkb');
//   btntkb.addEventListener("click", function() {
//     event.preventDefault();
//     const math = parseInt(document.getElementById('math').value) || 0;
//     const english = parseInt(document.getElementById('english').value) || 0;
//     const literature = parseInt(document.getElementById('literature').value) || 0;
//     const science = parseInt(document.getElementById('science').value) || 0;
//     const history = parseInt(document.getElementById('history').value) || 0;
//     createStringsArray(math, english, literature, science, history);
//     shuffleStrings(strings);
//   });

//   function toggleDisplay(element) {
//     element.style.display = (element.style.display === "none" || element.style.display === "") ? "block" : "none";
//   }

//   function updateTeachers(selectedGrade, selectedPlace, selectedtime1, selectedtime2) {
//     // Code xử lý update teachers
//     let matchedmathTeachers = [];
//     let matchedengTeachers = [];
//     let matchedlitTeachers = [];
//     let matchedsciTeachers = [];
//     let matchedhisTeachers = [];
//     fetch('/class/json')
//       .then(response => response.json())
//       .then(data => {
//         data.forEach(t => {
//           for (let i = 1; i <= 10; i++) {
//             const gradeKey = 'grade' + i;
//             for (let j = 1; j <= 10; j++) {
//               const placeKey = 'place' + j;
//               if (t[gradeKey] === selectedGrade && t[placeKey] === selectedPlace && t.subject === "math") {
//                 for (let x = 1; x < 14; x++) {
//                   const time1Key = 'time' + x;
//                   if (t[time1Key] === selectedtime1 || t[time1Key] === selectedtime2) {
//                     matchedmathTeachers.push(t.name); // Thêm tên vào mảng kết quả
//                     break; // Dừng vòng lặp khi tìm thấy một kết quả
//                   }
//                 }
//               }
//               if (t[gradeKey] === selectedGrade && t[placeKey] === selectedPlace && t.subject === "english") {
//                 for (let x = 1; x < 14; x++) {
//                   const time1Key = 'time' + x;
//                   if (t[time1Key] === selectedtime1 || t[time1Key] === selectedtime2) {
//                     matchedengTeachers.push(t.name); // Thêm tên vào mảng kết quả
//                     break; // Dừng vòng lặp khi tìm thấy một kết quả
//                   }
//                 }
//               }
//               if (t[gradeKey] === selectedGrade && t[placeKey] === selectedPlace && t.subject === "literature") {
//                 for (let x = 1; x < 14; x++) {
//                   const time1Key = 'time' + x;
//                   if (t[time1Key] === selectedtime1 || t[time1Key] === selectedtime2) {
//                     matchedlitTeachers.push(t.name); // Thêm tên vào mảng kết quả
//                     break; // Dừng vòng lặp khi tìm thấy một kết quả
//                   }
//                 }
//               }
//               if (t[gradeKey] === selectedGrade && t[placeKey] === selectedPlace && t.subject === "science") {
//                 for (let x = 1; x < 14; x++) {
//                   const time1Key = 'time' + x;
//                   if (t[time1Key] === selectedtime1 || t[time1Key] === selectedtime2) {
//                     matchedsciTeachers.push(t.name); // Thêm tên vào mảng kết quả
//                     break; // Dừng vòng lặp khi tìm thấy một kết quả
//                   }
//                 }
//               }
//               if (t[gradeKey] === selectedGrade && t[placeKey] === selectedPlace && t.subject === "history") {
//                 for (let x = 1; x < 14; x++) {
//                   const time1Key = 'time' + x;
//                   if (t[time1Key] === selectedtime1 || t[time1Key] === selectedtime2) {
//                     matchedhisTeachers.push(t.name); // Thêm tên vào mảng kết quả
//                     break; // Dừng vòng lặp khi tìm thấy một kết quả
//                   }
//                 }
//               }
//             }
//           }
//         });
//         selectmathElement.innerHTML = ''; // Xóa tất cả các option hiện có
//         selectengElement.innerHTML = '';
//         selectlitElement.innerHTML = '';
//         selectsciElement.innerHTML = '';
//         selecthisElement.innerHTML = '';
//         // console.log('Math: '+matchedmathTeachers);
//         // console.log('Eng: '+matchedengTeachers);
//         // console.log('Lit: '+matchedlitTeachers);
//         // console.log('Sci: '+matchedsciTeachers);
//         matchedmathTeachers.forEach(teacherName => {
//           const option = document.createElement("option");
//           option.value = teacherName;
//           option.textContent = teacherName;
//           selectmathElement.appendChild(option);
//         });
//         matchedengTeachers.forEach(teacherName => {
//           const option = document.createElement("option");
//           option.value = teacherName;
//           option.textContent = teacherName;
//           selectengElement.appendChild(option);
//         });
//         matchedlitTeachers.forEach(teacherName => {
//           const option = document.createElement("option");
//           option.value = teacherName;
//           option.textContent = teacherName;
//           selectlitElement.appendChild(option);
//         });
//         matchedsciTeachers.forEach(teacherName => {
//           const option = document.createElement("option");
//           option.value = teacherName;
//           option.textContent = teacherName;
//           selectsciElement.appendChild(option);
//         });
//         matchedhisTeachers.forEach(teacherName => {
//           const option = document.createElement("option");
//           option.value = teacherName;
//           option.textContent = teacherName;
//           selecthisElement.appendChild(option);
//         });
//       });
//   }

//   function autoTeacher2() {
//     // Code của autoTeacher2
//     //let creteDayTeacher ;
//     let createDayTeacher=[];
//     let selectGrade = gradeSelect.value;
//     let selectedPlace = placeSelect.value;
//     //tạo giáo viên tự động cho buổi đầu của mỗi môn
//     fetch('/class/json')
//       .then(response => response.json())
//       .then(data => {
//         console.log(data);
//         data.forEach(t =>{
//           for(let g=1;g<11;g++){
//             let gradeKey = 'grade' + g;
//             let foundTeacher = false; // Biến để kiểm tra xem đã tìm được giáo viên nào có môn phù hợp chưa
//             for(let p=1;p<11;p++){
//               let placeKey = 'place' + p;
//               for (let key in t) {
//                 for (let j = 1; j < 24; j++) {
//                   let sub = 'subject' + j;
//                   let clsssub = document.getElementsByName(sub)[0].value;
//                   if (t[gradeKey] === selectGrade && t[placeKey] === selectedPlace && key.startsWith('buoi') && t[key] === 'free' && !foundTeacher && t.subject === clsssub) {
//                     console.log('tim đc gv phù hợp r và lưu vào auto teacher')
//                     let teasub = clsssub+'teacherauto';
//                     document.getElementById(teasub).value=t.name;
//                     let date='day'+j;
//                     document.getElementById(date).value=t.name;
//                     foundTeacher = true;
//                     let createDayTeacherValue = j;
//                     createDayTeacher.push(createDayTeacherValue);
//                   }
//                 }
//               }
//             }
//           }
//         });
//         console.log('createDayTeacher: '+createDayTeacher);
//         // Sắp xếp mảng theo thứ tự tăng dần
//         console.log('createDayTeacher: ', createDayTeacher);
//         createDayTeacher.sort((a, b) => a - b);
//         console.log('createDayTeacher after sort: ', createDayTeacher);
//         //gán giáo viên cho các buổi còn lại
//         for(let i=0;i<createDayTeacher.length;i++){
//           let sub = 'subject'+ createDayTeacher[i];
//           let day = 'day'+ createDayTeacher[i];
//           let subhaved = document.getElementsByName(sub)[0].value; 
//           let dayhaved = document.getElementsByName(day)[0].value;
//           for( let k=1;k<24;k++){
//             if(!createDayTeacher.includes(k)){
//               let dayempty = 'day' +k;
//               let subempty = 'subject' +k;
//               let subinputempty = document.getElementsByName(subempty)[0].value;
//               if(subinputempty === subhaved){
//                 document.getElementsByName(dayempty)[0].value=dayhaved;
//               }
//             }
//           }
//         }
//         ganTeacherID();
//         for(let i=1;i<=157;i++){
//           let buoihoc = 'buoihoc'+i;
//           let buoi = 'buoi'+i;
//           let buoihocvalue = document.getElementById(buoihoc).value;
//           data.forEach(teacher => {
//             if(teacher.name === buoihocvalue){
//               if(teacher[buoi] !== 'free' || !teacher[buoi]){
//                 document.getElementById(buoihoc).value='không có giáo viên';
//               } 
//             }
//           })
//         }
//       });
//   }

//   function ganTeacherID() {
//     for (let i = 1; i < 158; i++) {
//       let buoi = 'buoi' + i;
//       let buoihoc = 'buoihoc' + i;
//       // Lấy giá trị của input có tên 'buoi'
//       let buoiValue = document.getElementsByName(buoi)[0].value;
//       if (buoiValue.trim() !== '') {
//         // Lấy giá trị của input có tên là giá trị của 'buoi' (vd: buoi1)
//         let dayValue = document.getElementsByName(buoi)[0].value;
//         //console.log('dayValue: '+dayValue);
//         let teaID = document.getElementsByName(dayValue)[0].value;
//         //console.log('teaID: '+teaID);
//         // Đặt giá trị của input có tên 'buoihoc' là giá trị của 'teaID'
//         document.getElementsByName(buoihoc)[0].value = teaID;
//       }
//     }
//   }

//   let strings=[];
//   function createStringsArray(math, english, literature, science, history) {
//     // Code của createStringsArray
//     const total = math + english + literature + science + history;
    
//     console.log('math: '+math+'|eng:'+english+'|lit:'+literature+'|sci:'+science+'|Total:'+total)
//     if (total !== 23) {
//       alert("Tổng số buổi phải bằng 23. Vui lòng nhập lại.");
//       return [];
//     }

//     for (let i = 0; i < math; i++) {
//       strings.push('math');
//     }
//     for (let i = 0; i < english; i++) {
//       strings.push('english');
//     }
//     for (let i = 0; i < literature; i++) {
//       strings.push('literature');
//     }
//     for (let i = 0; i < science; i++) {
//       strings.push('science');
//     }
//     for (let i = 0; i < history; i++) {
//       strings.push('history');
//     }
//     return strings;    
//   }

//   function shuffleStrings(strings) {
//     // Code của shuffleStrings
//     let shuffled = [];
//     let stringsCopy = [...strings]; // Tạo bản sao của mảng strings
//     while (shuffled.length < strings.length) {
//       const randomIndex = Math.floor(Math.random() * stringsCopy.length);
//       const selectedString = stringsCopy[randomIndex];
//       // Kiểm tra xem chuỗi đang xét có trùng với chuỗi trước đó không
//       if (
//         shuffled.length === 0 ||
//         selectedString !== shuffled[shuffled.length - 1]
//       ) {
//         shuffled.push(selectedString);
//         stringsCopy.splice(randomIndex, 1); // Loại bỏ chuỗi đã chọn khỏi bản sao mảng
//       }
//     }
//     // Lặp qua từng phần tử trong mảng shuffled và gán giá trị cho các input tương ứng
//     for (let i = 0; i < shuffled.length; i++) {
//       const inputName = 'subject' + (i + 1); // Tạo tên của input, ví dụ: day1, day2, ...
//       const inputValue = shuffled[i]; // Giá trị cần gán cho input

//       // Tìm input tương ứng theo name và gán giá trị
//       const inputElement = document.querySelector(`input[name='${inputName}']`);
//       if (inputElement) {
//         inputElement.value = inputValue;
//       }
//     }
//     alert("finish tkb")
//     return shuffled;
  
//   }

// });


document.addEventListener("DOMContentLoaded", function() {
  const addManualDiv = document.querySelector("#addmanual");
  const addAutoDiv = document.querySelector("#addauto");
  const manualFields = document.querySelector("#manualFields");
  const autoFields = document.querySelector("#autoFields");
  const tkbid=document.querySelector('#tkbID');
  // for(let i=1;i<157;i++){
  //   let row=document.querySelector('#buoihoc'+i);
  //   row.style.display='none';
  // }
  // Xử lý sự kiện khi click vào div Add Manual
  
  addManualDiv.addEventListener("click", function() {
    event.preventDefault();
    if (manualFields.style.display === "none" || manualFields.style.display === "") {
      manualFields.style.display = "block";
    } else {
      manualFields.style.display = "none";
    }
    // Ẩn div#autoFields khi click vào div#addmanual
    autoFields.style.display = "none";
  });

  // Xử lý sự kiện khi click vào div Add Auto
  addAutoDiv.addEventListener("click", function() {
    event.preventDefault();
    if (autoFields.style.display === "none" || autoFields.style.display === "") {
      autoFields.style.display = "block";
    } else {
      autoFields.style.display = "none";
    }
    // Ẩn div#manualFields khi click vào div#addauto
    manualFields.style.display = "none";
    autoTeacher1();
    
    
    for(let i=157;i>=1;i--){
      let a=24;
      if(document.querySelector('#buoihoc'+i).value === 'không có giáo viên'){
        a--;
        console.log('a: '+a)
        console.log('shuffled: '+shuffled);
        let newstrings = shuffled.splice(-a);
        console.log('newstring: '+newstrings);
        shuffleStrings(newstrings);

        break;
      } 
    }
    // for(let i=1;i<157;i++){
    //   if(document.querySelector('#buoihoc'+i).value === 'không có giáo viên'){
    //     document.querySelector('#status').value='Bị trùng giáo viên';
    //     break;
    //   }else{
    //     document.querySelector('#status').innerHTML='Đã add auto';
    //     break;
    //   }
    // }
  });

  let gradeSelect = document.querySelector("#grades");
  let placeSelect = document.querySelector("#place");
  let time1Select = document.querySelector('#time1');
  let time2Select = document.querySelector('#time2');
  let selectmathElement = document.getElementById('mathteacher');
  let selectlitElement = document.getElementById('literatureteacher');
  let selectengElement = document.getElementById('englishteacher');
  let selectsciElement = document.getElementById('scienceteacher');
  let selecthisElement = document.getElementById('historyteacher');
  
  gradeSelect.addEventListener("change", function() {
    let selectedGrade = gradeSelect.value;
    console.log("grade chọn: "+selectedGrade)
  });
  placeSelect.addEventListener("change", function() {
    let selectedplace = placeSelect.value;
    console.log("place chọn: "+selectedplace)
  });


  // Xử lý sự kiện khi chọn giá trị cho Giáo viên Toán
  gradeSelect.addEventListener("change", function() {
    let selectedGrade = gradeSelect.value;
    removeAllOptions();
    updateTeachers(selectedGrade, placeSelect.value, time1Select.value, time2Select.value);
  });
  
  placeSelect.addEventListener("change", function() {
    let selectedPlace = placeSelect.value;
    removeAllOptions();
    updateTeachers(gradeSelect.value, selectedPlace, time1Select.value, time2Select.value);
  });
  
  time1Select.addEventListener("change", function() {
    confirm('Are you sure?');
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
    updateTeachers(gradeSelect.value, placeSelect.value, selectedtime1, time2Select.value);
  });
  
  time2Select.addEventListener("change", function() {
    confirm('Are you sure?');
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
    maketkb();
    updateTeachers(gradeSelect.value, placeSelect.value, time1Select.value, selectedtime2);
  });

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
    console.log('a: '+a+' b: '+b);
  }
  
  function removeAllOptions() {
    while (selectmathElement.options.length > 0) {
      selectmathElement.remove(0);
    }
    while (selectengElement.options.length > 0) {
      selectengElement.remove(0);
    }
    while (selectlitElement.options.length > 0) {
      selectlitElement.remove(0);
    }
    while (selectsciElement.options.length > 0) {
      selectsciElement.remove(0);
    }
    while (selecthisElement.options.length > 0) {
      selecthisElement.remove(0);
    }
  }
  
  //hàm setup giáo viên cho từng buổi học tự động
  function autoTeacher1() {  //test
    //let creteDayTeacher ;
    let cnt=0;
    let createDayTeacher=[];
    let selectGrade = gradeSelect.value;
    let selectedPlace = placeSelect.value;
    //tạo giáo viên tự động cho buổi đầu của mỗi môn
    fetch('/class/json')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        data.forEach(t =>{
          for(let g=1;g<11;g++){
            let gradeKey = 'grade' + g;
            let foundTeacher = false; // Biến để kiểm tra xem đã tìm được giáo viên nào có môn phù hợp chưa
            for(let p=1;p<11;p++){
              let placeKey = 'place' + p;
              for (let key in t) {
                for (let j = 1; j < 24; j++) {
                  let sub = 'subject' + j;
                  let clsssub = document.getElementsByName(sub)[0].value;
                  if (t[gradeKey] === selectGrade && t[placeKey] === selectedPlace && key.startsWith('buoi') && t[key] === 'free' && !foundTeacher && t.subject === clsssub) {
                    console.log('tim đc gv phù hợp r và lưu vào auto teacher')
                    let teasub = clsssub+'teacherauto';
                    document.getElementById(teasub).value=t.name;
                    let date='day'+j;
                    document.getElementById(date).value=t.name;
                    foundTeacher = true;
                    let createDayTeacherValue = j;
                    createDayTeacher.push(createDayTeacherValue);
                  }
                }
              }
            }
          }
          
          
        });
        console.log('createDayTeacher: '+createDayTeacher);
        // Sắp xếp mảng theo thứ tự tăng dần
        console.log('createDayTeacher: ', createDayTeacher);
        createDayTeacher.sort((a, b) => a - b);
        console.log('createDayTeacher after sort: ', createDayTeacher);
        //gán giáo viên cho các buổi còn lại
        for(let i=0;i<createDayTeacher.length;i++){
          let sub = 'subject'+ createDayTeacher[i];
          let day = 'day'+ createDayTeacher[i];
          let subhaved = document.getElementsByName(sub)[0].value; 
          let dayhaved = document.getElementsByName(day)[0].value;
          for( let k=1;k<24;k++){
            if(!createDayTeacher.includes(k)){
              let dayempty = 'day' +k;
              let subempty = 'subject' +k;
              let subinputempty = document.getElementsByName(subempty)[0].value;
              if(subinputempty === subhaved){
                document.getElementsByName(dayempty)[0].value=dayhaved;
              }
            }
          }
        }
        ganTeacherID();
        for(let i=1;i<=157;i++){
          let buoihoc = 'buoihoc'+i;
          let buoi = 'buoi'+i;
          let buoihocvalue = document.getElementById(buoihoc).value;
          data.forEach(teacher => {
            if(teacher.name === buoihocvalue){
              if(teacher[buoi] !== 'free' || !teacher[buoi]){
                document.getElementById(buoihoc).value='không có giáo viên';
                cnt++;
              } 
            }
          })
          if(cnt !== 0){
            document.querySelector('#status').innerHTML='Bị trùng ' +cnt+ ' giáo viên';
          }else{
          document.querySelector('#status').innerHTML='Hên quá không bị trùng';
          }
        }
        for(let s=1;s<24;s++){
          let sub = 'subject'+s; //subject1
          let subvalue=document.querySelector('#'+sub).value; //tên subject của day1
          let day = 'day'+s; //day1
          for(let i=1;i<157;i++){
            let buoi = 'buoi'+i; 
            let buoivalue=document.querySelector('#'+buoi).value; //ngày học thuộc buổi
            let subday = 'subday'+i;
            if(buoivalue === day){
              document.querySelector('#'+subday).value=subvalue;
              break;
            }
          }
        }
        
      });
  }
  
  function autoTeacher2() {
    //let creteDayTeacher ;
    let createDayTeacher=[];
    let selectGrade = gradeSelect.value;
    let selectedPlace = placeSelect.value;
    //tạo giáo viên tự động cho buổi đầu của mỗi môn
    fetch('/class/json')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        data.forEach(t =>{
          for(let g=1;g<11;g++){
            let gradeKey = 'grade' + g;
            let foundTeacher = false; // Biến để kiểm tra xem đã tìm được giáo viên nào có môn phù hợp chưa
            for(let p=1;p<11;p++){
              let placeKey = 'place' + p;
              for (let key in t) {
                for (let j = 1; j < 24; j++) {
                  let sub = 'subject' + j;
                  let clsssub = document.getElementsByName(sub)[0].value;
                  if (t[gradeKey] === selectGrade && t[placeKey] === selectedPlace && key.startsWith('buoi') && t[key] === 'free' && !foundTeacher && t.subject === clsssub) {
                    console.log('tim đc gv phù hợp r và lưu vào auto teacher')
                    let teasub = clsssub+'teacherauto';
                    document.getElementById(teasub).value=t.name;
                    let date='day'+j;
                    document.getElementById(date).value=t.name;
                    foundTeacher = true;
                    let createDayTeacherValue = j;
                    createDayTeacher.push(createDayTeacherValue);
                  }
                }
              }
            }
          }
          
          
        });
        console.log('createDayTeacher: '+createDayTeacher);
        // Sắp xếp mảng theo thứ tự tăng dần
        console.log('createDayTeacher: ', createDayTeacher);
        createDayTeacher.sort((a, b) => a - b);
        console.log('createDayTeacher after sort: ', createDayTeacher);
        //gán giáo viên cho các buổi còn lại
        for(let i=0;i<createDayTeacher.length;i++){
          let sub = 'subject'+ createDayTeacher[i];
          let day = 'day'+ createDayTeacher[i];
          let subhaved = document.getElementsByName(sub)[0].value; 
          let dayhaved = document.getElementsByName(day)[0].value;
          for( let k=1;k<24;k++){
            if(!createDayTeacher.includes(k)){
              let dayempty = 'day' +k;
              let subempty = 'subject' +k;
              let subinputempty = document.getElementsByName(subempty)[0].value;
              if(subinputempty === subhaved){
                document.getElementsByName(dayempty)[0].value=dayhaved;
              }
            }
          }
        }
        ganTeacherID();
        for(let i=1;i<=157;i++){
          let buoihoc = 'buoihoc'+i;
          let buoi = 'buoi'+i;
          let buoihocvalue = document.getElementById(buoihoc).value;
          data.forEach(teacher => {
            if(teacher.name === buoihocvalue){
              if(teacher[buoi] !== 'free' || !teacher[buoi]){
                document.getElementById(buoihoc).value='không có giáo viên';
              } 
            }
          })
        }
        for(let s=1;s<24;s++){
          let sub = 'subject'+s; //subject1
          let subvalue=document.querySelector('#'+sub).value; //tên subject của day1
          let day = 'day'+s; //day1
          for(let i=1;i<157;i++){
            let buoi = 'buoi'+i; 
            let buoivalue=document.querySelector('#'+buoi).value; //ngày học thuộc buổi
            let subday = 'subday'+i;
            if(buoivalue === day){
              document.querySelector('#'+subday).value=subvalue;
              break;
            }
          }
        }
      });
  }

  //gán teacherID cho từng buổi học để lưu vào teacher
  function ganTeacherID() {
    for (let i = 1; i < 158; i++) {
      let buoi = 'buoi' + i;
      let buoihoc = 'buoihoc' + i;
      // Lấy giá trị của input có tên 'buoi'
      let buoiValue = document.getElementsByName(buoi)[0].value;
      if (buoiValue.trim() !== '') {
        // Lấy giá trị của input có tên là giá trị của 'buoi' (vd: buoi1)
        let dayValue = document.getElementsByName(buoi)[0].value;
        //console.log('dayValue: '+dayValue);
        let teaID = document.getElementsByName(dayValue)[0].value;
        //console.log('teaID: '+teaID);
        // Đặt giá trị của input có tên 'buoihoc' là giá trị của 'teaID'
        document.getElementsByName(buoihoc)[0].value = teaID;
      }

    }
  }

  function updateTeachers(selectedGrade, selectedPlace, selectedtime1, selectedtime2) {
    let matchedmathTeachers = [];
    let matchedengTeachers = [];
    let matchedlitTeachers = [];
    let matchedsciTeachers = [];
    let matchedhisTeachers = [];
    fetch('/class/json')
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
                    break; // Dừng vòng lặp khi tìm thấy một kết quả
                  }
                }
              }
              if (t[gradeKey] === selectedGrade && t[placeKey] === selectedPlace && t.subject === "english") {
                for (let x = 1; x < 14; x++) {
                  const time1Key = 'time' + x;
                  if (t[time1Key] === selectedtime1 || t[time1Key] === selectedtime2) {
                    matchedengTeachers.push(t.name); // Thêm tên vào mảng kết quả
                    break; // Dừng vòng lặp khi tìm thấy một kết quả
                  }
                }
              }
              if (t[gradeKey] === selectedGrade && t[placeKey] === selectedPlace && t.subject === "literature") {
                for (let x = 1; x < 14; x++) {
                  const time1Key = 'time' + x;
                  if (t[time1Key] === selectedtime1 || t[time1Key] === selectedtime2) {
                    matchedlitTeachers.push(t.name); // Thêm tên vào mảng kết quả
                    break; // Dừng vòng lặp khi tìm thấy một kết quả
                  }
                }
              }
              if (t[gradeKey] === selectedGrade && t[placeKey] === selectedPlace && t.subject === "science") {
                for (let x = 1; x < 14; x++) {
                  const time1Key = 'time' + x;
                  if (t[time1Key] === selectedtime1 || t[time1Key] === selectedtime2) {
                    matchedsciTeachers.push(t.name); // Thêm tên vào mảng kết quả
                    break; // Dừng vòng lặp khi tìm thấy một kết quả
                  }
                }
              }
              if (t[gradeKey] === selectedGrade && t[placeKey] === selectedPlace && t.subject === "history") {
                for (let x = 1; x < 14; x++) {
                  const time1Key = 'time' + x;
                  if (t[time1Key] === selectedtime1 || t[time1Key] === selectedtime2) {
                    matchedhisTeachers.push(t.name); // Thêm tên vào mảng kết quả
                    break; // Dừng vòng lặp khi tìm thấy một kết quả
                  }
                }
              }
            }
          }
        });
        selectmathElement.innerHTML = ''; // Xóa tất cả các option hiện có
        selectengElement.innerHTML = '';
        selectlitElement.innerHTML = '';
        selectsciElement.innerHTML = '';
        selecthisElement.innerHTML = '';
        matchedmathTeachers.forEach(teacherName => {
          const option = document.createElement("option");
          option.value = teacherName;
          option.textContent = teacherName;
          selectmathElement.appendChild(option);
        });
        matchedengTeachers.forEach(teacherName => {
          const option = document.createElement("option");
          option.value = teacherName;
          option.textContent = teacherName;
          selectengElement.appendChild(option);
        });
        matchedlitTeachers.forEach(teacherName => {
          const option = document.createElement("option");
          option.value = teacherName;
          option.textContent = teacherName;
          selectlitElement.appendChild(option);
        });
        matchedsciTeachers.forEach(teacherName => {
          const option = document.createElement("option");
          option.value = teacherName;
          option.textContent = teacherName;
          selectsciElement.appendChild(option);
        });
        matchedhisTeachers.forEach(teacherName => {
          const option = document.createElement("option");
          option.value = teacherName;
          option.textContent = teacherName;
          selecthisElement.appendChild(option);
        });
      });
  } 


  const btntkb = document.getElementById('finishtkb')
  btntkb.addEventListener("click",function() {
    event.preventDefault();
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
    createStringsArray(math,english,literature,science,history);
    shuffleStrings(strings)
  })

  const strings = [];
  // Hàm tạo mảng strings
  function createStringsArray(math, english, literature, science, history) {
    const total = math + english + literature + science + history;
    
    console.log('math: '+math+'|eng:'+english+'|lit:'+literature+'|sci:'+science+'|Total:'+total)
    if (total !== 23) {
      alert("Tổng số buổi phải bằng 23. Vui lòng nhập lại.");
      return [];
    }

    for (let i = 0; i < math; i++) {
      strings.push('math');
    }
    for (let i = 0; i < english; i++) {
      strings.push('english');
    }
    for (let i = 0; i < literature; i++) {
      strings.push('literature');
    }
    for (let i = 0; i < science; i++) {
      strings.push('science');
    }
    for (let i = 0; i < history; i++) {
      strings.push('history');
    }
    return strings;    
  }
  
  let shuffled = [];
  // Hàm sắp xếp chuỗi ngẫu nhiên
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
      const inputName = 'subject' + (i + 1); // Tạo tên của input, ví dụ: day1, day2, ...
      const inputValue = shuffled[i]; // Giá trị cần gán cho input

      // Tìm input tương ứng theo name và gán giá trị
      const inputElement = document.querySelector(`input[name='${inputName}']`);
      if (inputElement) {
        inputElement.value = inputValue;
      }
    }
    alert("finish tkb")
    return shuffled;
  }







});