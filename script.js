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

    function displayGoogleMapsReviews() {
        // Replace 'YOUR_PLACE_ID' with your actual place ID
        const placeId = 'YOUR_PLACE_ID';
        const apiKey = 'YOUR_API_KEY'; // Add your Google API key here

        // Construct the URL for the Google Places API
        const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,reviews&key=${apiKey}`;

        // Fetch place details including reviews
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const reviews = data.result.reviews;

                // Get the element where reviews will be displayed
                const reviewsElement = document.getElementById("google-reviews");

                // Clear existing content
                reviewsElement.innerHTML = '';

                // Loop through reviews and create HTML elements
                reviews.forEach(review => {
                    const reviewElement = document.createElement('div');
                    reviewElement.classList.add('review');
                    reviewElement.innerHTML = `
                        <p><strong>${review.author_name}</strong>: ${review.text}</p>
                    `;
                    reviewsElement.appendChild(reviewElement);
                });
            })
            .catch(error => console.error('Error fetching reviews:', error));
    }
    var openingHours = {
        "lundi": "9:00 - 19:00",
        "mardi": "9:00 - 19:00",
        "mercredi": "9:00 - 19:00",
        "jeudi": "9:00 - 19:00",
        "vendredi": "9:00 - 19:00",
        "samedi":  "9:00 - 19:00",
        "dimanche":  "Fermé"
    };
    
    // Get today's opening hours
    var today = new Date().toLocaleString('fr-FR', { weekday: 'long' }).toLowerCase();
    
    // Display today's opening hours
    var currentDayOpeningHours = document.getElementById("currentDayOpeningHours");
    currentDayOpeningHours.innerHTML = "<h2>Heures d'ouverture d'aujourd'hui :</h2><p>" + (openingHours[today] || "Fermé") + "</p>";
    
// Display the full timetable
var fullTimetable = document.getElementById("fullTimetable");
var tableHtml = "<h2>Tableau complet des horaires :</h2><table><tr><th>Jour</th><th>Heures d'ouverture</th></tr>";
for (var day in openingHours) {
    // Capitalize the first letter of the day
    var capitalizedDay = day.charAt(0).toUpperCase() + day.slice(1);
    tableHtml += "<tr><td>&nbsp;&nbsp;" + capitalizedDay + "</td><td>" + openingHours[day] + "</td></tr>";
}
tableHtml += "</table>";
fullTimetable.innerHTML = tableHtml;

    
    

};
