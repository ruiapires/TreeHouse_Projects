//Problem: Hints are shown even when form is valid
//Solution: Hide and show them at appropriate times
var $password = $('#password');
var $confirmPassword = $('#confirm_password');
//1. Hide hints
$('form span').hide();

function isPasswordValid() {
  return $password.val().length > 8;
}

function arePasswordsMatching(){
  return $password.val() === $confirmPassword.val();
}

function canSubmit() {
  return isPasswordValid() && arePasswordsMatching();
}

function passwordEvent(){
  //2.1. If the password is valid (over 8 charecters) 
  if(isPasswordValid()){
    //2.1.1. Hide hint if valid
    $password.next().hide();
  } else {
    //2.1.2. Else, show hint
    $password.next().show();
  }
}

function confirmPasswordEvent(){
  //3.1. Find if password and confirmation match
  if(arePasswordsMatching()){
    //3.1.1. Hide hint if match
    $confirmPassword.next().hide();
  } else {
    //3.1.2. Else, show hint
    $confirmPassword.next().show();
  }    
}

function enableSubmitEvent(){
  $('#submit').prop('disable', !canSubmit());
}

//2. When event happens on password input
$password.focus(passwordEvent).keyup(passwordEvent).focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);
  
//3. When event happens on confirmation
$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

enableSubmitEvent();

  