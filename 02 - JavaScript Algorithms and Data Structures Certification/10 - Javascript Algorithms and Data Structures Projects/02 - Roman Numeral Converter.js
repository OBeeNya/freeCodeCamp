*** ROMAN NUMERAL CONVERTER ***

function convertToRoman(num) {
  var numb=num;
  var rom=['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];
  var equ=[1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  var result=[];
  for(let i=12;i>=0;i--){
    while(numb>=equ[i]){
      result.push(rom[i]);
      numb=numb-equ[i];
    }
  }
  return result.join('') ;
}
