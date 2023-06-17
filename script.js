let addButton = document.getElementById("add-user-btn");

const users = [];
const userContainer = document.getElementById("usercontainer");

function addUser() {
  let name = document.getElementById("name-input").value;
  let profession = document.getElementById("profession-input").value;
  let age = document.getElementById("age-input").value;

  console.log(name, profession, age);

  let displayMessage = document.querySelector(".display-msg");
  displayMessage.innerHTML = "";
  if (name === "" || profession === "" || age === "") {
    let displayError = document.createElement("p");

    displayError.innerText =
      "Please Make sure All the fields are filled before adding in an employee !";
    displayError.style.color = "red";
    displayMessage.appendChild(displayError);
  } else {
    let displaySucces = document.createElement("p");
    displaySucces.innerText = "Success : Employee Added!";
    displaySucces.style.color = "green";
    displayMessage.appendChild(displaySucces);
    let user = {};
    console.log(users);

    user.name = document.getElementById("name-input").value;
    user.profession = document.getElementById("profession-input").value;
    user.age = document.getElementById("age-input").value;

    users.push(user);
    console.log(users);

    showUser(users);

    document.getElementById("name-input").value = "";
    document.getElementById("profession-input").value = "";
    document.getElementById("age-input").value = "";
  }
}

function showUser(list) {
  userContainer.innerHTML = "";
  for (let i = 0; i < list.length; i++) {
    console.log("inside show user");
    let userInfo = document.createElement("div");
    userInfo.className = "user-info";
    userInfo.innerHTML = `
        <div id="user1" class="User">
            <div>${i + 1 + " ."}</div>
            <div>Name: ${list[i].name}</div>
            <div>Profession: ${list[i].profession}</div>
            <div>Age:${list[i].age}</div>
        </div>
        <div>
            <button class="delete-btn" onclick="deleteUser(${i})">Delete User</button>
        </div>
    `;
    userContainer.appendChild(userInfo);
  }
  let empCount = document.getElementById("epmloyee-count");
  empCount.innerText = `You have ${users.length} Employees.`;
}

function deleteUser(index) {
  users.splice(index, 1);
  showUser(users);
}
