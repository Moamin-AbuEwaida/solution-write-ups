"use strict";

/*

*/

//VicKC
function getFirstValueVic(arr) {
	return arr[0];
}

//Dan Barrick

const getFirstValueDan = arr => arr[0];


//paddo
function getFirstValuePaddo(arr) {
	return arr.shift();
}








for (const solution of [
  getFirstValueDan,
  getFirstValuePaddo,
  getFirstValueVic
]) {

   describe(solution.name + "getFirstvalue", () => {
  it("[1, 2, 3]",() =>{
    expect(solution([1, 2, 3])).toEqual(1);
  });
  it("[80, 5, 100]",() =>{
    expect(solution([80, 5, 100])).toEqual(80);
  });
  it("[-500, 0, 50]",() =>{
    expect(solution([-500, 0, 50])).toEqual(-500);
  });
  it("[401,49,1,5,767]",() =>{
    expect(solution([401,49,1,5,767])).toEqual(401);
  });
});
  }


