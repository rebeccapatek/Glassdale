// main.js
import { getCriminals } from './criminals/CriminalDataProvider.js'
import CriminalList from "./criminals/CriminalList.js"
import { ConvictionSelect } from './convictions/ConvictionSelector.js'
import { useConvictions, getConvictions } from './convictions/ConvictionProvider.js'
getCriminals().then(CriminalList)

getConvictions().then(ConvictionSelect)
