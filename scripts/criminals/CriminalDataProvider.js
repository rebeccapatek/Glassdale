let criminals = []

export const useCriminals = () => {
    return criminals
}

export const getCriminals = () => {
    return fetch("http://criminals.glassdale.us/criminals", {
    method: "GET"    
})
    .then(response => response.json())
    .then(
            parsedCriminals => {
                criminals = parsedCriminals.slice()
            }
        )
}


