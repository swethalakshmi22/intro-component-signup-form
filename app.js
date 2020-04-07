//All input-fields

const firstName = document.getElementById('input1');
// const lastName = document.getElementById('input2');
// const emailAdd = document.getElementById('input3');
// const passwordInput = document.getElementById('input4');

//All errorimgs

const errorImg1 = document.getElementById('errorimg1');
// const errorImg2 = document.getElementById('errorimg2');
// const errorImg3 = document.getElementById('errorimg3');
// const errorImg4 = document.getElementById('errorimg4');

//All errormgs

const errorMsg1 = document.getElementById('error-msg1');
// const errorMsg2 = document.getElementById('error-msg2');
// const errorMsg3 = document.getElementById('error-msg3');
// const errorMsg4 = document.getElementById('error-msg4');


document.getElementsByTagName('button').addEventListener('click', e => {
  e.preventDefault();
  let firstVal = firstName.value.trim();
  // let lastVal = lastName.value.trim();
  // let emailVal = emailAdd.value.trim();
  // let password = passwordInput.value.trim();
  
  if(firstVal === '') {
    firstVal = '';
    firstName.focus();
    errorImg1.style.display = 'block';
    errorMsg1.innerHTML = 'First Name cannot be empty.';
  }
  // } 
   else {
    firstVal = '';
    firstName.focus();
    errorImg1.style.display = 'none';
    errorMsg1.innerHTML = '';
    // lastVal = '';
    // lastName.focus();
    // errorImg2.style.display = 'none';
    // errorMsg2.innerHTML = '';
    // emailVal = '';
    // emailInput.focus();
    // errorImg3.style.display = 'none';
    // errorMsg3.innerHTML = '';
    // password = '';
    // passwordInput.focus();
    // errorImg4.style.display = 'none';
    // errorMsg4.innerHTML = '';
  }
});


// regex copied from StackOverflow //

function validateEmail(emailAdd) {
  let valid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return valid.test(String(emailInput).toLowerCase());
}