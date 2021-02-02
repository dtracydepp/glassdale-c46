
export const AssociatesList = () => {
console.log("AssociatesList")

}

const eventHub = document.querySelector(".container")
eventHub.addEventListener("AssociatesClicked", event => {

    console.log("Associates Clicked heard by Associates List")
})