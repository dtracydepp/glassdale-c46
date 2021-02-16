// creates the note form and renders to the DOM, click event for the submit button, and submit will grab values from input and build a new object to post note on API.

import { saveNote } from "./NoteDataProvider.js"
import { getCriminals, useCriminals } from "../criminals/CriminalDataProvider.js"

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")

const render = (criminalsArray) => {
    contentTarget.innerHTML = `
    <form action="">
    <fieldset>
    <label for="note-criminalId">Suspect: </label>
    <select name="note-criminalId" id="note-criminalId">
    <option value="0">Please select a criminal...</option>
    ${criminalsArray.map(criminal => {
        return `<option value="${criminal.id}">${criminal.name}</option>`
    }).join("")
        }
    </select>  
    </fieldset>  
    <fieldset>
    <label htmlFor="note-author">Author: </label>
    <input type="text" id="note-author">
    </fieldset>
    <fieldset>
    <label htmlFor="note-date">Date: </label>
    <input type="date" id="note-date">
    </fieldset>
    <fieldset>
    <label htmlFor="note-text">Note: </label>
    <input type="text" id="note-text">
    </fieldset>
    <button id="saveNote">Save Note</button>
    </form>
    `
}

export const NoteForm = () => {
    getCriminals()
        .then(() => {
            const listOfCriminals = useCriminals()
            render(listOfCriminals)
        })

}


// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {
        clickEvent.preventDefault()

        const criminalId = parseInt(document.getElementById("note-criminalId").value)
        const author = document.getElementById("note-author").value
        const date = document.getElementById("note-date").value
        const text = document.getElementById("note-text").value

        // Make a new object representation of a note; Keys match keys in notes.json, values match variables in event listener "saveNote"
        const newNote = {
            "suspect": criminalId,
            "author": author,
            "date": date,
            "text": text
        }

        // Change API state and application state
        saveNote(newNote)
    }
})

