*** TELEPHONE NUMBER VALIDATOR ***

function telephoneCheck(str) {
  if(str.match(/[0-9-() ]/g).join('')==str){
    var clean=str.match(/[0-9]/g);
    if(clean.length==11){
      if(clean[0]!=1){
        return false;
      }
      else if(str[0]!=1){
        return false;
      }
      else{
        if(str.match(/[0-9-() ]/g)[1]!='('&&str.match(/[0-9-() ]/g)[5]==')'){
          return false;
        }
        else if(str.match(/[0-9-() ]/g)[1]=='('&&str.match(/[0-9-() ]/g)[5]!=')'){
          return false;
        }
        else{
        return true;}
      }
    }
    else if(clean.length!=10){
      return false;
    }
    else{
       if(str.match(/[0-9-() ]/g)[0]!='('&&str.match(/[0-9-() ]/g)[3]==')'){
          return false;
        }
        else if(str.match(/[0-9-() ]/g)[0]=='('&&str.match(/[0-9-() ]/g)[4]!=')'){
          return false;
        }
        else{
        return true;}
    }
  }
  else{
    return false;
  }
}
