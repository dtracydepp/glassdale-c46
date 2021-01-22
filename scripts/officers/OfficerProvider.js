let officers = []

export const useOfficers = () => {
    return officers.slice()
}

export const getOfficers = () => {
    // Request the data from the API
    return fetch("https://criminals.glassdale.us/officers")
    // Convert the JSON string response to a JS data structure (obj or array)
    .then (response =>  response.json())
    // Do something with the data 
    .then (
        parsedOfficers => {
            // console.table(parsedOfficers)
            officers = parsedOfficers
        }
    )
}