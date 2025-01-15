// Story 1
document.addEventListener('DOMContentLoaded', function () {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var formatedData = 'ID: ' + data.id + '\nTitle: ' + data.title + '\nCompleted: ' + data.completed;
            document.getElementById('output').innerText = formatedData;
        })
        .catch(function (error) {
            console.error(error);
        });
});

// Story 2
fetch('https://data.wien.gv.at/daten/geo?service=WFS&request=GetFeature&version=1.1.0&typeName=ogdwien:TRAUMHOCHZEITOGD&srsName=EPSG:4326&outputFormat=json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        var formatedData = '';
        data.features.forEach(function (feature, index) {
            formatedData += 'Feature ' + (index + 1) + ':\nLocation: ' + feature.properties.LOCATION + '\n\n';
        });
        document.getElementById('output').innerText = formatedData;
    })
    .catch(function (error) {
        console.error(error);
    });

// Story 3
document.getElementById('randomButton').addEventListener('click', function () {
    fetch('https://data.wien.gv.at/daten/geo?service=WFS&request=GetFeature&version=1.1.0&typeName=ogdwien:TRAUMHOCHZEITOGD&srsName=EPSG:4326&outputFormat=json')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var locations = data.features;
            var randomLocation = locations[Math.floor(Math.random() * locations.length)];
            var props = randomLocation.properties;
            var formattedLocation = 'Location: ' + (props.LOCATION || 'Not available') +
                '\nAddress: ' + (props.ADRESSE || 'Not available') +
                '\nPhone: ' + (props.TELEFONNUMMER || 'Not available');
            document.getElementById('location').innerText = formattedLocation;
        })
        .catch(function (error) {
            console.error('Error fetching data:', error);
        });
});

// Story 4
document.getElementById('randomButton').addEventListener('click', function () {
    fetch('https://data.wien.gv.at/daten/geo?service=WFS&request=GetFeature&version=1.1.0&typeName=ogdwien:TRAUMHOCHZEITOGD&srsName=EPSG:4326&outputFormat=json')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var locations = data.features;
            var randomLocation = locations[Math.floor(Math.random() * locations.length)];
            var props = randomLocation.properties;

            document.getElementById('title').innerText = props.LOCATION || 'Location not available';
            document.getElementById('address').innerText = 'Address: ' + (props.ADRESSE || 'Not available');
            document.getElementById('phone').innerText = 'Phone: ' + (props.TELEFONNUMMER || 'Not available');
            document.getElementById('email').innerText = 'Email: ' + (props.EMAIL || 'Not available');
            document.getElementById('website').innerText = 'Website: ' + (props.WEBLINK1 || 'Not available');
        })
        .catch(function (error) {
            console.error('Error fetching data:', error);
        });
});
