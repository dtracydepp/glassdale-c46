import {getCriminals, useCriminals} from "./CriminalDataProvider.js"
import {Criminal} from "./Criminal.js"


const criminalsContainer = document.querySelector(".criminalsContainer")

export const CriminalList = () => {
    getCriminals()
        .then (() => {
            const criminalArray = useCriminals()

        let criminalsHTMLRep = ""
            for (const criminal of criminalArray){

                criminalsHTMLRep += Criminal(criminal)

                criminalsContainer.innerHTML = `
                <h2>Glassdale Criminals<h2>
                <section class="criminalList">
                ${criminalsHTMLRep}
                </section>   
                `
            }
        // console.log("CriminalList",criminalsHTMLRep)

        }) 
      
}
