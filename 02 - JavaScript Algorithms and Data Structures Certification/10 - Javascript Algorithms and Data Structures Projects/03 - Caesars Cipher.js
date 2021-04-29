*** CAESARS CIPHER ***

function rot13(str) {
  var result=str.split('');
  for(let i=0;i<result.length;i++){
    if(result[i].charCodeAt()<=90&&result[i].charCodeAt()>=65){
    result[i]=result[i].charCodeAt();
    if(result[i]>77){
      result[i]-=13;
    }
    else{
      result[i]+=13
    }
    result[i]=String.fromCharCode(result[i]);
    }
  }
  return result.join('');
}
