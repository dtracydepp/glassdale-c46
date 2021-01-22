let criminals = []

export const useCriminals = () => {
    return criminals.slice()
}

export const getCriminals = () => {
    // Request the data from the API
    return fetch("https://criminals.glassdale.us/criminals")
    // Convert the JSON string response to a JS data structure (obj or array)
    .then (response =>  response.json())
    // Do something with the data 
    .then (
        parsedCriminals => {
            // console.table(parsedCriminals)
            criminals = parsedCriminals
        }
    )
}