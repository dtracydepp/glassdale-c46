export const NoteHTMLConverter = (noteObject) => {
    return `
        <section class="note">
            <div class="note__text">Note: ${ noteObject.text }</div>
            <div class="note__suspect">Suspect: ${ noteObject.suspect }</div>
            <div class="note__author">Author: ${ noteObject.author }</div>
            <div class="note__date">Timestamp: ${ new Date(noteObject.date).toLocaleDateString('en-US')  }</div>
        </section>
    `
}