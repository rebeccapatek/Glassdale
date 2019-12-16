
const eventHub = document.querySelector(".container")
export const CriminalComponent = (criminal) => {
    // let criminalName = criminal.name.split(" ").join("-")

    return `
    <div class="criminal">

        <div>Name: ${criminal.name}</div>
        <div>Age: ${criminal.age}</div>
        <div>Crime: ${criminal.conviction}</div>
        <div>Term Start: ${new Date(criminal.incarceration.start).toLocaleDateString('en-US')}</div>
        <div>Term End: ${new Date(criminal.incarceration.end).toLocaleDateString('en-US')}</div>
        <button id="associates--${criminal.id}">Associate Alibis</button>
        <dialog class="dialog--associates" id="details__${criminal.id}">
        ${criminal.known_associates.map((associate) => 
            `
            <div>Name: ${associate.name}</div>
            <div>Alibi: ${associate.alibi}</div>
            `).join("")
        }
            <button class="button--close">Close</button>        
        </dialog>
    </div>
        `

}
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("associates--")) {
        const dialogSibilingSelection = `#${clickEvent.target.id}+dialog`;
        ///If the clicked element has an id that starts with asss-- then find the dialog sibling of that specific button
      
        const showDialog = document.querySelector(dialogSibilingSelection)
        showDialog.showModal();
    } else if (clickEvent.target.classList.contains("button--close")) {
        const closeDialog = event.target.parentNode;
        closeDialog.close();
    }
});


