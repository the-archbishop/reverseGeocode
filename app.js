// VARIABLES
var latitude;
var longitude;
var cageDataAPIkey = '615d759215544dda9fb8fe2ed1fe1fff'

// HTML 5 GeoLocation API
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
        // Get latitude and longitude from browser
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
        $('#lat').text(latitude);
        $('#long').text(longitude);

        // Define GeoNames query URL to reverse geocode 
        var geoNamesURL = 'https://api.geonames.org/findNearbyPostalCodesJSON?lat=' + latitude + '&lng=' + longitude + '&username=bflatbader&maxRows=1'

        // AJAX request
        $.ajax({
            url: geoNamesURL,
            method: "GET"
        })
        // After data comes back from the request
        .then(function(gnResults) {
            console.log(gnResults);
            var zip = gnResults.postalCodes[0].postalCode;
            $('#zip').text(zip);
        });
    });
}
