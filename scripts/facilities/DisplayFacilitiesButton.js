const contentTarget = document.querySelector(".facility__button")

export const DisplayFacilitiesButton = () => {
    contentTarget.innerHTML = "<button id='facilities'>Show Facilities</button>"
    
}

const eventHub = document.querySelector(".container")
eventHub.addEventListener("click", clickEvent =>{

   if(clickEvent.target.id ==="facilities"){
    const customEvent = new CustomEvent("facilitiesButtonClicked")
    // console.log(customEvent)
    eventHub.dispatchEvent(customEvent)
   }
    
})