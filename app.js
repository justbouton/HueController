var buttonMode = document.querySelectorAll(".button")

// add event listener to each button
for (var i = 0; i < buttonMode.length; i++) {
    buttonMode[i].addEventListener("click", function () {
        alert("clicked")
    });
};