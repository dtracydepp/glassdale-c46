export const Witness = (witnessObj) => {
    return `
    <article class="witnesses">
    <h4>Witness Name: ${witnessObj.name}</h4>
    <p>Statement: ${witnessObj.statements}<p>
    </article>    
    
    `
    
}
