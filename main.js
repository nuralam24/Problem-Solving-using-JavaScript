//var input = readline()

var T = readline().split(' ').map(x => parseInt(x));
var K = parseInt(readline());
print(binarySearch(T, K));


function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);

    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]) {
            end = middle - 1;
        }
        else {
            start = middle + 1;
            middle = Math.floor((start + end) / 2);
        }
    }
    return arr[middle] === elem  ?  middle  :  -1;
}

//