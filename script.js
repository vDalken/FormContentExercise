const loginForm = document.getElementById('loginForm');

let infoContainer = document.createElement('div');

infoContainer.style.border = "2px solid orange";
infoContainer.style.padding = "1rem";
infoContainer.style.borderStyle = "dotted";

let loginInfo;

loginForm.addEventListener("submit", (event) =>{
    event.preventDefault();

    const checkboxArray = Array.from(event.target.hobbie);

    loginInfo = {
        name: event.target.name.value,
        age: event.target.age.value,
        sex: event.target.sexo.value,
        email: event.target.email.value,
        password: event.target.password.value,
        hobbies: convertToText(checkboxArray.filter(checkBox => checkBox.hasAttribute('checked')))
    };

    infoContainer.appendChild(createElement("Name",loginInfo.name));

    infoContainer.appendChild(createElement("Age",loginInfo.age));
    infoContainer.appendChild(createElement("Sex",loginInfo.sex));
    infoContainer.appendChild(createElement("Email",loginInfo.email));
    infoContainer.appendChild(createElement("Password",loginInfo.password));
    infoContainer.appendChild(createElement("Hobbies",loginInfo.hobbies));

    loginForm.appendChild(infoContainer);
});

function createElement(infoName, info){
    let p = document.createElement('p');
    p.innerText = `${infoName}: ${info}`;
    return p;
}

function convertToText(arrayElements){
    return arrayElements.map(element => `${element.value}`);
}

