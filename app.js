//All input-fields

const inputField1 = document.getElementById('input1');
const inputField2 = document.getElementById('input2');
const inputField3 = document.getElementById('input3');
const inputField4 = document.getElementById('input4');

//All errorimgs

const errorImg1 = document.getElementById('error-img1');
const errorImg2 = document.getElementById('error-img2');
const errorImg3 = document.getElementById('error-img3');
const errorImg4 = document.getElementById('error-img4');

//All errormgs

const errorMsg1 = document.getElementById('error-msg1');
const errorMsg2 = document.getElementById('error-msg2');
const errorMsg3 = document.getElementById('error-msg3');
const errorMsg4 = document.getElementById('error-msg4');

function inputErrors(event) {
   let inputVal1 = inputField1.value.trim();
   let inputVal2 = inputField2.value.trim();
   let inputVal3 = inputField3.value.trim();
   let inputVal4 = inputField4.value.trim();
  if (inputVal1 === '') {
     inputVal1 === '';
     inputField1.style.borderColor = 'hsl(0, 100%, 74%)';
     inputField1.style.borderWidth = '2px';
     errorImg1.style.display = 'block';
     errorMsg1.style.display = 'block';
  } else {
     inputVal1 === '';
     errorImg1.style.display = 'none';
     errorMsg1.style.display = 'none';
  }
  if (inputVal2 === '') {
   inputVal2 === '';
   inputField2.style.borderColor = 'hsl(0, 100%, 74%)';
   inputField2.style.borderWidth = '2px';
   errorImg2.style.display = 'block';
   errorMsg2.style.display = 'block';
  } else {
   inputVal2 === '';
   errorImg2.style.display = 'none';
   errorMsg2.style.display = 'none';
  }
  if (inputVal3 === '' || !validateEmail(inputVal3)) {
   inputVal3 === '';
   inputField3.style.borderColor = 'hsl(0, 100%, 74%)';
   inputField3.style.borderWidth = '2px';
   errorImg3.style.display = 'block';
   errorMsg3.style.display = 'block';
  } else {
   inputVal3 === '';
   errorImg3.style.display = 'none';
   errorMsg3.style.display = 'none';
  }
  if (inputVal4 === '') {
   inputVal4 === '';
   inputField4.style.borderColor = 'hsl(0, 100%, 74%)';
   inputField4.style.borderWidth = '2px';
   errorImg4.style.display = 'block';
   errorMsg4.style.display = 'block';
  } else {
   inputVal4 === '';
   errorImg4.style.display = 'none';
   errorMsg4.style.display = 'none';
  }
  event.preventDefault();
}


// regex copied from StackOverflow //

function validateEmail(inputVal3) {
   let valid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return valid.test(String(emailInput).toLowerCase());
 }