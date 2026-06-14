function validateForm() {

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    if (name === "") {

        alert("Name is required");

        return false;

    }

    if (!email.includes("@")) {

        alert("Enter a valid email");

        return false;

    }

    alert("Form submitted successfully");

    return true;

}
