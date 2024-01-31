const loginForm = document.getElementById("loginForm");

let infoContainer = document.createElement("div");

infoContainer.style.border = "2px solid orange";
infoContainer.style.padding = "1rem";
infoContainer.style.borderStyle = "dotted";

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const checkboxArray = Array.from(
        event.target.querySelectorAll('input[type="checkbox"]:checked')
    );

    infoContainer.appendChild(createElement("Name", event.target.name.value));
    infoContainer.appendChild(createElement("Age", event.target.age.value));
    infoContainer.appendChild(createElement("Sex", event.target.sexo.value));
    infoContainer.appendChild(createElement("Email", event.target.email.value));
    infoContainer.appendChild(
        createElement("Password", event.target.password.value)
    );
    infoContainer.appendChild(
        createElement("Hobbies", convertToText(checkboxArray))
    );

    loginForm.appendChild(infoContainer);
});

function createElement(infoName, info) {
    let p = document.createElement("p");
    p.innerText = `${infoName}: ${info}`;
    return p;
}

function convertToText(arrayElements) {
    return arrayElements.map((element) => `${element.value}`);
}
