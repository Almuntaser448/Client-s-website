window.onload = function() {
    // Dummy data for tire models
    var tireModelsData = [
        { name: "Modèle 1", description: "Description du Modèle 1" },
        { name: "Modèle 2", description: "Description du Modèle 2" },
        { name: "Modèle 3", description: "Description du Modèle 3" }
    ];

    // Function to display tire models
    function displayTireModels() {
        var tireModelsElement = document.getElementById("tireModels");
        var html = "";
        tireModelsData.forEach(function(model) {
            html += "<div><h3>" + model.name + "</h3><p>" + model.description + "</p></div>";
        });
        tireModelsElement.innerHTML = html;
    }

    displayTireModels();

    // Dummy data for testimonials
    var testimonialsData = [
        { videoUrl: "https://www.youtube.com/embed/VIDEO_ID", author: "Nom du Client" }
    ];

    // Function to display testimonials
    function displayTestimonials() {
        var testimonialsElement = document.getElementById("testimonials");
        var html = "";
        testimonialsData.forEach(function(testimonial) {
            html += "<div class='testimonial'><iframe width='560' height='315' src='" + testimonial.videoUrl + "' frameborder='0' allowfullscreen></iframe><p>- " + testimonial.author + "</p></div>";
        });
        testimonialsElement.innerHTML = html;
    }

    displayTestimonials();
};
