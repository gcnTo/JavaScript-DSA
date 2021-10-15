function doesArraysContainSameElement(arr1,arr2){
  //Creates an object called dictionary
  dictionary = {};
  //Turns arr1 into a hashtable(dictionary)
  for (let i=0; i < arr1.length; i++){
    dictionary[arr1[i]] = true;
  }
  //Checks if any item in arr2 is also in the dictionary
  for (let j=0; j < arr2.length; j++){
    if (dictionary[arr2[j]] === true){
      return true;
    }
  }
  return false;
}

console.log(doesArraysContainSameElement([1,2,3],[3,5,6])) // Should return true
console.log(doesArraysContainSameElement([1,2,3],[4,5,6])) // Should return false
