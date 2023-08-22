// const deleteBtn = document.querySelector('.deleteBtn')
const inputContainer = document.querySelector('.input-container');
titleTag = document.querySelector('input');
descTag = document.querySelector('textarea');
const addBtn = document.querySelector('.addBtn');

const notes = JSON.parse(localStorage.getItem('notes') || '[]');

function showNotes() {
    document.querySelectorAll('.note').forEach(note => note.remove()); //help remove note in application
    notes.forEach((note, index) => {
        let liTag = ` <li class="note"> 

        <div class="details">
           <h3>${note.title}</h3>
           <p>${note.description}</p>
              
           </div>
              
           <div class="button">
               <button class="editBtn" onclick="updateNote(${index}, '${note.title}', ${note.description})">
                  Edit
               </button>

               <button class="deleteBtn" onclick='deleteNote(${index})'>
                   delete
               </button>
           </div>

   </li> `;
inputContainer.insertAdjacentHTML('afterend', liTag);


    });
}
showNotes();


function deleteNote(noteId){
    notes.splice(noteId, 2); // removing from selected note from array/task
    //saving updates to localstorage
    localStorage.setItem('notes', JSON.stringify(notes));
    showNotes();
}

// function updateNote(noteId, title, desc){
//     console.log(noteId, title, desc);
// }


addBtn.addEventListener('click', e => {
    let noteTitle = titleTag.value,
    noteDesc = descTag.value;

    if(noteTitle ||  noteDesc) {
        let noteInfo = {
            title: noteTitle,
            description: noteDesc
        }

        notes.push(noteInfo); //adding note to the notes
        // saving notes to localstorage
        localStorage.setItem('notes', JSON.stringify(notes));
        showNotes();
    }

});
