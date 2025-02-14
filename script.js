// Funny messages for when "No" is clicked
const noResponses = [
    "You sure?", 
    "Really sure?", 
    "Think carefully...",
    "I wouldn't do that 🤨", 
    "You're making a mistake! 😱", 
    "Please reconsider... 🥺", 
    "I’m getting sad… 😢", 
    "You're breaking my heart 💔", 
    "Fine, but WHY?! 😤", 
    "Last chance... ⏳", 
    "Okay, but I’ll remember this. 👀", 
    "No more 'No' for you! 😂"
];

let noClickCount = 0; // Track how many times "No" is clicked

// Function to handle button click events
function selectOption(option) 
{
    if (option === 'yes') 
    {
        // Flash rainbow colors and then show cat-heart.gif
        flashRainbowColors(() => 
        {
            document.getElementById('question').style.display = 'none';
            displayCatHeart();
        });
    } else if (option === 'no') 
    {
        handleNoClick();
    } 
    else 
    {
        alert('Invalid option!');
    }
}

// Handle "No" button clicks with humor
function handleNoClick() {
    let noButton = document.getElementById('no-button');
    let yesButton = document.getElementById('yes-button');

    if (noClickCount < noResponses.length) 
    {
        noButton.innerText = noResponses[noClickCount]; // Change text
    } 
    else 
    {
        noButton.style.display = 'none'; // Hide the "No" button after too many clicks
        yesButton.innerText = "JUST SAY YES ALREADY! 😆";
        yesButton.style.backgroundColor = "gold";
        yesButton.style.boxShadow = "0 0 20px gold";
    }
    
    noClickCount++;

    // Increase the font size of the "Yes" button every time "No" is clicked
    let currentFontSize = parseFloat(window.getComputedStyle(yesButton).getPropertyValue('font-size'));
    let newSize = Math.min(currentFontSize * 1.5, 80); // Cap at 80px
    yesButton.style.fontSize = newSize + 'px';
}

// Function to flash rainbow colors for excitement
function flashRainbowColors(callback) 
{
    const colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    let i = 0;
    
    let interval = setInterval(() => 
    {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200);

    setTimeout(() => {
        clearInterval(interval);
        document.body.style.backgroundColor = ''; // Reset to normal
        if (callback) callback();
    }, 2000);
}

// Function to display the initial cat.gif
function displayCat() 
{
    let imageContainer = document.getElementById('image-container');
    let catImage = new Image();
    catImage.src = 'cat.gif';
    catImage.alt = 'Cat';
    catImage.onload = () => 
    {
        imageContainer.appendChild(catImage);
    };
}

// Function to display the cat-heart.gif when "Yes" is clicked
function displayCatHeart() 
{
    let imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML = ''; // Clear previous content
    
    let catHeartImage = new Image();
    catHeartImage.src = 'cat-heart.gif';
    catHeartImage.alt = 'Cat Heart';
    catHeartImage.onload = () => 
    {
        imageContainer.appendChild(catHeartImage);
        document.getElementById('options').style.display = 'none'; // Hide buttons
    };
}

// Display the initial cat image on page load
displayCat();
