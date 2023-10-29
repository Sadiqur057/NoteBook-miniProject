
const addNote= () => {
    let title = document.getElementById("title").value;
    let note = document.getElementById("note").value;
    localStorage.setItem(title, note);
  
    let notificationContent = ""
    notificationContent+= `<div class="alert alert-warning alert-dismissible fade show" role="alert">
    <strong>Success!</strong> Your note has been saved successfully to NoteBook.
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
  `;
    notification.innerHTML=notificationContent;
    displayCards();
  };