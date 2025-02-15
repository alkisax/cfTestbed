const daysGR = ['Κυριακή', 'Δευτέρα', 'Τρίτη', 'Τετάρτη', 'Πεμπτη', 'Παρασκευή', 'Σάββατο']
const monthsGR = [
  'Ιανουαρίου',   // Ιανουάριος
  'Φεβρουαρίου',  // Φεβρουάριος
  'Μαρτίου',      // Μάρτιος
  'Απριλίου',     // Απρίλιος
  'Μαΐου',        // Μάιος
  'Ιουνίου',      // Ιούνιος
  'Ιουλίου',      // Ιούλιος
  'Αυγούστου',    // Αύγουστος
  'Σεπτεμβρίου', // Σεπτέμβριος
  'Οκτωβρίου',    // Οκτώβριος
  'Νοεμβρίου',    // Νοέμβριος
  'Δεκεμβρίου'    // Δεκέμβριος
];

let notes = []
let count = 0

window.addEventListener('DOMContentLoaded', function() {

  this.setInterval(printGRDate, 1000);

  this.document.querySelector('#addNoteBtn').addEventListener('click', function(){
    onInsertHandler({key: count + 1, note: document.querySelector('#inputNote').ariaValueMax.trim(),softDeleted: false })
  })
  this.document.querySelector('#inputNote').addEventListener('keyup', function(event){
    if(event.key === 'Enter') {
      onInsertHandler({key: count + 1, note: event.target.value.trim(),softDeleted: false })
    }
  })


})
