"use strict";

/*

*/

// Maria Milovanava

function largestSwapMaria(num) {
  return num / 10 > num % 10;
}

// CVF
function largestSwapCVF(num) {
  return Math.floor(num / 10) >= num % 10;
}

//Binada

function largestSwapBinada(num) {
  let first = Math.trunc(num / 10);
  let second = num - first * 10;
  if (num >= first + second * 10) {
    return true;
  } else {
    return false;
  }
}

//PavelSrom

const largestSwapPavelSrom = (num) =>
  Number(num.toString().split("").reverse().join("")) <= num;

//AlwaysDistracted

function largestSwapAlwaysDistracted(num) {
  return num.toString().charAt(0) >= num.toString().charAt(1);
}

for (const solution of [
  largestSwapAlwaysDistracted,
  largestSwapBinada,
  largestSwapCVF,
  largestSwapMaria,
  largestSwapPavelSrom,
]) {
  describe(solution.name + ": largestSwap", () => {
    describe("largetSwap", () => {
      it("false", () => {
        expect(solution(27)).toEqual(false);
        ("27 < 72, so not largest swap.");
      });
      it("true", () => {
        expect(solution(43)).toEqual(true);
        ("43 > 34, so largest swap.");
      });
      it("false", () => {
        expect(solution(14)).toEqual(false);
        ("14 < 41, so not largest swap.");
      });
      it("true", () => {
        expect(solution(53)).toEqual(true);
        ("53 > 35, so largest swap.");
      });
      it("true", () => {
        expect(solution(99)).toEqual(true);
        ("Cannot do better, so largest swap");
      });
    });
  });
}
