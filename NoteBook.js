let cardContainer = document.getElementById("cardContainer");

const displayNotes = () => {
  let cardContent = "";
  for (let key in localStorage) {
    if (localStorage.hasOwnProperty(key)) {
      cardContent += `<div class="col-sm-6 mb-3 mb-sm-0" id="card-box">
        <div class="card mb-4">
          <div class="card-body">
            <h5 class="card-title" id="note-title">${key}</h5>
            <p class="card-text" id="note-desc">${localStorage[key]}</p>
            <button class="btn btn-danger" onclick="deleteNote('${key}',this)">Delete</button>
          </div>
        </div>
      </div>`;
    }
  }
  cardContainer.innerHTML = cardContent;
};

let notification = document.getElementById("notification");

const addNote = async() => {
  let title = await document.getElementById("title").value;
  let note = await document.getElementById("note").value;
  if (!title || !note) {
    // Display an error message if either field is empty
    let notificationContent = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
    <strong>Error!</strong> Please fill in both Title and Note fields before saving.
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`;
    notification.innerHTML = notificationContent;
    return;
  }

  localStorage.setItem(title, note);
  document.getElementById("title").value="";
  document.getElementById("note").value="";

  let notificationContent = "";
  notificationContent += `<div class="alert alert-warning alert-dismissible fade show" role="alert">
    <strong>Success!</strong> Your note has been saved successfully to NoteBook.
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`;
  notification.innerHTML = notificationContent;
  displayNotes();

};

const deleteNote = (key, card) => {
  localStorage.removeItem(key);
  let cardElement = card.parentElement.parentElement.parentElement;
  cardElement.remove();
};
displayNotes();
