function caesarScript(str,num){
var num = document.getElementById("inputKey").value;
var str = document.getElementById("inputText").value;
/*if the number entered is too big*/
/*num = num % 26 */
var lowerCaseStr = str.toLowerCase();
var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
var newStr = '' /*final string that will be returned at the end */
for(var i =0; i <lowerCaseStr.length;i++){
    var currentLetter = lowerCaseStr[i];
    if(currentLetter === ' '){
        newStr += currentLetter;
        continue;
    }
    var currentIndex = alphabet.indexOf(currentLetter);
    /*if the letter is an A the alphabet index of it will be 0
    and then we can add to it the number right here to move it
    up or down the index of the alphabet Array */
    var newIndex = currentIndex + num;
    /*if the index number was 26 well their is no alphabet number 27..*/
    if(newIndex > 25) newIndex = newIndex - 26;
    if(newIndex < 0 ) newIndex = newIndex + 26;
    /*we want to check to see if it was capitalized 
    if STR the original string that we passed in if STR
    at position i is equal to STR at position i  */
    
    if(str [i] === str[i].toUpperCase()){
        newStr += alphabet[newIndex].toUpperCase();
    }
    else newStr += alphabet[newIndex];
    return newStr;
 }
 document.getElementById("resultText").innerText = newStr;
}
