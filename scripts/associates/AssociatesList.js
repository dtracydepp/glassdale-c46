import {useCriminals} from "../criminals/CriminalDataProvider.js"


const contentContainer = document.querySelector(".associatesContainer")


export const AssociatesList = (criminalObj) => {
// console.log(criminalObj)


const HTMLRep =`
<h1>Known Associates for ${criminalObj.name}</h1>
${criminalObj.known_associates.map(associate =>{
    return `<section class="associate__container">
    <div class"associate__name">Assocaite Name: ${associate.name}</div>
    <div class"associate__alibi">Alibi: ${associate.alibi}</div>
    </section>`

}).join("")}`

contentContainer.innerHTML = HTMLRep

}

const eventHub = document.querySelector(".container")
eventHub.addEventListener("AssociatesClicked", event => {

    // console.log("Associates Clicked heard by Associates List")
// get the criminalId of the selected criminal

    const selectedCriminalId = event.detail.criminalId
    // console.log("criminalId",criminalId)

// get the entire array of criminals
    const criminalsArray = useCriminals()

    // find method to search array of criminals until id matches criminalId

    const selectedCriminal = criminalsArray.find((criminal)=> criminal.id === selectedCriminalId)

    // console.log("selectedCriminal",selectedCriminal)
    AssociatesList(selectedCriminal)
})