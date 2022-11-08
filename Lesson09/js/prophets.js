/////////////////////////////////////////////////////////w09//////////////////////////////////////////////
const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

document.addEventListener("DOMContentLoaded", () => {

    fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);  // temporary checking for valid response and data parsing
        const prophets = jsonObject['prophets'];
        prophets.forEach(displayProphets);
    });
});

function displayProphets(prophet) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
  
    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = `${prophet.name} ${prophet.lastname}`;
  
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    let order = [
        "1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th",
        "10th", "11th", "12th", "13th", "14th", "15th", "16th", "17th"
    ]

    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname} - ${order[prophet.order]} Latter-Day President`);
    portrait.setAttribute('loading', 'lazy');
  
    /* Append paragraphs */
    p1.innerText = `Date of birth: ${prophet.birthdate}`;
    p2.innerText = `Place of birth: ${prophet.birthplace}`;

    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(portrait);
  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
  }

/////////////////////////////////////////////////////////w09////////////////////////////////////////////*/

/*///////////////////////////////////////////////////////////////////////////////////////////////////////
const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

async function getData(requestURL) {
    const response = await fetch(requestURL);
    if (response.ok) {
        const data = await response.json();
        // console.log(data);
        const prophets = data['prophets'];
        prophets.forEach(prophet => {
            displayCards(prophet);
            // displayTable(prophet);
        });
    }
}

getData(requestURL);

function displayCards(prophet) {
    let card = document.createElement('section');
    
    // Prophet Name
    let h2 = document.createElement('h2');
    h2.textContent = prophet.name + ' ' + prophet.lastname;
    card.appendChild(h2);

    // Prophet Birthdate
    let birthdate = document.createElement('p');
    birthdate.textContent = 'Date of Birth: ' + prophet.birthdate;
    card.appendChild(birthdate);

    // Prophet Birthplace
    let birthplace = document.createElement('p');
    birthplace.textContent = 'Place of Birth: ' + prophet.birthplace;
    card.appendChild(birthplace);

    // Prophet Image
    let image = document.createElement('img');
    image.setAttribute('src', prophet.imageurl);
    image.setAttribute('alt', `${prophet.name} ${prophet.lastname} ${prophet.order}`);
    card.appendChild(image);

    // Append card to the DOM (the prophet list).
    document.querySelector('div.cards').appendChild(card);
}

function displayTable(prophet) {
    let tableRow = document.createElement('tr');

    // Prophet Name
    let tableName = document.createElement('td');
    tableName.textContent = prophet.name + ' ' + prophet.lastname;
    tableRow.appendChild(tableName);

    // Prophet Birthdate
    let tableBirthdate = document.createElement('td');
    tableBirthdate.textContent = prophet.birthdate;
    tableRow.appendChild(tableBirthdate);

    // Prophet Birthplace
    let tableBirthplace = document.createElement('td');
    tableBirthplace.textContent = prophet.birthplace;
    tableRow.appendChild(tableBirthplace);

    document.querySelector('table').appendChild(tableRow);
}
/////////////////////////////////////////////////////////////////////////////////////////////////////*/
