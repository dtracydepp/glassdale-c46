let witnesses = []

export const useWitnesses = () => {
    return witnesses.slice()
}

export const getWitnesses = () => {
    // Request the data from the API --loads database state inot application state
    return fetch("https://criminals.glassdale.us/witnesses")
    // JS will run this function after fetch call is complete..Convert the JSON string response to a JS data structure (obj or array)
    .then (response =>  response.json())
    // Updates the criminals array--Do something with the data 
    .then (
        parsedWitnesses => {
            // console.table(parsedWitnesses)
            witnesses = parsedWitnesses
        }
    )
}