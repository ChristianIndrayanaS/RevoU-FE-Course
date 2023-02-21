const inputUser = prompt("masukann nama kamu");
user = document.getElementById("user");
user.innerHTML = inputUser;
user.style.color = "red";

function validateForm(){
    let name = document.forms["messageUs-forms"]["name"].value;
    let birth = document.forms["messageUs-forms"]["birth"].value;
    let gender = document.forms["messageUs-forms"]["gender"].value;
    let message = document.forms["messageUs-forms"]["subject"].value;
    // store data to array
    const data =[];
    data.push(name);
    data.push(birth);
    data.push(gender);
    data.push(message);
    
    // validate data
    for (let i = 0; i < data.length; i++) {
        console.log(data[i]);
        if(data[i] === ""){
            alert("Your input empty")
            return false;
        }
    }

    const dateNow = Date();
    document.getElementById("current-time").innerText = dateNow;
    document.getElementById("name-info").innerText = data[0];
    document.getElementById("birth-info").innerText = data[1];
    document.getElementById("gender-info").innerText = data[2];
    document.getElementById("message-info").innerText = data[3];

    return false;
}
