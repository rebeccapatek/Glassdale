const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".alibiContainer")

const DialogComponent = () => {

    eventHub.addEventListener("associateButtonClicked", event => {
        const criminals = useCriminals()
    })
const render = () => {
        contentTarget.innerHTML = `
        <dialog class="alibies">
            <div class="alibi__text"></div>
            <button id="closeDialog"></button>
        </dialog>
        `
    }
}
