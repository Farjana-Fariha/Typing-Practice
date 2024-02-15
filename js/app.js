// show and hide page
function play(){
   hideElementById('home');
   showElementById('playground')
}
function getRandomAlphabet(){
   const alphabet = generateAlphabet();
   // show Alphabet
   const showAlphabet = document.getElementById('show-alphabet');
   showAlphabet.innerText = alphabet;
   // Hightlight alphabet background
   

}
getRandomAlphabet()