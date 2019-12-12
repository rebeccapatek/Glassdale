let notes = []

export const useNotes = () => {
    return notes;
};
export const getNotes = () => {
    return fetch('http://localhost:8088/notes', {
        method: "GET",
})
        .then(response => response.json())
        .then(parsedNotes => {
            // console.table(parsedNotes);
            notes = parsedNotes.slice()
        })
}

export const saveNote = (note) => {
    return fetch('http://localhost:8088/notes', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(note)
        //takes a string and puts it back into object form
    })
    .then(getNotes)
}
