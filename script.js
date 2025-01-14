//story 1
document.addEventListener('DOMContentLoaded', () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => {
            document.getElementById('output').innerText = JSON.stringify(data, null, 2);
        })
        .catch(error => console.error('Error fetching data:', error));
});


//story 2
fetch('https://data.wien.gv.at/daten/geo?service=WFS&request=GetFeature&version=1.1.0&typeName=ogdwien:TRAUMHOCHZEITOGD&srsName=EPSG:4326&outputFormat=json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.getElementById('output').innerText = JSON.stringify(data, null, 2);
    })
    .catch(error => console.error('Error fetching dataset:', error));


//story 3
document.getElementById('randomButton').addEventListener('click', () => {
    fetch('https://data.wien.gv.at/daten/geo?service=WFS&request=GetFeature&version=1.1.0&typeName=ogdwien:TRAUMHOCHZEITOGD&srsName=EPSG:4326&outputFormat=json')
        .then(response => response.json())
        .then(data => {
            const locations = data.features;
            const randomLocation = locations[Math.floor(Math.random() * locations.length)];
            document.getElementById('location').innerText = JSON.stringify(randomLocation.properties, null, 2);
        })
        .catch(error => console.error('Error fetching data:', error));
});


//story 4
document.getElementById('randomButton').addEventListener('click', () => {
    fetch('https://data.wien.gv.at/daten/geo?service=WFS&request=GetFeature&version=1.1.0&typeName=ogdwien:TRAUMHOCHZEITOGD&srsName=EPSG:4326&outputFormat=json')
        .then(response => response.json())
        .then(data => {
            const locations = data.features;

            // Wähle einen zufälligen Ort aus
            const randomLocation = locations[Math.floor(Math.random() * locations.length)];
            const props = randomLocation.properties;

            // Setze die Werte in den HTML-Elementen
            document.getElementById('title').innerText = props.LOCATION || 'Location not available';
            document.getElementById('address').innerText = `Address: ${props.ADRESSE || 'Not available'}`;
            document.getElementById('phone').innerText = `Phone: ${props.TELEFONNUMMER || 'Not available'}`;
            document.getElementById('email').innerText = `Email: ${props.EMAIL || 'Not available'}`;
            document.getElementById('website').innerText = `Website: ${props.WEBLINK1 || 'Not available'}`;
        })
        .catch(error => console.error('Error fetching data:', error));
});