document.addEventListener("DOMContentLoaded",function () { 

  for(let i=1;i<157;i++){
    let row=document.querySelector('#row'+i);
    row.style.display='none';
    row.classList.add('hide');
  }
  //showclass();
  
  showweek();
  showdate();
  
  //shownote();

  const selectClass = document.querySelector('#idinput');
  selectClass.addEventListener("change",function() {
    cleartkb();
    showteacher();
    showplace();
    showsubject();
    showstt();
    //hiderow();
  })

  function showstt(){
    let stt = 1;
    let rows = document.querySelectorAll('.show');
    for (let i = 0; i < rows.length; i++) {
      let row = rows[i];
      if (row !== null && row.classList.contains('show')) {
        document.getElementById('stt' + (i + 1)).innerText = stt;
        stt++;
      }
    }
  }

  function cleartkb() {
    for(let i=1;i<157;i++){
      document.querySelector('#row'+i).style.display='none';
      document.querySelector('#row'+i).classList.remove('show');
      document.querySelector('#row'+i).classList.add('hide');
      document.querySelector('#place'+i).innerHTML='';
      document.querySelector('#subject'+i).innerHTML='';
      document.querySelector('#teacher'+i).innerHTML='';
      document.querySelector('#stt'+i).innerHTML='';
    } 
  }
  
  function showteacher() {
    fetch('/tkb/class-json')
    .then(response => response.json())
    .then(classdata => {
      classdata.forEach(c => {
        const idinput = document.getElementById('idinput').value; //classID
        for(let i=1;i<157;i++){
          let buoi = 'buoi'+i;
          let tea = 'teacher'+i;
          let teaout = document.querySelector('#'+tea);
          if(c.classID === idinput && c[buoi] !==''){
            const input = document.createElement('input');
            input.disabled=true;
            input.value=c[buoi];
            teaout.innerHTML='';
            teaout.appendChild(input);
            let row = document.querySelector('#row'+i);
            row.classList.remove('hide');
            row.classList.add('show');
            row.style.display='';
          }
        }
      })
    }) 
  }
  function showsubject() {
    fetch('/tkb/class-json')
    .then(response => response.json())
    .then(classdata => {
      classdata.forEach(c => {
        const idinput = document.getElementById('idinput').value; //classID
        for(let i=1;i<157;i++){
          let buoi = 'sub'+i;
          let tea = 'subject'+i;
          let teaout = document.querySelector('#'+tea);
          if(c.classID === idinput && c[buoi] !==''){
            const input = document.createElement('input');
            input.disabled=true;
            input.value=c[buoi];
            teaout.innerHTML='';
            teaout.appendChild(input);
            // let row = document.querySelector('#row'+i);
            // row.style.display='';
          }
        }
      })
    }) 
  }
  function showplace() {
    fetch('/tkb/class-json')
    .then(response => response.json())
    .then(classdata => {
      classdata.forEach(c => {
        const idinput = document.getElementById('idinput').value; //classID
        for(let i=1;i<157;i++){
          let buoi = 'buoi'+i;
          let place = 'place'+i;
          let placeout = document.querySelector('#'+place);
          if(c.classID === idinput && c[buoi] !==''){
            const input = document.createElement('input');
            input.disabled=true;
            input.value=c.place;
            //input.id='coso'+i;
            placeout.innerHTML='';
            placeout.appendChild(input);
          }
        }
      })
    }) 

  }
  function showweek() { 
    for(let i=1;i<=157;i++){
      let id='week'+i;
      let weekin = document.getElementById(id);
      if(1<=i && i<14){
        weekin.innerHTML='<h5>Week1'
      }
      if(14<=i && i<27){
        weekin.innerHTML='<h5>Week2'
      }
      if(27<=i && i<40){
        weekin.innerHTML='<h5>Week3'
      }
      if(40<=i && i<53){
        weekin.innerHTML='<h5>Week4'
      }
      if(53<=i && i<66){
        weekin.innerHTML='<h5>Week5'
      }
      if(66<=i && i<79){
        weekin.innerHTML='<h5>Week6'
      }
      if(79<=i && i<92){
        weekin.innerHTML='<h5>Week7'
      }
      if(92<=i && i<105){
        weekin.innerHTML='<h5>Week8'
      }
      if(105<=i && i<118){
        weekin.innerHTML='<h5>Week9'
      }
      if(118<=i && i<131){
        weekin.innerHTML='<h5>Week10'
      }
      if(131<=i && i<144){
        weekin.innerHTML='<h5>Week11'
      }
      if(144<=i && i<157){
        weekin.innerHTML='<h5>Week12'
      } 
    }
  }
  function showdate(){
    for(let j=1;j<157;j+=13){
      let id = 'date'+j;
      let datein = document.getElementById(id);
      datein.innerHTML='<h5>Thứ 2'
    }
    for(let j=2;j<157;j+=13){
      let id = 'date'+j;
      let datein = document.getElementById(id);
      datein.innerHTML='<h5>Thứ 3'
    }
    for(let j=3;j<157;j+=13){
      let id = 'date'+j;
      let datein = document.getElementById(id);
      datein.innerHTML='<h5>Thứ 4'
    }
    for(let j=4;j<157;j+=13){
      let id = 'date'+j;
      let datein = document.getElementById(id);
      datein.innerHTML='<h5>Thứ 5'
    }
    for(let j=5;j<157;j+=13){
      let id = 'date'+j;
      let datein = document.getElementById(id);
      datein.innerHTML='<h5>Thứ 6'
    }
    for(let j=6;j<157;j+=13){
      let id = 'date'+j;
      let datein = document.getElementById(id);
      datein.innerHTML='<h5>Thứ 7 - 1'
    }
    for(let j=7;j<157;j+=13){
      let id = 'date'+j;
      let datein = document.getElementById(id);
      datein.innerHTML='<h5>Thứ 7 - 2'
    }
    for(let j=8;j<157;j+=13){
      let id = 'date'+j;
      let datein = document.getElementById(id);
      datein.innerHTML='<h5>Thứ 7 - 3'
    }
    for(let j=9;j<157;j+=13){
      let id = 'date'+j;
      let datein = document.getElementById(id);
      datein.innerHTML='<h5>Thứ 7 - 4'
    }
    for(let j=10;j<157;j+=13){
      let id = 'date'+j;
      let datein = document.getElementById(id);
      datein.innerHTML='<h5>Chủ Nhật - 1'
    }
    for(let j=11;j<157;j+=13){
      let id = 'date'+j;
      let datein = document.getElementById(id);
      datein.innerHTML='<h5>Chủ Nhật - 2'
    }
    for(let j=12;j<157;j+=13){
      let id = 'date'+j;
      let datein = document.getElementById(id);
      datein.innerHTML='<h5>Chủ Nhật - 3'
    }
    for(let j=13;j<157;j+=13){
      let id = 'date'+j;
      let datein = document.getElementById(id);
      datein.innerHTML='<h5>Chủ Nhật - 4'
    }
  }
  
  
  
  
  







 });