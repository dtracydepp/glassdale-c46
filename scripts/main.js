import {ConvictionSelect} from "./convictions/ConvictionSelect.js"
import { getConvictions, useConvictions } from "./convictions/ConvictionProvider.js"
import { getCriminals, useCriminals } from "./criminals/CriminalDataProvider.js"
import { CriminalList } from "./criminals/CriminalList.js"
import { OfficerList } from "./officers/OfficerList.js"
import {useOfficers, getOfficers} from "./officers/OfficerProvider.js"
import { NoteForm } from "./notes/NoteForm.js"


// useOfficers ()
// getOfficers()
// getCriminals ()
// useCriminals ()



NoteForm()
ConvictionSelect ()
CriminalList ()
OfficerList ()

// Test ConvictionProvider
// getConvictions () 
// .then( () => console.log(useConvictions()))