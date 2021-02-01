import { getCriminals, useCriminals } from "./CriminalDataProvider.js"
import { Criminal } from "./Criminal.js"
import {useConvictions} from "../convictions/ConvictionProvider.js"
import { OfficerSelect } from "../officers/OfficerSelect.js"



const criminalsContainer = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")

const renderToDom = (criminalCollection) => {
    let criminalsHTMLRep = ""

    for (const criminal of criminalCollection) {
        criminalsHTMLRep += Criminal(criminal)
    }

    criminalsContainer.innerHTML = `
                <h2>Glassdale Criminals<h2>
                <section class="criminalList">
                ${criminalsHTMLRep}
                </section>   
                `
}
// console.log("CriminalList",criminalsHTMLRep)

export const CriminalList = () => {
    getCriminals()
        .then(() => {
            const criminalsArray = useCriminals()
            renderToDom(criminalsArray)

        })

}

// Listen for the custom event dispatched in ConvictionSelect

eventHub.addEventListener("crimeChosen", event => {
    // use the property added to the event detail  in Custom Event --crimeThatWasChosen

    if (event.detail.crimeThatWasChosen !== "0") {

        // Get a copy of the array of convictions from the data provider

        const convictionsArray = useConvictions()

        // use the find method to get the first object in the convictions array that has the same id as the id of the chosen crime

        const chosenConvictionObject = convictionsArray.find(convictionsObj => {
            // console.log("check",convictionsObj)
            return convictionsObj.id === parseInt(event.detail.crimeThatWasChosen)
        })

        // filter the criminals application state down to the ppl that committed the crime
        // Get a copy of the array of criminals from the data provider

       const criminalsArray = useCriminals ()

        // filter the criminals data down to the people that committed the crime 

        const filteredCriminalsArray = criminalsArray.filter(criminalObj => criminalObj.conviction === chosenConvictionObject.name)

        // invoke the render() and pass the filtered collection as an argument
        renderToDom(filteredCriminalsArray)

    }


})

eventHub.addEventListener("officerSelect", event => {
    // access the officer name that was selected by the user
    const officerName = event.detail.officer
    console.log("CriminalList: officerselect custom event", officerName)

    // get the criminals that were arrested by that officer
    const criminals = useCriminals()
    console.log ("criminals", criminals)
    criminals.filter(
        criminalObject => {
            if (criminalObject.arrestingOfficer === officerName) {
                return true
            }
        }
    )
})


