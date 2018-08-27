function getMiddle(s) {
  var x = s.length;
  var c = x/2;
  var k = Math.round(c);
  var r ="";
  
  if ( x <= 2 ){
    r = s;
    return r;
    
  }else {
    
    if ( x%2 === 0 ){
      r = s.substr(k-1, 2);
      return r;
      
    }else {
      
      r = s.substr(k-1, 1);
      return r;
    }
  }
}