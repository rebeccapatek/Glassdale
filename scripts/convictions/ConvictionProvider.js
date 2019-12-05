let convictions = []

export const useConvictions = () => convictions

export const getConvictions = () => {
    return fetch("http://criminals.glassdale.us/criminals", {
    method: "GET"    
})
    .then(response => response.json())
    // .then(
    //         parsedCriminals => {
    //             console.table(parsedCriminals)
    //             criminals = parsedCriminals.slice()
    //         }
    //     )
    .then(
         parsedConvictions => {
             console.log(parsedConvictions)
             convictions = parsedConvictions.slice()
         }
    )
    /*
        Load database state into application state with a fetch().
        Make sure the last `then()` sets the local `convictions`
        variable to what is in the response from the API.
    */
}