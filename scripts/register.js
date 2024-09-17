//get form element by id

const registerForm = document.querySelector("#register");
console.log(registerForm);

//Handle form submit event
registerForm.addEventListener("submit", function (event) {
  event.preventDefault();
  // Collect from data
  const formData = new FormData(registerForm)
// Send data to backend
// Display success message to user 
  const messageH1 = document.querySelector('#message');
  messageH1.textContent = "Account registered successfully!";
 });
// registerForm.onsubmit = function (event) {
//     event.preventDefault();
//   console.log(event);
// };

// Declare variable age
let age;


// Define square age function

// function squareAge() {
//   result = age * age;
//   return result;
// }

// let answer = squareAge(20);
// console.log(answer);

function squareAge(age) {
  return age ** 2;
}

const result = squareAge(4);
console.log(result);