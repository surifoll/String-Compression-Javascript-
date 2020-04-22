
function stringCompression (str) {
  if (str.length == 0) {
    console.log('Please enter valid string.');
    return;
  }
  var output = '';
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    count++;
    if (str[i] != str[i+1]) {
      output +=  (count==1?'':count) + str[i];
      count = 0;
    }
  }
  return output;
}

function solution(S, K){
  var arrOfKs = getArrayOfKs(S, K)
  var result = S
  for (var i = 0; i < arrOfKs.length; i++) {
    var res = stringCompression(S.replace(arrOfKs[i],''));
    
    result = result.length > res.length ? res : result;
  }
  return result.length;
}

function getArrayOfKs(S, K){
  S = S.split('');
  var arr = [];
   for(var i = 0; i < S.length; i++){
     var res ='';
      for (var j = i; j < i+K; j++) {
       if(i+K < S.length){
         res += S[j];
       }else{
         break;
       }
    }
    if(res)
     arr.push(res);
  }
   return arr;
}
