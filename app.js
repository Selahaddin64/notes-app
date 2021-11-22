let buttonDOM = document.querySelector(".notes-add");
let titleDOM = document.querySelector(".notes-title");
let contentDOM = document.querySelector(".notes-body");
let notesSidebarDom = document.querySelector(".notes-list");
let deleteDOM = document.querySelector(".fa-trash");

buttonDOM.addEventListener("click", addNote);
deleteDOM.addEventListener("click", deleteNote);

let noteID = 0;


function addNote() {
  if (titleDOM.value == "" || contentDOM.value == "") {
    alert("You did not enter the title or content of the note");
  }

  else {


    // Adding Note Title
    let addTitleDiv = document.createElement('div');
    addTitleDiv.innerHTML = titleDOM.value;
    notesSidebarDom.append(addTitleDiv);
    addTitleDiv.classList.add("notes-small-title");

    // Adding Note Content
    let addContentDiv = document.createElement('div');
    addContentDiv.innerHTML = contentDOM.value;
    notesSidebarDom.append(addContentDiv);
    addContentDiv.classList.add("notes-small-body");

    // Getting Current Date
    let dt = new Date();
    let currentTime = `${(dt.getMonth() + 1).toString().padStart(2, '0')}/${dt.getDate().toString().padStart(2, '0')}/${dt.getFullYear().toString().padStart(4, '0')} ${dt.getHours().toString().padStart(2, '0')}:${dt.getMinutes().toString().padStart(2, '0')}:${dt.getSeconds().toString().padStart(2, '0')}`;

    // Adding Current Date
    let addTimeDiv = document.createElement('div');
    addTimeDiv.innerHTML = currentTime;
    notesSidebarDom.append(addTimeDiv);
    addTimeDiv.classList.add("notes-small-updated");

    // Adding Delete Div
    let addDeleteDiv = document.createElement('div');
    notesSidebarDom.append(addDeleteDiv);
    addDeleteDiv.classList.add("flex-delete-icon");

    // Adding Delete Icon (Child of Delete Div)
    let addDeleteIcon = document.createElement('i');
    addDeleteDiv.appendChild(addDeleteIcon);
    addDeleteIcon.classList.add("fas", "fa-trash");
    addDeleteIcon.setAttribute("id", noteID);


    document.getElementById(`${noteID}`).addEventListener("click", function () {
      this.parentElement.parentElement.remove();
    });

    noteID++;

    // ID Ekleyerek Silmeye Çalışma Kısmında Kalındı


  }

}

function deleteNote() {
  this.parentElement.parentElement.remove();
}



