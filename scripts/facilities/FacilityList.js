import { getCriminals, useCriminals } from "../criminals/CriminalDataProvider.js";
import { getCriminalFacilities, useCriminalFacilities } from "./CriminalFacilityProvider.js";
import { Facilities } from "./Facility.js";
import { getFacilities, useFacilities } from "./FacilityProvider.js";

const facilityContainer = document.querySelector(".facilityContainer")
const eventHub = document.querySelector(".container")


let facilities = []
let crimFac = []
let criminals = []


const FacilityList = () => {

  getFacilities()
    .then(getCriminalFacilities)
    .then(getCriminals)
    .then(() => {
      facilities = useFacilities()
      crimFac = useCriminalFacilities()
      criminals = useCriminals()

      render()
    })

}

const render = () => {
   
  facilityContainer.innerHTML = `
          <h3>Glassdale Facilities</h3>
          <section class="facilitiesList">
            ${facilities.map(facility => {
        const criminalRelationshipsForThisFacility = crimFac.filter(cf => cf.facilityId === facility.id)
        const criminalsAtThisFacility = criminalRelationshipsForThisFacility.map(cf => {
        const matchingCriminalObj = criminals.find(criminal => criminal.id === cf.criminalId)

      return matchingCriminalObj
    })

    return Facilities(facility, criminalsAtThisFacility)
  }).join("")
    }
          </section>
        `
}

// event listener for "Show Facilities Button"
eventHub.addEventListener("facilitiesButtonClicked", customEvent => {
    FacilityList()
})