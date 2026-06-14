const events = [
    "Workshop",
    "Music Festival",
    "Sports Meet"
];

const moreEvents = [
    ...events,
    "Food Carnival"
];

const displayEvents = (...items) => {

    return items.join(", ");

};

document.getElementById("result").textContent =
    displayEvents(...moreEvents);
