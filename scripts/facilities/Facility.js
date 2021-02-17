export const Facilities = (facilitiesObj, criminalArray) => {
    
    return `

        <div class="facilities">
        <h3>${facilitiesObj.facilityName}</h3>
        <p>Security Level: ${facilitiesObj.securityLevel}</p>
        <p>Capacity: ${facilitiesObj.capacity}</p>
        <p class="criminalsFacilities"> Criminals</p>
       <ul> ${criminalArray.map(c => `<li>${c.name}</li>`).join("")}</ul>
         </div>
         </div>
    `
}
