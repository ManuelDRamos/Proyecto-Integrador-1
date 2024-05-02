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
    }

    getAllActivities = () => this.activities;

    
    
    createActivity = (id, title, description, imgURL) => {
        const newActivity = new Activity(id, title, description, imgURL);
        this.activities.push(newActivity);
        return newActivity;
    };
}



const repository = new Repository();

function addActivity(title, description, imgURL) {
    const id = Date.now(); // Generar un ID único
    repository.createActivity(id, title, description, imgURL);
    displayActivities(); // Actualizar la visualización de las actividades
}
