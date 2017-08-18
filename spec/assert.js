var assert = {
  isTrue: function(assertionToCheck, testName) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: assertion is " + assertionToCheck);
    }else{
      console.log("Test has passed: " + testName);
    }
  },

  isEqualTo: function(arg1, arg2) {
    if (arg1 === arg2) {
      console.log("Test has passed: " + arg1 + " is equal to " + arg2);
    }else{
      throw new Error("Assertion failed: " + arg1 + " is not equal to " + arg2);
    }
  }
};

// function testEquality() {
//   assert.isEqualTo(1,1);
// }
// testEquality();
