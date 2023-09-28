let availableKeywords = {
    'ASPAS': 'buddy_aspas.html',
    'THE DOC': 'boost_drdisrespect.html',
    'FAKER': 'boost_faker.html',
    'NINJA': 'boost_ninja.html',
    'S1MPLE': 'boost_s1mple.html',
    'SPICYUUU': 'boost_spicy.html',
    'DEMON1': 'buddy_demon.html',
    'POKIMANE': 'buddy_pokimane.html',
    'SHROUD': 'buddy_shroud.html',
    'XQC': 'buddy_xqc.html',
    
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
        return `<li><a class="search-result-link" href="${link}">${keyword}</a></li>`;
    });

    resultsBox.innerHTML = "<ul>" + content.join("") + "</ul>";

    const aElements = resultsBox.querySelectorAll('a.search-result-link');
    aElements.forEach((a) => {
        a.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default link behavior
            window.location.href = a.getAttribute('href'); // Navigate to the link
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



