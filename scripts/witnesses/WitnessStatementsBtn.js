const contentTarget = document.querySelector(".button__witnesses")

export const WitnessStatementsBtn = () => {
    contentTarget.innerHTML = "<button id='witnesses'>Witness Statements</button>"
    
}

const eventHub = document.querySelector(".container")
eventHub.addEventListener("click", clickEvent =>{

   if(clickEvent.target.id ==="witnesses"){
    const customEvent = new CustomEvent("witnesStatementsClicked")
    // console.log(customEvent)
    eventHub.dispatchEvent(customEvent)
   }
    
})