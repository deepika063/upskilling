const button = document.getElementById("registerBtn");

button.addEventListener("click", function () {

    alert("Registration Successful!");

});

button.addEventListener("mouseover", function () {

    button.style.backgroundColor = "lightgreen";

});

button.addEventListener("mouseout", function () {

    button.style.backgroundColor = "";

});
