// Hide  page
function hideElementById(elementId){
   const homeSection = document.getElementById(elementId);
   homeSection.classList.add('hidden');
}
// Show page
function showElementById(elementId){
   const playgroundSection = document.getElementById(elementId);
   playgroundSection.classList.remove('hidden')
}
// Generate Alphabet
function generateAlphabet(){
   const alphabetString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   const alphaLowerCase = alphabetString.toLowerCase();
   const alphabetArray = alphaLowerCase.split('');

   // generate alphabet
   const index = Math.round(Math.random()*25);
   const alphabet = alphabetArray[index];
   return alphabet;
}
// Hightlight alphabet
function setHightlightBg(elementId){
   const getAlphabet = document.getElementById(elementId);
   getAlphabet.classList.add('bg-orange-300')
}
function removeHightlightBg(elementId){
   const getAlphabet = document.getElementById(elementId);
   getAlphabet.classList.remove('bg-orange-300')
}
// get current score and life 
function getPrevData(elementId){
   const element = document.getElementById(elementId);
   const data = parseInt(element.innerText);
   return data;
}
// set new data
function setCurrentData(elementId, value){
   const element = document.getElementById(elementId);
   element.innerText = value;
}