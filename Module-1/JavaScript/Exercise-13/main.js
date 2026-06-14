class Event {

    constructor(name, date) {

        this.name = name;
        this.date = date;

    }

    getDetails() {

        return `${this.name} - ${this.date}`;

    }

}

class OnlineEvent extends Event {

    constructor(name, date, platform) {

        super(name, date);

        this.platform = platform;

    }

    getDetails() {

        return `${super.getDetails()} | Platform: ${this.platform}`;

    }

}

const event = new OnlineEvent(
    "JavaScript Workshop",
    "25 July 2026",
    "Zoom"
);

document.getElementById("output").textContent =
    event.getDetails();
