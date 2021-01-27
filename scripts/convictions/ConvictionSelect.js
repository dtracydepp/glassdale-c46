/*
 *   ConvictionSelect component that renders a select HTML element
 *   which lists all convictions in the Glassdale PD API
 */
import { useConvictions,getConvictions } from "./ConvictionProvider.js"

// Get a reference to the DOM element where the <select> will be rendered
const contentTarget = document.querySelector(".filters__crime")
// Get a reference to the DOM element that contains ALL components.
const eventHub = document.querySelector(".container")



export const ConvictionSelect = () => {
    // Trigger fetching the API data and loading it into application state
    getConvictions()
    .then( () => {
      // Get all convictions from application state
      const convictions = useConvictions()
      render(convictions)
    })
}

const render = convictionsCollection => {
    /*
        Use interpolation here to invoke the map() method on --line 31-32
        the convictionsCollection to generate the option elements.
       
    */


    contentTarget.innerHTML = `
        <select class="dropdown" id="crimeSelect">
            <option value="0">Please select a crime...</option>
            ${convictionsCollection.map(
                convictionObj => {
                return `<option value="${convictionObj.id}">${convictionObj.name}</option>`
                }
            )
        }
            }
        </select>
    `
}

eventHub.addEventListener("change", ChangeEvent => {

    // Only do this if the `crimeSelect` element was changed
    if (ChangeEvent.target.id === "crimeSelect") {
        // Create custom event. Provide an appropriate name.
        const customEvent = new CustomEvent("crimeChosen", {
            detail: {
                crimeThatWasChosen: event.target.value
            }
        })

        // Dispatch to event hub
        eventHub.dispatchEvent(customEvent)
    }
})