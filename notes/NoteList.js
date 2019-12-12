import { useNotes } from "./NoteDataProvider.js"
import noteComponent from "./Note.js"
const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".notesContainer")

////This is what is supposed to listen for click event and upon click and return the notes to the page
export const NoteListComponent = () => {
    eventHub.addEventListener("showNoteButtonClicked", event => {
        const allTheNotes = useNotes()
        
        render(allTheNotes)
    })

////This is the html to return the notes collection
    const render = (notesCollection) => {
        contentTarget.innerHTML = notesCollection.map(
            (individualNote) => {
                return noteComponent(individualNote)
                
           
                            
            }
            ).join("")}
        }