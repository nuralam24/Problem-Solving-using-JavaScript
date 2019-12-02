//var input = readline();
//var str = readline().toLowerCase();

var str = readline();
var Unique_Str = Array.from(new Set(str)).join('');

var letters = new Object;

for(var i = 0, length = str.length; i < length; i++) {
	var Q = str.charAt(i)
	letters[Q] = (isNaN(letters[Q]) ? 1 : letters[Q] + 1);
}

print("Unique String = " + Unique_Str.length);

for(key in letters) print(key + ' -> ' + letters[key]);

