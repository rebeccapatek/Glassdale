
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
    //
// eventHub.addEventListener("click", clickEvent => {
//     if (clickEvent.target.id.startsWith("associates--")) {
//         //this id is the targeteing the id of the button not the idnumber of the criminal yet altho that is wht it fetches
//         const [prefix, criminalId] = clickEvent.target.id.splice("--")
//         const message = new CustomEvent("associateButtonClicked", {
//             detail: {
//                 criminalId: clickEvent.target.id
//             }
//         })
//         eventHub.dispatchEvent(message)
//     }
// })
///This will send the ID number of the criminal to the evenHun

    


let render = criminals => {
contentElement.innerHTML = `
            ${
                criminals.map(
                    singleCriminalObject => {
                       return CriminalComponent(singleCriminalObject)
                    })
                    .join("")}`
           
            }
    
}

export default CriminalList