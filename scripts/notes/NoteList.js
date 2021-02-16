import {getCriminals, useCriminals} from "../criminals/CriminalDataProvider.js"
import {getNotes, useNotes} from "./NoteDataProvider.js"
import {NoteHTMLConverter} from  "./Note.js"

let allNotes = []
let allCriminals = []

// Query the DOM for the element that your notes will be added to 
const contentTarget = document.querySelector(".notesContainer")
// Define ye olde Evente Hubbe
const eventHub = document.querySelector(".container")

eventHub.addEventListener("showNotesClicked", customEvent => {
    NoteList()
})

const render = () => {
    const allNotesConvertedToStrings = allNotes.map(noteObject =>{
        const relatedCriminal = allCriminals.find(criminal => criminal.id === noteObject.suspect)
      return NoteHTMLConverter(noteObject,relatedCriminal)
      

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
    .then(getCriminals)
        .then(() => {
            allNotes = useNotes()
             allCriminals = useCriminals()
            render()
        })
}


eventHub.addEventListener("noteStateChanged", event =>{
    if (contentTarget.innerHTML !== "") {
        NoteList()
    }
})

