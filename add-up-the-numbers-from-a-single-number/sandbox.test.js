"use strict";

// -sir

function addUpSir(num) {
  return (num * (num + 1)) / 2;
}

// Gabriel

function addUpGabriel(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}

// Korean
function addUpKorean(num) {
  var a = 0;
  for (var i = num; i > 0; i--) {
    a += i;
  }
  return a;
}

// Omaymaguelmami

function addUpOmaymaguelmami(num) {
  
  if (num === 0) {
    return num;
  }
  return num + addUpOmaymaguelmami(num - 1);
}

// Marco

function addUpMarco(num) {
  let i = 0;
  let v = 0;
	while( i < num){
    v = i+v
    i++
  }
  return v+num;
}




for (const solution of [
  addUpGabriel,
  addUpKorean,
  addUpOmaymaguelmami,
  addUpMarco,
  addUpSir,
]) 
{
describe(solution.name + "", () => {
  it("1",() =>{
    expect(solution(1)).toEqual(1);
  });
  it("2",() =>{
    expect(solution(2)).toEqual(3);
  });
  it("3",() =>{
    expect(solution(3)).toEqual(6);
  });
  it("4",() =>{
    expect(solution(4)).toEqual(10);
  });
});
  }



 


