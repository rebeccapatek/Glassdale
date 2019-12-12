// This is a component to dispay the noteComponent on the screen once it says show notes.  Right now it is not working.
const noteComponent = (note) => {
    return `
    <div class="note">
    <div>Date: ${note.noteDate}</div>
    <div>Suspect: ${note.suspect}</div>
    <div>Note: ${note.noteText}</div>
    </div>
    `
  }
  
  export default noteComponent