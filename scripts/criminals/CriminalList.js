
// Import `useFish` from the data provider module

import { useCriminals } from "./CriminalDataProvider.js"
import { CriminalComponent } from "./Criminal.js"


const CriminalList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".criminalsContainer")
    const criminals = useCriminals()
    

    // let allFishHTML = ""

    // for (const fish of fishes) {
    //     const fishHTML = FishComponent(fish)
    //     allFishHTML += fishHTML
    // }

    // Add to the existing HTML in the content element


    contentElement.innerHTML += `
            ${
                criminals.map(
                    (currentCriminal) => {
                       return CriminalComponent(currentCriminal)
                    }
                ).join("")
                // could also be short handed as
                // fishes.map(fish => FishComponent(fish)).join("")
            }
       
    `
}

export default CriminalList