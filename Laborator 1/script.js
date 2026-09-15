let messageButton = document.getElementById("messageButton");
let message = document.getElementById("message");

messageButton.addEventListener("click", function() {
    message.innerHTML = "Salut, Alan! JavaScript funcționează!";
});

function showTime() {
    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    document.getElementById("clock").innerHTML =
        "Ora curentă: " + hours + ":" + minutes + ":" + seconds;
}

setInterval(showTime, 1000);

showTime();


let themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", function() {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeButton.innerHTML = "Light Mode";
    } else {
        themeButton.innerHTML = "Dark Mode";
    }

});