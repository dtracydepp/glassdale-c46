import {getWitnesses, useWitnesses} from "./WitnessDataProvider.js"
import {Witness} from "./Witness.js"

const witnessesContainer= document.querySelector(".witnessesContainer")

export const WitnessList = () => {
    getWitnesses()
    .then (() => {
        const witnessArray = useWitnesses()
        
        let witnessHTMLRep = ""
            for (const witness of witnessArray){

               witnessHTMLRep += Witness(witness)


               witnessesContainer.innerHTML = `
                <h2>Witnesses<h2>
                <section class="witnessList">
                ${witnessHTMLRep}
                </section>    
                `
          
                
            }
            // console.log("WitnessList",witnessHTMLRep)
    
    })
    
    
    
    
}