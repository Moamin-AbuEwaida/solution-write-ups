'use strict';

/*

*/

// Pustur
const canNestPustur = (arr1, arr2) =>
  Math.min(...arr1) > Math.min(...arr2) &&
  Math.max(...arr1) < Math.max(...arr2);

// NeveenSharma

function canNestNeveenSharma (arr1, arr2) {
	let arr1Min = Math.min(...arr1), arr1Max = Math.max(...arr1), arr2Min = Math.min(...arr2), arr2Max = Math.max(...arr2);
  
  if (arr1Min > arr2Min && arr1Max < arr2Max) {
    return true;
  } else {
    return false;
  }
}

// JamesMartinez

function canNestJamesMartinez (arr1, arr2) {
	let firstMax = Math.max(...arr1);
  let secondMax = Math.max(...arr2);

  let firstMin = Math.min(...arr1);
  let secondMin = Math.min(...arr2);

  if ((firstMax < secondMax) && (firstMin > secondMin)) {
    return true;
  } else {
    return false;
  }
}

//YamanAlramahi
function canNestYamanAlramahi (arr1, arr2) {
	arr1=arr1.sort((a,b)=>a-b);
  arr2=arr2.sort((a,b)=>a-b);
  let arr1_min=arr1[0];
  let arr2_min=arr2[0];
  let arr1_max=arr1[arr1.length-1];
  let arr2_max=arr2[arr2.length-1];
  if(arr1_min>arr2_min && arr1_max<arr2_max)return true
  return false
}







for (const solution of [
  canNestJamesMartinez,
  canNestNeveenSharma,
  canNestYamanAlramahi,
  canNestPustur
]) {
  describe(solution.name + ': canNest', () => {
    describe('canNest', () => {
      it('ture', () => {
        expect(solution([1, 2, 3, 4],[0, 6])).toEqual(true);
      });
       it('true', () => {
        expect(solution([3, 1], [4, 0])).toEqual(true);
      });
       it('false', () => {
        expect(solution([9, 9, 8], [8, 9, 10])).toEqual(false);
      });
       it('false', () => {
        expect(solution([9, 9, 8], [8, 9])).toEqual(false);
      });
       it('false', () => {
        expect(solution([1, 2, 3, 4], [2, 3])).toEqual(false);
      });
    });
  });
}
