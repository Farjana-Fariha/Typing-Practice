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
   const alphabetArray = alphabetString.split('');

   // generate alphabet
   const index = Math.round(Math.random()*25);
   const alphabet = alphabetArray[index];
   return alphabet;
}