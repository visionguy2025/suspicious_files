// HTML ELEMENTS
const resultScreen = document.getElementById("screen");
const inputId = document.getElementById("new_id");
const inputName = document.getElementById("new_name");
const showAllButton = document.getElementById("show");
const sendNewButton = document.getElementById("send");

// HANDLER FUNCTIONS
async function testGetAll() {
    resultScreen.innerHTML = "";
    const data = await fetch("http://localhost:5000/user/all", {method: "GET"});
    const result = await data.json();
    result.forEach(
        object => resultScreen.innerHTML += `<div>
            id: <span style="color: #ff9900;"> ${object.id} </span>, firstname: <span style="color: #ff9900;"> ${object.firstname} </span>
        </div> <br>`
    );
};
function testSendData() {
    const newId = Number(inputId.value);
    const newName = inputName.value;
    const user = {
        id: newId,
        firstname: newName
    };
    fetch("http://localhost:5000/user/signup", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(user)
    });
    console.log("NEW DATA ADDED TO users.json");
};

// EVENTS
showAllButton.addEventListener("click", testGetAll);
sendNewButton.addEventListener("click", testSendData);
