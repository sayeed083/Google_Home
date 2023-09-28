function searchGoogle() {
    const searchTerm = document.getElementById('searchInput').value;
    if (searchTerm.trim() !== '') {
        const url = `https://www.google.com/search?q=${encodeURIComponent(searchTerm)}`;
        window.location.href = url;
    }
}

function handleKeyDown(event) {
    if (event.key === 'Enter') {
        searchGoogle();
    }
}



document.getElementById('openFileButton').addEventListener('click', function () {
    document.getElementById('fileInput').click();
});

document.getElementById('fileInput').addEventListener('change', function (event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
        const imageContainer = document.getElementById('imageContainer2');
        imageContainer.innerHTML = `<img src="${e.target.result}" alt="Selected Icon">`;

        localStorage.setItem('savedImage', e.target.result);
    };

    reader.readAsDataURL(file);
});

function displaySavedImage() {
    const savedImage = localStorage.getItem('savedImage');
    const imageContainer = document.getElementById('imageContainer2');

    if (savedImage) {
        imageContainer.innerHTML = `<img src="${savedImage}" alt="Selected Icon">`;
    }
}

displaySavedImage();




const textContainer = document.getElementById('textContainer');
const textInputContainer = document.getElementById('textInputContainer');

document.getElementById('changeTextButton').addEventListener('click', function () {
    textContainer.style.display = 'none';
    textInputContainer.style.display = 'block';
});

document.getElementById('updateTextButton').addEventListener('click', function () {
    const userInput = document.getElementById('textInput').value;
    const textElement = document.querySelector('#textContainer h2');

    if (userInput) {
        textElement.innerText = userInput;
        localStorage.setItem('userText', userInput);
    }

    textContainer.style.display = 'block';
    textInputContainer.style.display = 'none';
});

function displaySavedText() {
    const savedText = localStorage.getItem('userText');
    const textElement = document.querySelector('#textContainer h2');

    if (savedText) {
        textElement.innerText = savedText;
        document.getElementById('textInput').value = savedText;
    }
}

displaySavedText();
