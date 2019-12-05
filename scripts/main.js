// main.js
import { getCriminals } from './criminals/CriminalDataProvider.js'
import CriminalList from "./criminals/CriminalList.js"
import { ConvictionSelect } from './convictions/ConvictionSelector.js'
import { useConvictions, getConvictions } from './convictions/ConvictionProvider.js'
getCriminals().then(CriminalList)
ConvictionSelect()
useConvictions()
getConvictions().then(ConvictionSelect)
// getCriminals().then(
//     () => CriminalList ()
// )
// This is the same code put is called a callback function-you can pass parameters through it 
// The .then goes and and gets the criminal data when you're done getting the date 
    /*
        Now that you have the data, what
        component should be rendered?
    */
// import { getCriminals } from "./Criminal/CriminalProvider.js"
// import CriminalList from "./Criminal/CriminalList.js"
// getCriminals().then(
//     () => CriminalList()
// )