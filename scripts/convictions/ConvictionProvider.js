let crimes = []

export const useConvictions = () => crimes

export const getConvictions = () => {
    
    return fetch("http://criminals.glassdale.us/crimes", {
    
    method: "GET"    
})

.then(response => response.json())
  .then(
         parsedCrimes => {

             crimes = parsedCrimes.slice()

         }
    )
   
}
export default getConvictions