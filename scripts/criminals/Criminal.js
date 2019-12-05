// const FishComponent = (fish) => {
//     let fishName = fish.name.split(" ").join("-")
  
//     return `
//         <div class="fish">
//             <div>
//                 <img class="fish__image" src="${fish.image}" alt="">
//             </div>
//             <div class="fish__name">${fish.name}</div>
//             <button id="fish--${fishName}">Details</button>
//             <dialog class="dialog--fish" id="details--${fishName}">
//                 <div>Species: ${fish.species}</div>
//                 <div>Location: ${fish.location}</div>
//                 <div>Length: ${fish.size}</div>
//                 <div>Food: ${fish.food.join(",")}</div>
//                 <button class="button--close">Close Dialog</button>
//             </dialog>
//         </div>
//     `
// }

// export default FishComponent

export const CriminalComponent = (criminal) => {
    // let criminalName = criminal.name.split(" ").join("-")

    return `
    <div class="criminal">

        <div>Name: ${criminal.name}</div>
        <div>Age: ${criminal.age}</div>
        <div>Crime: ${criminal.conviction}</div>
        <div>Term Start: ${new Date(criminal.incarceration.start).toLocaleDateString('en-US')}</div>
        <div>Term End: ${new Date(criminal.incarceration.end).toLocaleDateString('en-US')}</div>
    </div>
        `

}

