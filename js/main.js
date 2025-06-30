// Greetings function
document.addEventListener("DOMContentLoaded", () => {
    console.log("Script loaded");

    const time = new Date().getHours();
    let greeting = "Hello!";

    console.log(time);

    if (time < 12) greeting = "Good morning!";
    else if (time < 19) greeting = "Good afternoon!";
    else greeting = "Good evening!";

    document.getElementById("greetings").textContent = greeting;
});

// Language function
function setLanguage(lang) {
  fetch(`lang/${lang}.json`)
    .then(response => response.json())
    .then(texts => {
      document.getElementById("main-title").textContent = texts.title;
    })
    .catch(err => console.error("Error loading language:", err));
}

// Default language
document.addEventListener("DOMContentLoaded", () => {
  setLanguage("en");
});
