// Variabels

let userName = document.getElementById('name');
let warningName = document.getElementById('warning-name');
let userEmail = document.getElementById('email');
let warningEmail = document.getElementById('warning-email');
let checkBox = document.getElementsByName('user-choice');
let warningNewsletter = document.getElementById('warning-newsletter');
let radioBtn = document.getElementsByName('user-format');
let warningFormat = document.getElementById('warning-format');
let testCheckBox = false; // used to check if at least one of the checkboxes is checked
let testRadioBtn = false; // used to check if at least one of the checkboxes is checked
let allGood = true; // checks if all the part of the funstion are okay and thanks the user for subscribing

function validate() {

   // Check if the name input is filled
   if (userName.value == "" ) {
      userName.style.borderColor = 'red';
      userName.style.borderWidth = '3px';
      warningName.style.display = 'inline';
      alert('Please insert your Full Name');
      allGood = false;
   }

   // Check if the Email input is filled
   if (userEmail.value == "" ) {
      userEmail.style.borderColor = 'red';
      userEmail.style.borderWidth = '3px';
      warningEmail.style.display = 'inline';
      alert('Please insert your Email Address');
      allGood = false;
   }

   // Check if the Email is valid using the checkValidity function
   if (userEmail.checkValidity() == 0) {
      userEmail.style.borderColor = 'red';
      userEmail.style.borderWidth = '3px';
      warningEmail.style.display = 'inline';
      alert('The Email should be in the form of example@mail.com');
      allGood = false;
   }

   // Iterates through all the checkboxes and checks if at lest one is checked   
   for (i=0; i< checkBox.length; i++) {
      if (checkBox[i].checked){  
         testCheckBox=true;
         break;
      } 
   }
   if (testCheckBox == false) {
      alert('Please select at least one Newsletter');
      warningNewsletter.style.display = 'inline';
      allGood = false;
   }

   // Iterates through all the radio buttons and check if there is a selection
   for (i=0; i< radioBtn.length; i++) {   
      if (radioBtn[i].checked){  
         testRadioBtn=true;
         break;
      } 
   }
   if (testRadioBtn == false) {
      alert('Please select the format you would like to receve the Newsletter');
      warningFormat.style.display = 'inline';
      allGood = false;
   }

   if (allGood) {
      alert('Hi ' + userName.value + ', thank you for subscribing to our Newsletter!');
   }

}

// It resizes the navigation bar's pading when the user scrolls down (resource https://www.w3schools.com/howto/howto_js_navbar_shrink_scroll.asp)
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    document.getElementsByTagName('h1')[0].style.padding = "0.6rem";
  } else {
    document.getElementsByTagName('h1')[0].style.padding = "1.8rem";
  }
}