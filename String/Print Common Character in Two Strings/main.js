//var input = readline();

var str1 = readline();
var str2 = readline();

var one = str1.replace(/ /g, '');
var two = str2.replace(/ /g, '');
var result = [];

for (var i = 0; i < one.length; i++) {
  if (two.indexOf(one[i]) !== -1 && result.indexOf(one[i]) === -1) {
    result.push(one[i]);
  }
}

var L = result.join('').length;
print(L === 0 ? -1 : L +'\n'+ result.join(''));
