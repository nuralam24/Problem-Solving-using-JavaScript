//var input = readline();

var shift = parseInt(readline());  // shift the number 
var s = readline();   // string 

var ShiftChar = "";
var str = s.split("");

str.forEach(S => {
  if (/[A-Za-z]/.test(S)) {
    if (S.charCodeAt() <= 90) {
      S = String.fromCharCode(((S.charCodeAt() - 65 + shift) % 26) + 65); 
    } else {
      S = String.fromCharCode(((S.charCodeAt() - 97 + shift) % 26) + 97); 
    }
  } ShiftChar += S;
});

print(ShiftChar);




// ******** Try IT *********
HackerRank Problem Name :  Caesar Cipher
