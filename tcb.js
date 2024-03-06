//EventListener for the buttons//
document.getElementById("refresh").addEventListener('click', fetchContacts);
document.getElementById("addContact").addEventListener('click', addContact);

//CREATING A FUNCTION TO RETRIEVE THE CONTACTS FROM THE DATABASE//
function fetchContacts() {
    fetch(rootPath + "controller/get-contacts/")
        //The 1st then has an annoymys callback function
        .then(function (response) {
            //which is then converted into a JSON array//
            return response.json();
            //The 2nd then recieves the JSON array and does something with it//
        }).then(function (data) {
            displayOutput(data);
        })
}

function displayOutput(data) {
    output = "<table>"
    //itterating through the array with a for loop//
    for (a in data) {
        output += `
            <tr onclick="editContact(${data[a].id})">
                <td><img src="${rootPath}controller/uploads/${data[a].avatar}" width="200"/></td>
                <td><h3>${data[a].firstname}</h3></td>
                <td><h3>${data[a].lastname}</h3></td>
            </tr>
        `
    }
    output += "</table>";
    document.getElementById("table").innerHTML = output;
}
//CREATING A FUNCTION FOR ADDING A NEW CONTACT//
function addContact() {
    window.open("add-contact.html", "_self");
}
//CREATING AN EDIT CONTACT FUNCTION//
function editContact(id) {
    window.open("edit-contact.html?id=" + id, "_self");
}
