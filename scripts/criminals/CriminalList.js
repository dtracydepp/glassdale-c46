import { getCriminals, useCriminals } from "./CriminalDataProvider.js"
import {getFacilities,useFacilities} from "../facilities/FacilityProvider.js"
import {useCriminalFacilities, getCriminalFacilities} from "../facilities/CriminalFacilityProvider.js"
import { Criminal } from "./Criminal.js"
import {useConvictions} from "../convictions/ConvictionProvider.js"




const contentTarget = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")


const renderToDom = (criminalsToRender, allFacilities, allRelationships) => {
    // Step 1 - Iterate all criminals
    contentTarget.innerHTML = criminalsToRender.map(
        (criminalObj) => {
            // Step 2 - Filter all relationships to get only ones for this criminal
            const facilityRelationshipsForThisCriminal = allRelationships.filter(cf => cf.criminalId === criminalObj.id)

            // Step 3 - Convert the relationships to facilities with map()
            const facilities = facilityRelationshipsForThisCriminal.map(cf => {
                const matchingFacilityObject = allFacilities.find(facility => facility.id === cf.facilityId)
                return matchingFacilityObject
            })

            // Must pass the matching facilities to the Criminal component
            return Criminal(criminalObj, facilities)
        }
    ).join("")
}

// const renderToDom = (criminalCollection) => {
//     let criminalsHTMLRep = ""

//     for (const criminal of criminalCollection) {
//         criminalsHTMLRep += Criminal(criminal)
//     }

//     criminalsContainer.innerHTML = `
//                 <h2>Glassdale Criminals<h2>
//                 <section class="criminalList">
//                 ${criminalsHTMLRep}
//                 </section>   
//                 `
// }

export const CriminalList = () => {
    // Kick off the fetching of both collections of data
    getFacilities()
        .then(getCriminalFacilities)
        .then(
            () => {
                // Pull in the data now that it has been fetched
                const facilities = useFacilities()
                const crimFac = useCriminalFacilities()
                const criminals = useCriminals()

                // Pass all three collections of data to render()
                renderToDom(criminals, facilities, crimFac)
            }
        )
}



// Listen for the custom event dispatched in ConvictionSelect

// listener for crime drop down

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
       const facilities = useFacilities()
       const crimFac = useCriminalFacilities()

        // filter the criminals data down to the people that committed the crime 

        const filteredCriminalsArray = criminalsArray.filter(criminalObj => criminalObj.conviction === chosenConvictionObject.name)

        // invoke the render() and pass the filtered collection as an argument
        renderToDom(filteredCriminalsArray, facilities, crimFac)

    } 


})

// listener for officer select dropdown
eventHub.addEventListener("officerSelected", event => {
    // access the officer name that was selected by the user-- get from line 59 officerselect
    const officerName = event.detail.officer
    // console.log("CriminalList: officerselect custom event", officerName)

    // get the criminals that were arrested by that officer

    const criminalsArray = useCriminals()
    const facilities = useFacilities()
    const crimFac = useCriminalFacilities()
  
    // console.log ("criminals", criminalsArray)
    
    const filteredCriminalsArray = criminalsArray.filter(
         (criminalObj) => {
            if (criminalObj.arrestingOfficer === officerName) {
                return true
            }
            
        })
        // console.log("CriminalList:array of criminals filtered by only the criminals arrested by selected officer", filteredCriminalsArray)
    
    renderToDom(filteredCriminalsArray,facilities,crimFac)
})

// event listener for "Show Facilities Button"
// eventHub.addEventListener("facilitiesButtonClicked", customEvent => {
//     FacilityList()
// })