import {deleteNote} from "./NoteDataProvider.js"

// Don't forget to pass criminalObj and use on line 10 to get name of criminal

export const NoteHTMLConverter = (noteObject,criminalObj) => {
   
    return `
        <section class="note">
            <div class="note__suspect">Suspect: ${ criminalObj.name }</div>
            <div class="note__text">Note: ${ noteObject.text }</div>
            <div class="note__author">Author: ${ noteObject.author }</div>
            <div class="note__date">Timestamp: ${ new Date(noteObject.date).toLocaleDateString('en-US')  }</div>
            <button id="deleteNote--${noteObject.id}">Delete</button>
        </section>
    `
}

const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteNote--")) {
        const [prefix, id] = clickEvent.target.id.split("--")

        /*
            Invoke the function that performs the delete operation.
        */
       deleteNote(id)
    }
})