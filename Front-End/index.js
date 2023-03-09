// On page initialization set correct data
document.addEventListener('DOMContentLoaded', onPageInit);
 
function onPageInit() {
  let messageForm = document.getElementById('message-form');
  let numberDetails = document.getElementById('number-details');
  let googleMap = document.getElementById('google-map');
 
  messageForm.style.display = 'block';
  googleMap.style.display = 'none';
  numberDetails.style.display = 'none';
}
 
// Change view on Click
function visualiseAddress() {
  let messageForm = document.getElementById('message-form');
  let numberDetails = document.getElementById('number-details');
  let googleMap = document.getElementById('google-map');
 
  googleMap.style.display = 'block';
  messageForm.style.display = 'none';
  numberDetails.style.display = 'none';
}
 
function visualisePhoneNumber() {
  let numberDetails = document.getElementById('number-details');
  let messageForm = document.getElementById('message-form');
  let googleMap = document.getElementById('google-map');
 
  numberDetails.style.display = 'block';
  googleMap.style.display = 'none';
  messageForm.style.display = 'none';
}
 
function visualiseMap() {
  let googleMap = document.getElementById('google-map');
  let numberDetails = document.getElementById('number-details');
  let messageForm = document.getElementById('message-form');
 
  messageForm.style.display = 'block';
  googleMap.style.display = 'none';
  numberDetails.style.display = 'none';
}