import {ShowAssociatesButton} from "../associates/ShowAssociatesButton.js"

export const Criminal = (criminalObj) => {
    return `
    <article class="criminals">
    <h4>${criminalObj.name}</h4>
    <p>Age: ${criminalObj.age}<p>
    <p>Conviction: ${criminalObj.conviction}<p>
    <p>Term start: ${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}</p>
    <p>Term end: ${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</p>
    <p>${ShowAssociatesButton(criminalObj)}</p>
    </article>
    `
}