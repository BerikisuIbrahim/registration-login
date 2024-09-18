//get form element by id
const registerForm = document.querySelector("#login");
console.log(registerForm);
registerForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(registerForm)
  const messageH1 = document.querySelector('#message');
  messageH1.textContent = "Account login successfully!";
 });
 let age;


 function squareAge(age) {
   return age ** 2;
 }

 const result = squareAge(4);
 console.log(result);

 // Write fullName function
 function fullName(firstName, LastName) {
    //return firstName + LastName
    return `${firstName} ${LastName}`
 }

 const myName = fullName ('Berikisu', 'Ibrahim');
 console.log(myName);