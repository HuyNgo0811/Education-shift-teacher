let statusdktime = document.getElementById('statusDkTime');
document.addEventListener('DOMContentLoaded', () => {
  const signtime = document.querySelector('#dktime');
  signtime.addEventListener("click",function() {
    event.preventDefault();
    signtimetkb();
    signgradetkb();
    signplacetkb();
    signbuoitkb();
    statusdktime.innerText='Đã set thông tin cho giáo viên';
  })

  function signbuoitkb(){
    console.log('vo dc ne')
    for(let i=1;i<14;i++){
      let buoi = 'buoi'+i;
      let id = 'time-'+i;
      const timechecked = document.getElementById(id);
      if(timechecked.checked){
        document.getElementById(buoi).value='free';
      }
    }
    let a=0;
    for(let i=1;i<14;i++){
      let buoi='buoi'+i;
      let input = document.getElementById(buoi).value;
      if(input === 'free'){
        a=i;
      }else{a=0;}
      if(a != 0){
        for(let j=a+13;j<157;j+=13){
          let id='buoi'+j;
          document.getElementById(id).value='free';
        }
      }
    }
    return;
  }

  function signplacetkb(){
    for(let i=1;i<11;i++){
      let coso = 'coso'+i;
      let id = 'place'+i;
      const placechecked = document.getElementById(id);
      if(placechecked.checked){
        let newvalue = placechecked.value;
        document.getElementById(coso).value=newvalue;
      }else{
        console.log('khong checked')
      }
    }
    return;
  }

  function signgradetkb(){
    let numgrade=document.getElementById('sokhoi').value;
    for(let i=1;i<=numgrade;i++){
      let khoi = 'khoi'+i;
      let id = 'grade'+i;
      const gradechecked = document.getElementById(id);
      if(gradechecked.checked){
        let newvalue = gradechecked.value;
        document.getElementById(khoi).value=newvalue;
      }
    }
    return;
  }

  function signtimetkb(){
    for(let i=1;i<=13;i++){
      let timeinput = 'time-'+i;
      let time = 'time'+i;
      const timechecked = document.getElementById(timeinput);
      if(timechecked.checked){
        let newvalue = timechecked.value;
        document.getElementById(time).value=newvalue;
      }
    }
    return;
  }
  

  




});
