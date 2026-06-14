function fetchEvent() {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve("Technology Workshop Loaded!");

        }, 2000);

    });

}

fetchEvent()

.then(data => {

    document.getElementById("output").textContent = data;

})

.catch(error => {

    console.log(error);

});
