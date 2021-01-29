import {getNotes, useNotes} from "./NoteDataProvider.js"
import {NoteHTMLConverter} from  "./Note.js"

// Query the DOM for the element that your notes will be added to 
const contentTarget = document.querySelector(".noteList")
// Define ye olde Evente Hubbe
const eventHub = document.querySelector(".container")

eventHub.addEventListener("showNotesClicked", customEvent => {
    NoteList()
})

const render = (noteArray) => {
    const allNotesConvertedToStrings = noteArray.map(noteObject =>{
      return NoteHTMLConverter(noteObject)
      

        // convert the notes objects to HTML with NoteHTMLConverter

    }).join("")

    contentTarget.innerHTML = `
     <h3>Case Notes</h3>
     <section class="notesList">
     ${allNotesConvertedToStrings}
     </section>
    `
}

export const NoteList = () => {
    getNotes()
        .then(() => {
            const allNotes = useNotes()
            render(allNotes)
        })
}

