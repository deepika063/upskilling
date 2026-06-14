console.log("Debugging Exercise Loaded Successfully");

let seats = 50;

function register() {

    console.log("Register button clicked");

    debugger; // Set breakpoint here

    if (seats > 0) {

        seats--;

        document.getElementById("availableSeats").innerHTML =
            "Available Seats: " + seats;

        console.log("Registration successful");
        console.log("Remaining Seats:", seats);

    }
    else {

        console.error("No seats available");

    }

}
