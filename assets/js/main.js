
let nameIn = document.getElementById('name');
let lastName = document.getElementById('lastName')
let email = document.getElementById('email');
let toggleContainer = document.getElementById('toggleContainer');

function subscribed() {
    console.log(' function subscribed');
    let nameLog = nameIn.value;
    console.log(nameLog);
    let lastNameLog = lastName.value;
    console.log(lastNameLog);
    let emailLog = email.value
    console.log(emailLog);
    toggleContainer.style.top = "0";
}

function closeContainer() {
    console.log(' function closeContainer');
    toggleContainer.style.top = "-105vh";
}