function sumTwoSmallestNumbers(numbers) {  
  var arr = copyWith(numbers);
  var retVal;
  
  arr.sort(function(a,b){return a-b;});
  var a = arr[0];
  var b = arr[1];
  retVal = a+b;
  
  return retVal;
  
};

var copyWith = function (arr){
  var out = [];
  for (var i=0;i<arr.length;i++){
    out.push(arr[i]);
  }
  return out;
}