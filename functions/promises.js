//promise
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    //resolve("This is the promise data");
    reject("This is the promise error");
  }, 2000);
});

myPromise.then(
  //runs by the promise resolve()
  data => {
    console.log(data);
  },
  //runs by the promise reject();
  error => {
    console.log(error);
  }
);

//Another example using promise chaining
const myPromiseNum = num =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      typeof num === "number" ? resolve(num * 4) : reject("A number must be provided");
    }, 2000);
  });

//runs the promises in chain mode...
myPromiseNum("2")
  .then(data => {
    //pass 2 as number and capture 1st resolve
    return myPromiseNum(data); //returns another call to myPromiseNum(8)
  })
  .then(data => {
    //capture the 2nd resolve
    return myPromiseNum(data); //returns another call to myPromiseNum(32)
  })
  .then(data => {
    //capture the 3nd resolve, data is 128
    console.log(data);
  })
  .catch(error => {
    //in case of error, performs the code below
    console.log(error);
  });
