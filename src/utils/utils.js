export const pathGet = (arr1, query) => {
  // TASK 1:
  // Write a function that searches through the input array / queryect
  // and returns the appropriate string path leading to the input query, if found
  // Example:
  // const a = {
  //    user: {
  //      id: 1,
  //      name: {
  //        firstName: "James",
  //        lastName: "Ibori"
  //      },
  //      location: {
  //        city: "Ikoyi",
  //        state: "Lagos",
  //        address: "One expensive house like that"
  //      }
  //    }
  // }
  // `pathGet(a, 'One expensive house like that')` = "a.user.location.address"
  // `pathGet(a, 'James')` = "a.user.name.firstName"

  // ============== CODE GOES BELOW THIS LINE :) ==============

  function find(obj, item) {
    for (var key in obj) {
      // for each key in obj (obj is either an object or an array)
      if (obj[key] && typeof obj[key] === "object") {
        // if the current property (value of obj[key]) is also an object/array
        var result = find(obj[key], item); // try finding item in that object
        if (result) {
          // if we find it
          result.unshift(key); // we shift the current key to the path array (result will be an array of keys)
          return result; // and we return it to our caller
        }
      } else if (obj[key] === item) {
        // otherwise (if obj[key] is not an object or array) we check if it is the item we're looking for
        return [key]; // if it is then we return the path array (this is where the path array get constructed)
      }
    }
  }

  // return find(arr1, query);
  const result = find(arr1, query);
  return result ? `${arr1}.${result.join(".")}` : null;
};
