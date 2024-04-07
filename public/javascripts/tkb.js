document.addEventListener("DOMContentLoaded",function () { 

  
  showclass();
  showteacher();
  showplace();
  showweek();
  showdate();
  shownote();

  function showclass() {
    fetch('/json')
    .then(response => response.json())
    .then(tkbdata => {
      let tenlop = {};
      tkbdata.forEach(c => {
        const classID = c.classID;
        if (!tenlop[classID]) {
          tenlop[classID] = {}; // Tạo một object mới nếu chưa tồn tại
        }
        for (let i = 1; i <= 157; i++) {
          let ngayhoc = 'buoi' + i;
          if (c[ngayhoc] !== '') {
            if (!tenlop[classID][ngayhoc]) {
              tenlop[classID][ngayhoc] = []; 
            }
            tenlop[classID][ngayhoc].push(c.name);
          }
          let classtkb = 'class' + i;
          let tkblop = document.querySelector('#' + classtkb); 
          if (tenlop[classID][ngayhoc]) {
            const input = document.createElement("input");
            input.value = tenlop[classID][ngayhoc].join('\n'); 
            input.disabled = true;
            input.id=c.classID;
            tkblop.appendChild(input);
            if (i < 157) {
              tkblop.appendChild(document.createElement("br"));
            }
          }
        }
      });
      console.log('Lớp: ');
      console.log(tenlop);
    });

  }
  function showteacher() {
    fetch('/json')
    .then(response => response.json())
    .then(tkbdata => {
      let tengv = {};
      tkbdata.forEach(c => {
        const classID = c.classID;
        if (!tengv[classID]) {
          tengv[classID] = {}; // Tạo một object mới nếu chưa tồn tại
        }
        for (let i = 1; i <= 157; i++) {
          let ngayhoc = 'buoihoc' + i;
          if (c[ngayhoc] !== '') {
            if (!tengv[classID][ngayhoc]) {
              tengv[classID][ngayhoc] = []; 
            }
            tengv[classID][ngayhoc].push(c[ngayhoc]);
          }
          let classtkb = 'teacher' + i;
          let tkbgv = document.querySelector('#' + classtkb); 
          if (tengv[classID][ngayhoc]) {
            const input = document.createElement("input");
            input.value = tengv[classID][ngayhoc].join('\n'); 
            input.disabled = true;
            tkbgv.appendChild(input);
            if (i < 157) {
              tkbgv.appendChild(document.createElement("br"));
            }
          }
        }
      });
      console.log("Giáo viên: ");
      console.log(tengv);
    });

  }
  function showplace() {
    fetch('/json')
    .then(response => response.json())
    .then(tkbdata => {
      let tencs = {};
      tkbdata.forEach(c => {
        const classID = c.classID;
        if (!tencs[classID]) {
          tencs[classID] = {}; // Tạo một object mới nếu chưa tồn tại
        }

        for (let i = 1; i <= 157; i++) {
          let buoihoc = 'buoi' + i;
          if (c[buoihoc] !== '') {
            if (!tencs[classID][buoihoc]) {
              tencs[classID][buoihoc] = []; 
            }
            tencs[classID][buoihoc].push(c.place);
          }
          let classtkb = 'place' + i;
          let tkbcs = document.querySelector('#' + classtkb); 
          if (tencs[classID][buoihoc]) {
            const input = document.createElement("input");
            input.value = tencs[classID][buoihoc].join('\n'); 
            input.disabled = true;
            tkbcs.appendChild(input);
            if (i < 157) {
              tkbcs.appendChild(document.createElement("br"));
            }
          }
        }       
      });
      console.log("Cơ sở: ");
      console.log(tencs);
    });

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
  function shownote(){
    fetch('/json')
    .then(response => response.json())
    .then(tkbdata => {
      let tennote = {};
      tkbdata.forEach(c => {
        const classID = c.classID;
        if (!tennote[classID]) {
          tennote[classID] = {}; // Tạo một object mới nếu chưa tồn tại
        }

        for (let i = 1; i <= 157; i++) {
          let buoihoc = 'buoi' + i;
          let notedate = 'note'+i;
          if (c[buoihoc] !== '') {
            if (!tennote[classID][buoihoc]) {
              tennote[classID][buoihoc] = []; 
            }
            tennote[classID][buoihoc].push(c[notedate]);
          }
          let classtkb = 'note' + i;
          let tkbnote = document.querySelector('#' + classtkb); 
          if (tennote[classID][buoihoc]) {
            const input = document.createElement("input");
            const inputid = document.createElement("input");
            const submit = document.createElement("input");
            const form = document.createElement("form");
            const idform = document.createElement('input');
            let clid = c._id;
            let cid = c.classID;
            idform.type = 'hidden';
            idform.name = 'id';
            idform.value = clid;
            form.action=`/update/`+clid;
            form.method='post';
            input.value = tennote[classID][buoihoc].join('\n');
            input.name =notedate;
            inputid.type = 'hidden';
            inputid.value = cid;
            inputid.name = 'idclass';
            submit.value = 'note';
            submit.type = 'submit';
            tkbnote.appendChild(form);
            form.appendChild(input);
            form.appendChild(inputid);
            form.appendChild(idform);
            form.appendChild(submit);
            // if (i < 157) {
            //   tkbnote.appendChild(document.createElement("br"));
            // }
          }
        }      

        // if(c.note !== ''){
        //   if (!tennote[classID].note) {
        //     tennote[classID].note = []; 
        //   }
        //   tennote[classID].note.push(c.note);
        // }
        // for (let i = 1; i <= 157; i++) {
        //   let classtkb = 'note' + i;
        //   let loptkb = 'class' + i;
        //   let tkbclass = document.querySelector('#' + loptkb);
        //   let tkblop = document.querySelector('#' + classtkb);
        
        //   // Kiểm tra nếu tkbclass và tkblop không phải là null trước khi truy cập innerHTML
        //   if (tkbclass && tkblop && tennote[classID].note && tkbclass.innerHTML.trim() !== '') {
            // const input = document.createElement("input");
            // const inputid = document.createElement("input");
            // const submit = document.createElement("input");
            // const form = document.createElement("form");
            // const idform = document.createElement('input');
            // let clid = c._id;
            // let cid = c.classID;
            // idform.type = 'hidden';
            // idform.name = 'id';
            // idform.value = clid;
            // form.action=`/update/`+clid;
            // form.method='post';
            // input.value = tennote[classID].note.join('\n');
            // input.name ='note';
            // inputid.type = 'hidden';
            // inputid.value = cid;
            // inputid.name = 'idclass';
            // submit.value = 'note';
            // submit.type = 'submit';
            // tkblop.appendChild(form);
            // form.appendChild(input);
            // form.appendChild(inputid);
            // form.appendChild(idform);
            // form.appendChild(submit);
            // tkblop.appendChild(document.createElement("br"));
        //   }
        // }
        
      });
      console.log("Note: ");
      console.log(tennote);
    });
  }
  
  
  
  







 });