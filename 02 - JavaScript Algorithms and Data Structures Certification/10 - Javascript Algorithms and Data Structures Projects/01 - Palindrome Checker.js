function palindrome(str) {
  var string = str;
  string=string.toLowerCase();
  string=string.match(/[A-Za-z0-9]/g);
  var stringCheck=[];
  for(let i=0;i<string.length;i++){
    stringCheck.unshift(string[i]);
  }
  string=string.join('');
  stringCheck=stringCheck.join('');
  if(string==stringCheck){
    return true;
  }
  else{
    return false;
  }
}
