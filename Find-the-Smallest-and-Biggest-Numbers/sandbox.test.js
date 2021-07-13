"use strict";

/*

*/

// Marc
function minMaxMarc(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}

//Saw
function minMaxSaw(arr) {
  var min = Math.min(...arr);
  var max = Math.max(...arr);

  return [min, max];
}

//Evan
function minMaxEvan(arr) {
  arr.sort(function (a, b) {
    return a - b;
  });
  return [arr[0], arr[arr.length - 1]];
}

//Yoon

function minMaxYoon(arr) {
  var returnArr = [];
  var min = arr[0];
  var max = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  returnArr.push(min);
  returnArr.push(max);

  return returnArr;
}





for (const solution of [
  minMaxEvan,
  minMaxMarc,
  minMaxMostafaFawans,
  minMaxSaw,
  minMaxYoon
]) {
  describe(solution.name + ": minMax", () => {
    describe("minMax", () => {
      it("[1, 54]", () => {
        expect(solution([14, 35, 6, 1, 34, 54])).toEqual([1, 54]);
      });
      it(" [1.346, 1.8734]", () => {
        expect(solution([1.346, 1.6532, 1.8734, 1.8723])).toEqual([
          1.346,
          1.8734,
        ]);
      });
      it(" [0.2345, 0.984]", () => {
        expect(solution([0.432, 0.874, 0.523, 0.984, 0.327, 0.2345])).toEqual([
          0.2345,
          0.984,
        ]);
      });
      it(" [13, 98]", () => {
        expect(solution([13, 72, 98, 43, 24, 65, 31])).toEqual([13, 98]);
      });
    });
  });
}
