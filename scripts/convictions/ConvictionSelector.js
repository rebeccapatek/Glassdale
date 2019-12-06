/*
 *   ConvictionSelect component that renders a select HTML element
 *   which lists all convictions in the Glassdale PD API
 */
import { useConvictions } from "./ConvictionProvider.js"

// Get a reference to the DOM element where the <select> will be rendered
const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".filters__crime")

export const ConvictionSelect = () => {
    // Get all convictions from application state
    const convictions = useConvictions()
    console.log(convictions)
    eventHub.addEventListener("change", changeEvent => {
        if (changeEvent.target.classList.contains("dropdown")) {
            const selectedCrime = changeEvent.target.value.split("-").join(" ")
            const message = new CustomEvent("convictionSelected", {
                detail: {
                    crime: selectedCrime
                }
            })
            eventHub.dispatchEvent(message)
        }
    })

    const render = convictionsCollection => {
        console.log(convictionsCollection)
        let options = convictionsCollection.map(conviction => `<option value=${conviction.split(" ").join("-")}>${conviction}</option>
        ` ).join(" ")
        console.log(options)

        contentTarget.innerHTML = `
            <select class="dropdown" id="crimeSelect">
                <option value="0">Please select a crime...</option>
                ${options}

            </select>
        `
    }

    render(convictions)
}
