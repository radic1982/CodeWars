function squareDigits(num){
  //may the code be with you
  var str = num.toString();
  var number = numToString(str);
  var ret = Number(number);
  return ret;
}

var numToString = function (str){
  
  var retString = '';
  var retVal = '';
  
  for(var i=0; i<str.length; i++) {
    var numberString = str.charAt(i);
    var number = Number(numberString);
    var ret = number*number;
    var stringNumber = ret.toString();
    retVal += stringNumber; 
  }
  return retVal;
}