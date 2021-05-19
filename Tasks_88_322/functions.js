
function findMax(start, end) {
  let sum_start = 0;
  let index = 0;
  for(let i = start; i <= end; i++) {
    let sum_inside = 0;
    for(let j = 1; j < i; j++){
      if(i%j===0){
        sum_inside += j;
      }
    }

    if(sum_start < sum_inside){
      sum_start = sum_inside;
      index = i;
    }
  }

  return index
}

function reverse(num){
  return +num.toString().split('').reverse().join('')
}

function checkThree(num){
  const new_num = Math.pow(num,2);
  return new_num.toString().split('').filter(item=>+item===3).length > 0
}

console.log(reverse(1234))

console.log(checkThree(444))

console.log(findMax(1,23000))
