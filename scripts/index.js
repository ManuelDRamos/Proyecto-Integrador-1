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

document.addEventListener("DOMContentLoaded", function() {
    const activitiesDisplay = document.getElementById("activitiesDisplay");

    function addActivity(title, description, imgUrl) {
        const newActivity = document.createElement("div");
        newActivity.classList.add("activity-details");
        newActivity.innerHTML = `<img src="${imgUrl}" alt="${title}" style="width: 100px;">
        <p><strong>${title}</strong>: ${description}</p>
        <button class="delete-activity">Eliminar</button>`;

        newActivity.querySelector(".delete-activity").addEventListener("click", function() {
            newActivity.remove();
            if (activitiesDisplay.children.length === 0) {
                activitiesDisplay.style.display = "none";
            }
        });


        activitiesDisplay.appendChild(newActivity);

        
        if (activitiesDisplay.children.length === 0) {
            activitiesDisplay.style.display = "none"; 
        } else {
            activitiesDisplay.style.display = "flex";
        }
    }

    function guardarActividad() {
        const title = document.getElementById("title").value;
        const description = document.getElementById("description").value;
        const imgURL = document.getElementById("imgURL").value;

        if (!title || !description || !imgURL) {
        alert("Por favor completa los campos");
        return;
        }

        addActivity(title, description, imgURL);
    }

    document.getElementById("guardarActividad").addEventListener("click", guardarActividad);
});


const repository = new Repository();


repository.getActivities();

const button = document.getElementById("addActivity");

const render = () => {
    const container = document.getElementById("activities-container");
    container.innerHTML = "";

    const activities = repository.getActivities();

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
};

