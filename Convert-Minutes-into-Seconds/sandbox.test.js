"use strict";

/*

*/
// Matt
const convertMatt = (minutes) => minutes * 60;

// Rosebt
function convertRosebt (minutes) {
  return minutes * 60;
}

//Igor

function convertIgor (minutes) {
  let int = minutes * 60;
  return int;
}

for (const solution of [
  convertIgor,
  convertMatt,
  convertRosebt
]) {

   describe(solution.name + "", () => {
  it("1",() =>{
    expect(solution(1)).toEqual(60);
  });
  it("2",() =>{
    expect(solution(2)).toEqual(120);
  });
  it("3",() =>{
    expect(solution(8)).toEqual(480);
  });
  it("4",() =>{
    expect(solution(60)).toEqual(3600);
  });
});
  }


