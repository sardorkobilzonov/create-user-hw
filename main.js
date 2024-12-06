const createUserBtn = document.querySelector(".create-btn");
const resultContainer = document.querySelector(".result-container");
const userDetails = document.querySelector(".user-details");

createUserBtn.addEventListener("click", () => {
  const fname = document.querySelector(".fname").value;
  const lname = document.querySelector(".lname").value;
  const age = document.querySelector(".age").value;
  const profession = document.querySelector(".profession").value;
  const gender = document.querySelector(".gender").value;
  const country = document.querySelector(".country").value;

  if (fname && lname && age && profession && gender && country) {
    userDetails.innerHTML = `
            <strong>First Name:</strong> ${fname}<br>
            <strong>Last Name:</strong> ${lname}<br>
            <strong>Age:</strong> ${age}<br>
            <strong>Profession:</strong> ${profession}<br>
            <strong>Gender:</strong> ${gender}<br>
            <strong>Country:</strong> ${country}
        `;
    resultContainer.style.display = "block";
  } else {
    alert("Please fill all the fields!");
  }
});
