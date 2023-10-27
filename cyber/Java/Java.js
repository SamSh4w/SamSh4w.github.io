// Save Button Implemented
function setInputValue() {
    // Selecting the input element and get its value 
    let tex = document.getElementById("note").value;
    // Displaying the value
    localStorage.setItem('note',tex);
    const dog = localStorage.getItem('note');
    console.log(dog);
}
// Add Delete Button
function delNote(){
    localStorage.removeItem('note')
    ex = ''
    localStorage.setItem('note',ex)
    console.log(localStorage);
}
// Add Load Button
function disNote(){
    note = localStorage.getItem('note');
    console.log(note)
}
// Create Load System For NotePad
function ldNote(){
    note = localStorage.getItem('note')
    document.getElementById('note').value = note;
}
