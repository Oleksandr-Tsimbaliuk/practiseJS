// import "../сss/common.css";
// promise.then(
//   (result) => {
//     console.log(result);
//   },
//   (error) => {
//     console.log(error);
//   }
// );

// promise
//   .then((result) => {
//     console.log(result);
//     return 2;
//   })
//   .then((x) => {
//     console.log(x);
//     return 5;
//   })
//   .then((y) => {
//     console.log(y);
//     return 10;
//   })
//   .catch((error) => console.log(error))
//   .finally(() => console.log("finnaly"));

// const makeOrder = (dish) => {
//   return new Promise((resolve, reject) => {
//     const passed = Math.random() > 0.4;

//     setTimeout(() => {
//       if (passed) {
//         resolve("Success! Value passed to resolve function");
//       }

//       reject("Error! Error passed to reject function");
//     }, 1000);
//   });
// };

// makeOrder("ЗАКАЗ").then(OnMakeOrderSuccess).catch(OnMakeOrderError);

// function OnMakeOrderSuccess(result) {
//   console.log("OnMakeOrderSuccess");
//   console.log(result);
// }

// function OnMakeOrderError(error) {
//   console.log("OnMakeOrderError");
//   console.log(error);
// }
