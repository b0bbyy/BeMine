// script.js
document.getElementById("yesButton").addEventListener("click", function() {
    document.getElementById("message").classList.remove("hidden");
    document.getElementById("message").innerText = "I love you so so so much. I hope this made you smile. I love you Andresito.";
    
    // Add image after clicking yes
    let img = document.createElement("img");
    img.src = "valentine_photo.jpg";
    img.alt = "A cute couple picture";
    img.style.width = "150px"; // Smaller size for better display
    img.style.height = "auto";
    img.style.display = "block";
    img.style.margin = "20px auto";
    document.querySelector(".container").appendChild(img);
});

document.getElementById("noButton").addEventListener("mouseover", function() {
    this.style.position = "absolute";
    this.style.left = Math.random() * window.innerWidth + "px";
    this.style.top = Math.random() * window.innerHeight + "px";
});
