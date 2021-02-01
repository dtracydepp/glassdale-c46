// OfficerSelect comp. that renders a select HTML element (drop-down) 
// which lists all officers in the GlassDale PD API.

import {useOfficers, getOfficers} from "./OfficerProvider.js"

// Get a reference to the DOM element where the <select> will be rendered
const contentTarget = document.querySelector(".filters__officer")
// Get a reference to the DOM element that contains ALL components.
const eventHub = document.querySelector(".container")



export const OfficerSelect = () => {
    // Trigger fetching the API data and loading it into application state
    // console.log("OfficerSelect-get data from DOM")

    getOfficers()
    .then( () => {
      // Get all officers from application state
      const officersArray = useOfficers()

    //   console.log("officersArray", officersArray)
      render(officersArray)
    })
}

const render = (officers) => {
    /*
        Use interpolation here to invoke the map() method on --line 38-39
        the officers to generate the option elements.
       
    */


    contentTarget.innerHTML = `
        <select class="dropdown" id="officerSelect">
            <option value="0">Please select an officer...</option>
            ${officers.map(
                officerObj => {
                    // console.log(officerObj)
                return `<option value="${officerObj.id}">${officerObj.name}</option>`
                }
            ) .join("")
        }
            }
        </select>
    `
}

eventHub.addEventListener("change", changeEvent => {
    // console.log(changeEvent, "officerselect: officer drop down")
    if (changeEvent.target.id === "officerSelect") {
        // Get the name of the selected officer
        const selectedOfficer = changeEvent.target.value

        // Define a custom event
        const customEvent = new CustomEvent("officerSelected", {
            detail: {
                officer: selectedOfficer
            }
        })

        // Dispatch event to event hub
        // console.log("officerselect:dispatch event to event hub")
        eventHub.dispatchEvent(customEvent)
    }
})