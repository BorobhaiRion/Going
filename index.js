// Button click event
document.getElementById("btn").addEventListener("click", function() {
    const imageContainer = document.getElementById("imageContainer");

    // Clear any existing image
    imageContainer.innerHTML = "";

    // List of images
    const images = ["image1.png", "image2.png"]; // replace with your actual file names

    // Pick a random image
    const randomImage = images[Math.floor(Math.random() * images.length)];

    // Create img element
    const img = document.createElement("img");
    img.src = randomImage;

    // Optional: fade in animation (already in CSS)
    imageContainer.appendChild(img);
});
