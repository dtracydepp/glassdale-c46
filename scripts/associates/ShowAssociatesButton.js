import "./AssociatesList.js"

export const ShowAssociatesButton = (criminalObj) => {
    return ` <button id="associates--${criminalObj.id}">Associate Alibis</button>`
}

const eventHub = document.querySelector(".container")
eventHub.addEventListener("click", event => {
    
if (event.target.id.startsWith("associates--")){
    // console.log("event id:", event.target.id)
   const [prefix,criminalId] = event.target.id.split("--")
    //  console.log ("criminalId",criminalId)

    const customEvent = new CustomEvent("AssociatesClicked", {
        detail: {
            criminalId: parseInt(criminalId)
        }
           
    })
    // console.log("customEvent:", customEvent) 
    eventHub.dispatchEvent(customEvent)
}

})