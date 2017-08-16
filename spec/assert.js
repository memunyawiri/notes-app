var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: assertion is " + assertionToCheck);
    }else{
      console.log("truthy");
    }
  }
}
