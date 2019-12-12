import { saveNote } from "./NoteDataProvider.js"





const contentTarget = document.querySelector(".notesContainer")
const eventHub = document.querySelector(".container")

const NoteFormComponent = () => {
   //If the saveNote button is clicked, then save the values of the boxes
    eventHub.addEventListener("click", clickEvent => {
        if(clickEvent.target.id === "saveNote") {
         
        const noteDate = document.querySelector("#note__datestamp").value
        const suspect = document.querySelector("#note__suspect").value
        const noteText = document.querySelector("#note__text").value
        const noteToSendToDatabase = {
              "noteDate": noteDate,
              "suspect": suspect,
              "noteText": noteText
            }
            saveNote(noteToSendToDatabase)
          }
        
        })
    //If the show Notes button is clicked, this is listening for that cusotmn event
    eventHub.addEventListener("click", clickEvent  => {
        if(clickEvent.target.id === "showNotes") {
        const message = new CustomEvent("showNoteButtonClicked")
        eventHub.dispatchEvent(message)
        console.log("show notes was clicked")
    }

                           
        })
    
  ////This is what is showing the note input fields
        const render = () => {
            contentTarget.innerHTML = `
                <div>
                    <br><input type="text" id="note__text">What is your note?</br>
                    <br><input type="text" id="note__suspect">Which suspect is this about?</br>
                    <br><input type="date" id="note__datestamp"></br>
                    <button id="saveNote">Save Note</button>
                    <button id="showNotes">Show Notes</button>
                </div>
        `
    }

    render()
}



export default NoteFormComponent