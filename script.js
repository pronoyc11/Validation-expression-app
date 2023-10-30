const email = document.querySelector(".email");
const phone = document.querySelector(".phone");
const postcode = document.querySelector(".postcode");

email.addEventListener("click", validate);
phone.addEventListener("click", validate);
postcode.addEventListener("click", validate);

function validate(e) {
  const field = e.target.className.trim();
  const value = prompt(`Write your ${field}:`);
console.log(value);
  switch (field) {
    case "email":
      if (
        /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)
      ) {
        alert("Your email is valid!");
      } else {
        alert("Your email is not valid!");
      }
      break;
    case "phone":
        if (
            /^\+?(88)?0?1[3456789][0-9]{8}\b/.test(value)
          ) {
            alert("Your phone number is valid!");
          } else {
            alert("Your phone number is not valid!");
          }
      break;
    case "postcode":
        if (
            /^\d{4}$/.test(value)
          ) {
            alert("Your Postcode is valid!");
          } else {
            alert("Your Postcode is not valid!");
          }
    default:
      return;
  }
}
