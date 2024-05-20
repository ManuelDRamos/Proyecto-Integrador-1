class Activity {
    constructor(id, title, description, imgURL) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.imgURL = imgURL;
    }
}

class Repository {
    constructor() {
        this.activities = [];
        this.id = 0;
    }

    addActivity = ({title, description, imgURL}) => {
        const newActivity = new Activity(this.id, title, description, imgURL);
        this.activities.push(newActivity);
        this.id++;
    };


getActivities() {
    return this.activities;
}

removeActivity(id) {
    this.activities = this.activities.filter((activity) => activity.id !== id);
    }
};

const repository = new Repository();


repositorio.getActivities();

const button = document.getElementById("addActivity");

const render = () => {
    const container = document.getElementById("activities-container");
    container.innerHTML = "";

    const activities = repositorio.getActivities();

    const htmlActivities = activities.map((activity) => {
        const card = document.createElement("div");
        card.className = "card";

        const cardImage = document.createElement("img");
        cardImage.src = activity.imgURL;

        const cardTitle = document.createElement("span");
        cardTitle.className = "card-title title";
        cardTitle.innerText = activity.title;

        const cardDescription = document.createElement("p");
        cardDescription.innerText = activity.description;

        card.appendChild(cardTitle);
        card.appendChild(cardImage);
        card.appendChild(cardDescription);

        return card;
    });

    htmlActivities.map((activity) => {
        container.appendChild(activity);
    });

    container.appendChild(...htmlActivities)
};


const addActivityDOM = () => {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const imgURL = document.getElementById("imgUrl").value;

    if (!title || !description || !imgURL) {
        alert("Por favor completa los campos");
        return;
    }

    repositorio.addActivity({title,description,imgURL});

    render();
};

function addActivity(title, description, imgURL) {
    const id = Date.now();
    repository.addActivity(id, title, description, imgURL);
    displayActivities(); 
}

