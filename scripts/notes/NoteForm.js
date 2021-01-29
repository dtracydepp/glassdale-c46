import {saveNote} from "./NoteDataProvider.js"

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")

const render = () =>{
    contentTarget.innerHTML = `
    <label htmlFor="note-suspect">Suspect: </label>
    <input type="text" id="note-suspect">
    <label htmlFor="note-author">Author: </label>
    <input type="text" id="note-author">
    <label htmlFor="note-date">Date: </label>
    <input type="date" id="note-date">
    <label htmlFor="note-text">Note: </label>
    <input type="text" id="note-text">
    <button id="saveNote">Save Note</button>
    `

}

export const NoteForm = () => {
    render()
}

// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {

        const suspect = document.getElementById("note-suspect").value
        const author = document.getElementById("note-author").value
        const date = document.getElementById("note-date").value
        const text = document.getElementById("note-text").value

        // Make a new object representation of a note
        const newNote = {
         "suspect": suspect,
         "author": author,
         "date": date,
         "text": text
        }

        // Change API state and application state
        saveNote(newNote)
    }
})

