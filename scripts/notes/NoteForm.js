// creates the note form and renders to the DOM, click event for the submit button, and submit will grab values from input and build a new object to post note on API.

import {saveNote} from "./NoteDataProvider.js"
import {getCriminals, useCriminals} from "../criminals/CriminalDataProvider.js"

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")

const render = (criminalsArray) =>{
    contentTarget.innerHTML = `
    <select id="note-suspect" class="criminalSelect">
    <option value="0">Please select a criminal...</option>
    ${
        criminalsArray.map(criminal=> {
            return `<option value="${criminal.id}">${criminal.name}</option>`
        }).join("")
    }
    </select>    
    
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
    getCriminals() 
        .then(() => {
            const listOfCriminals = useCriminals()
            render(listOfCriminals)
        
        
    })
    
    
    
 
    
}

// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {

        const criminalId = parseInt(document.querySelector("#note-suspect").value)
        const author = document.getElementById("note-author").value
        const date = document.getElementById("note-date").value
        const text = document.getElementById("note-text").value

        // Make a new object representation of a note
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

