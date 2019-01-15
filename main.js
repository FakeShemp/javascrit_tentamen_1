var body = document.querySelector("body");

var button = document.createElement("button");
button.textContent = "Login";
button.setAttribute('onclick', "buttonPress(body)")

body.appendChild(button);

function buttonPress(place) {
    var width = "300px";

    var wrapper = document.createElement("div");
    wrapper.setAttribute('id', "wrapper")
    wrapper.style.backgroundColor = "pink";
    wrapper.style.height = "200px";
    wrapper.style.width = width;
    place.appendChild(wrapper);

    var title = document.createElement("p");
    title.textContent = "Login";
    title.style.textAlign = "center";
    wrapper.appendChild(title);

    var form = document.createElement("form");
    form.setAttribute('onsubmit', "alert('Du lyckades!');return false")
    wrapper.appendChild(form);

    var input = {
        name: document.createElement("input"),
        pass: document.createElement("input"),
        submit: document.createElement("input")
    };

    input.name.setAttribute('name', "Name");
    input.name.style.width = parseInt(width, 10)
        - (parseInt(window.getComputedStyle(body, null).getPropertyValue('margin'), 10) / 2)
        + "px";
    input.name.setAttribute('type', "text");
    var labelName = document.createElement("div");
    labelName.textContent = "Name: ";

    input.pass.setAttribute('name', "Password");
    input.pass.style.width = parseInt(width, 10)
        - (parseInt(window.getComputedStyle(body, null).getPropertyValue('margin'), 10) / 2)
        + "px";
    input.pass.setAttribute('type', "password");
    var labelPass = document.createElement("div")
    labelPass.textContent = "Password: ";

    input.submit.setAttribute('type', "submit");
    input.submit.setAttribute('value', "Submit");

    form.appendChild(labelName);
    form.appendChild(input.name);
    form.appendChild(labelPass);
    form.appendChild(input.pass);
    form.appendChild(input.submit);
}