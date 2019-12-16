// main.js
import NoteFormComponent from '../notes/NoteForm.js'
import { getCriminals } from './criminals/CriminalDataProvider.js'
import CriminalList from "./criminals/CriminalList.js"
import { ConvictionSelect } from './convictions/ConvictionSelector.js'
import { useConvictions, getConvictions } from './convictions/ConvictionProvider.js'
import { useNotes, getNotes, saveNote } from '../notes/NoteDataProvider.js'
import { NoteListComponent } from '../notes/NoteList.js'


getNotes().then(
    () => 
        NoteListComponent())
NoteFormComponent()

getCriminals().then(CriminalList)

getConvictions().then(ConvictionSelect)
