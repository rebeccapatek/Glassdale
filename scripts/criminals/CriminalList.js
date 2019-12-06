
// Import `useFish` from the data provider module

import { useCriminals } from "./CriminalDataProvider.js"
import { CriminalComponent } from "./Criminal.js"

const eventHub = document.querySelector(".container")
const contentElement = document.querySelector(".criminalsContainer")
const CriminalList = () => {

    // Get a reference to the `<article class="content">` element
    const criminals = useCriminals()
    eventHub.addEventListener("convictionSelected", event => {
        const crime = event.detail.crime
        const findingCriminalswhoDidACrime = criminals.filter(
            (currentCriminal) => {
                if (currentCriminal.conviction===crime) {
                    return currentCriminal
                }
            }
        )
        render (findingCriminalswhoDidACrime)

    })
    

    // let allFishHTML = ""

    // for (const fish of fishes) {
    //     const fishHTML = FishComponent(fish)
    //     allFishHTML += fishHTML
    // }

    // Add to the existing HTML in the content element

let render = criminals => {
contentElement.innerHTML = `
            ${
                criminals.map(
                    message => {
                       return CriminalComponent(message)
                    })
                    .join("")}`
           
            }
    
}

export default CriminalList