var intToRoman = function(s) {
    let romanletters = [
  {
    '1':'I',
    '5': 'V'
  },
  {
    '1': 'X',
    '5': 'L'
  },
  {
    '1': 'C',
    '5': 'D'
  },
  {
    '1': 'M',
  }
];

let roman = '';
let n = s.toString().length - 1;
while(s>=1) {
   let letter = Math.floor(s/(10**n));
   if(letter!==0) {
       switch(letter) {
            case 8:
               roman = roman + romanletters[n]['5'] + romanletters[n]['1'] + romanletters[n]['1'] + romanletters[n]['1'];
               break;
            case 9:
              roman = roman + romanletters[n]['1']+romanletters[n+1]['1'];
              break;
           case 2:
               roman = roman + romanletters[n]['1'] + romanletters[n]['1'];
               break;
           case 3:
               roman = roman + romanletters[n]['1'] + romanletters[n]['1'] + romanletters[n]['1'];
               break;
           case 4:
               roman = roman + romanletters[n]['1']+romanletters[n]['5'];
                break;
           case 6:
               roman = roman + romanletters[n]['5'] + romanletters[n]['1'];
               break;
            case 7:
               roman = roman + romanletters[n]['5'] + romanletters[n]['1'] + romanletters[n]['1'];
               break;
            default: roman = roman + romanletters[n][letter];
        }
      }
      s = s%(10**n);
      n = n-1;  
   }
return roman;
};