const userList = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  const professionFilter = document.getElementById("profession");
  const filterBtn = document.getElementById("filter-btn");
  const nameInput = document.getElementById("name");
  const ageInput = document.getElementById("age");
  const professionAddInput = document.getElementById("profession-add");
  const addBtn = document.getElementById("add-btn");
  const userListContainer = document.getElementById("user-list");
  
  function renderUserList() {
    let html = "";
    userList.forEach((user) => {
      html += `
            <div class="user-card">
                <h3>ID: ${user.id}</h3>
                <p>Name: ${user.name}</p>
                <p>Age: ${user.age}</p>
                <p>Profession: ${user.profession}</p>
              </div> `;
    });
    userListContainer.innerHTML = html;
  }
  
  function filterByProfession() {
    const selectedProfession = professionFilter.value;
    if (selectedProfession === "") {
      alert("Please select the valid profession to filter.");
      return;
    }
    const filteredList = userList.filter(
      (user) => user.profession === selectedProfession
    );
    let html = "";
    filteredList.forEach((user) => {
      html += `<div class="user-card">
                <h3>ID: ${user.id}</h3>
                <p>Name: ${user.name}</p>
                <p>Age: ${user.age}</p>
                <p>Profession: ${user.profession}</p>
              </div>`;
    });
    userListContainer.innerHTML = html;
  }
  
  function addUserToList() {
    const name = nameInput.value;
    const age = ageInput.value;
    const profession = professionAddInput.value;
    const newUser = {
      id: userList.length + 1,
      name,
      age,
      profession,
    };
    userList.push(newUser);
    renderUserList();
  }
  
  filterBtn.addEventListener("click", filterByProfession);
  addBtn.addEventListener("click", addUserToList);
  
  renderUserList();
  