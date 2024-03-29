window.onload = function() {
    const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  })



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
    tableHtml += "<tr><td>&nbsp;&nbsp;" + capitalizedDay + "</td><td>&nbsp;&nbsp" + openingHours[day] + "</td></tr>";
}
tableHtml += "</table>";
fullTimetable.innerHTML = tableHtml;

    



};

    function openTelephone() {
        window.open('tel:+33634292471', '_blank');
    }


function openGeo() {
    window.open('https://www.google.com/maps/dir//L\'usine+du+Pneu+19+Rte+de+Calais+95360+Montmagny/@48.9736701,2.3653314,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x47e669719ca5e6a5:0x51ebc26b4af304b8!2m2!1d2.3653314!2d48.9736701?entry=ttu', '_blank');
}


    function openMailTo() {
        window.open('mailto:contact@usinedupneu-montmagny.fr', '_blank');
    }

