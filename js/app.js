document.addEventListener('keyup',function(e){
   const pressedKey = e.key;
   // stop game pressing Esc
   if(pressedKey == 'Escape'){
      gameOver()
   }
   // get displayed key
   const displaydKey = document.getElementById('show-alphabet').innerText;
   // checking match or not
   if(pressedKey === displaydKey){
      // remove bg and re generate letter
      removeHightlightBg(displaydKey);
      getRandomAlphabet();
      // increase score
     const prevScore = getPrevData('score');
      // add score
      const newScore = prevScore + 1;
      // show score
      setCurrentData('score', newScore)
   }else{
       // dicrease life
      const prevLife = getPrevData('life')
       
       const currentLife = prevLife - 1;
       // show score
       setCurrentData('life',currentLife);
       if(currentLife === 0){
         gameOver();
       }
   }
})
function getRandomAlphabet(){
   const alphabet = generateAlphabet();
   // show Alphabet
   
   const showAlphabet = document.getElementById('show-alphabet');
   showAlphabet.innerText = alphabet;
   // Hightlight alphabet background
   setHightlightBg(alphabet);
   // removeHightlightBg();


}
// show and hide page
function play(){
   // page hide and show
   hideElementById('home');
   hideElementById('final-score');
   showElementById('playground');
   getRandomAlphabet();
   // Reset score and life
   setCurrentData('life', 5);
   setCurrentData('score', 0)
}
function gameOver(){
   hideElementById('playground');
   showElementById('final-score');
   // set final score
   const gainedScore = getPrevData('score');
   setCurrentData('gained-score',gainedScore);
   // remove prev alphabet bg
   const showAlphabet = document.getElementById('show-alphabet').innerText;
   removeHightlightBg(showAlphabet)

}



