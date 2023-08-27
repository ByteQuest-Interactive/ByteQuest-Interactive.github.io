document.addEventListener("DOMContentLoaded", function () {
    const matrixContainer = document.querySelector(".matrix-bg");

    const characters = "01"; // Characters to fall
    const characterCount = 100; // Number of characters

    for (let i = 0; i < characterCount; i++) {
        const character = document.createElement("span");
        character.textContent = characters.charAt(Math.floor(Math.random() * characters.length));
        character.style.left = `${Math.random() * 100}%`;
        character.style.animationDuration = `${Math.random() * 5 + 2}s`;
        character.style.animationDelay = `${Math.random() * 2}s`;
        matrixContainer.appendChild(character);
    }
});
