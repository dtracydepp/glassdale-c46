import {getOfficers, useOfficers} from "./OfficerProvider.js"
import {Officer} from "./Officer.js"

const officersContainer = document.querySelector(".officersContainer")

export const OfficerList = () => {
    getOfficers()
    .then (() => {
        const officerArray = useOfficers()

        let officersHTMLRep = ""
            for (const officer of officerArray){

                officersHTMLRep += Officer(officer)


                officersContainer.innerHTML = `
                <h2>Glassdale Officers<h2>
                <section class="officerList">
                ${officersHTMLRep}
                </section>    
                `
          
                
            }
            // console.log("OfficerList",officersHTMLRep)
    
    })
    
    
    
    
}