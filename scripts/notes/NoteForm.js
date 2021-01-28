const contentTarget = document.querySelector(".noteFormContainer")

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