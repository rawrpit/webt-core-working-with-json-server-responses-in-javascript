# WEBT | CORE | Working with JSON Server Responses in JavaScript

## Overview
The wedding company "Lords of the Rings" would like to make it easier for customers planning a wedding to choose a registry office. Under the motto "Happy choice", it should be possible for customers to be suggested a random registry office in Vienna.

## User Story 1
*As a Developer I want to create a proof of concept for an Asynchronous JavaScript (AJAX) request, so that I can continue development based on the prototype.*

### Acceptance Criteria
- An index.html file exists
- The JavaScript “fetch” function is used to fetch dummy data from https://jsonplaceholder.typicode.com/todos/1
- The dummy data fetched is displayed on the page!

## User Story 2
*As a Developer I want to fetch all data from the client's service and display it on the page or console, so that I can later choose random data from the available information.*

### Acceptance Criteria
- The JavaScript “fetch” function is used to fetch the client's data from http://opendata.wifi.at/OpenJsonData.json
- The full dataset is displayed on the page or console to ensure integrity

## User Story 3
*As a Customer I want to push a “Get random wedding location” button and receive a suggestion for my wedding location based on the luck of the draw.*

### Acceptance Criteria
- A random entry is picked from an existing array/list of wedding locations
- The wedding location is displayed on the page
- The page uses a responsive framework

## User Story 4
*As a Customer I want to have a single wedding location displayed on the screen prominently, featuring title, place of work and description, so that I can identify the relevant information quickly.*

### Acceptance Criteria
- A single wedding location entry is displayed on the page
- The page is responsive
- The page follows the heuristics for user interface design of Jakob Nielsen

## User Story 5 (optional)
*As a customer of "Happy choice", I would like a street map (e.g. Google or Open Street Map) to be output with the result so that my relatives and friends can plan their journey.

### Acceptance Criteria
- An external service for displaying a street map is integrated
- The displayed street map has a marker that shows the position of the respective registry office

#### Links
https://my.skilldisplay.eu/en/skillset/83

https://data.wien.gv.at/daten/geo?service=WFS&request=GetFeature&version=1.1.0&typeName=ogdwien:TRAUMHOCHZEITOGD&srsName=EPSG:4326&outputFormat=json

