let availableKeywords = {
    'CS:GO': 'https://www.counter-strike.net/',
    'Apex Legends': 'https://www.ea.com/games/apex-legends',
    'Assistant': 'https://assistant.google.com/',
    'Youtube': 'https://www.youtube.com/',
    'Discord': 'https://discord.com/',
    'Github': 'https://github.com/',
    'S1mple': 'https://www.youtube.com/watch?v=1RgQnprSCzI',
    'Kennys': 'https://youtu.be/eoAEja_L2YY',
    
};

const resultsBox = document.querySelector(".search-result");
const inputBox = document.getElementById("search-bar");
const searchButton = document.querySelector(".search-icon");

inputBox.addEventListener('input', function() {
    let input = inputBox.value;
    let result = [];

    if (input.length) {
        result = Object.keys(availableKeywords).filter((keyword) => {
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
    }

    display(result);
});

inputBox.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        Search();
    }
});

searchButton.addEventListener('click', function() {
    Search();
});

function display(result) {
    const content = result.map((keyword) => {
        const link = availableKeywords[keyword];
        return `<li><a class="search-result-link" href="${link}" target="_blank">${keyword}</a></li>`;
    });

    resultsBox.innerHTML = "<ul>" + content.join("") + "</ul>";

    const liElements = resultsBox.querySelectorAll('li');
    liElements.forEach((li) => {
        li.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default link behavior
            window.open(li.querySelector('a').getAttribute('href'), '_blank');
        });
    });
}

function clearResults() {
    resultsBox.innerHTML = ""; // Clear the resultsBox content
}

function selectInput(list) {
    inputBox.value = list.textContent;
    clearResults();
}

document.addEventListener('click', function(event) {
    // Check if the clicked element is not the inputBox or resultsBox
    if (event.target !== inputBox && event.target !== searchButton) {
        clearResults();
    }
    
});

function Search() {
    let input = inputBox.value;
    let result = [];

    if (input.length){
        result = Object.keys(availableKeywords).filter((keyword)=> {
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
    }
    display(result);
}



