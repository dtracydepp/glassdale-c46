import { ShowAssociatesButton } from "../associates/ShowAssociatesButton.js"

export const Criminal = (criminalObj, facilities) => {
    return `
    <div class="criminals">
        <h3>${criminalObj.name}</h3>
        <div class="criminal__details">
            <p>Convicted for ${criminalObj.conviction}</p>
            <p>Arrested by ${criminalObj.arrestingOfficer}</p>
            <p>Incarcerated between:
                ${new Date(criminalObj.incarceration.start).toLocaleDateString()} and
                ${new Date(criminalObj.incarceration.end).toLocaleDateString()}
            </p>
            <p>Age: ${criminalObj.age}</p>
            <div>
                <h4>Facilities</h4>
                <ul>
                    ${facilities.map(f => `<li>${f.facilityName}</li>`).join("")}
                </ul>
            </div>
                    <p>${ShowAssociatesButton(criminalObj)}</p>
            </div>
         </div>
    `
}