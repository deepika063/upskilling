const eventList = [
    "Technology Workshop",
    "Music Festival",
    "Sports Meet",
    "Food Carnival"
];

eventList.push("Art Exhibition");

const filteredEvents = eventList.filter(
    event => event.includes("Workshop") || event.includes("Festival")
);

const upperCaseEvents = filteredEvents.map(
    event => event.toUpperCase()
);

const ul = document.getElementById("events");

upperCaseEvents.forEach(event => {

    const li = document.createElement("li");

    li.textContent = event;

    ul.appendChild(li);

});
