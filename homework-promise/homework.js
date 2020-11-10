// study

// BAI1

// Cach 1
// let promise = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve("Promise is the best");
//   }, 5000);
// });

// promise.then(function (success) {
//   console.log(success);
// });

// cách 2 dùng async await

// async function call(){
//     await setTimeout(() => {
//         console.log('Promise is da bezt')
//     }, 5000)
// }
// call();


// BAI 4
// function randomNumber(){
//     let number = Math.floor(Math.random()*11);
//     return number;
// }
// const x = randomNumber();
// if (x < 0){
//     console.log(`Failed: the number is smaller than 0`);
// }
// else if (x > 10){
//     console.log(`Failed: the number is bigger than 0`);
// }
// else {
//     console.log(`Passed, bravo`);
// }

// BAI 5
// function randomNumber2(a, b) {
//   return Math.floor(Math.random() * (b - a + 1) + a); 
// }
// const y = randomNumber2(4, 16);
// if (y < 0) {
//   console.log(`Failed: the number is smaller than 0`);
// } else if (y > 10) {
//   console.log(`Failed: the number is bigger than 10`);
// } else {
//   console.log(`Passed, bravo`);
// }



// BAI6
// function caculate(x1, y1, x2, y2) {
//   let a = (x1 - x2) ** 2;
//   let b = (y1 - y2) ** 2;
//   let c = Math.sqrt(a + b) ;
//   return c;
// }
// const d = caculate(3, 10, 0, 6);
// if (d !== 5) {
//   console.log(`Failed: the calculation is wrong`);
// } else {
//   console.log(`Passed, bravo`);
// }


