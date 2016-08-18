// NotesApplication class
var Notes = require("./notes.js")
module.exports = function NotesApplication()  {

// Notes application class
    // Initialize NotesApplication constructor
    this.noteContents = [];

    // Note creation method
    this.createNote = function(author, note){
        // Create a note
        var newNote = new Notes(author, note);
        this.noteContents.push(newNote);
        return newNote;
    };
    
    // Notes listing method
    this.listNotes = function(){
        // list all notes
        for(var i = 0; i < this.noteContents.length; i++){
            console.log(
                {'Note ID': i,
                'Contents': this.noteContents[i].notes,
                'By Author': this.noteContents[i].author
                    }
                );
            }
        };

    // Notes getting method
    this.getNote = function(noteID){
       // Validate id and return note
        if(noteID in this.noteContents) return this.noteContents[noteID];
            return 'Input a valid note ID.';
    };
    
    // Notes searching method
    this.searchNotes = function(searchText){
        // Search for text and returns notes that contain text
        console.log("Showing results for search" + " " + "-" + searchText + "-" + "\n" + SearchResults);
        for(var i = 0; i < this.noteContents.length; i++){
            if(this.noteContents[i].notes.indexOf(searchText) >= 0){
                var SearchResults = console.log({'Note ID': i,
                'Contents': this.noteContents[i].notes,
                'By Author': this.noteContents[i].author
                    }
                );
            }
        }
    };

    // Notes editing method
    this.editNote = function(noteID, newNoteContent){
       // Validate id and edit note
        if(noteID in this.noteContents){
            this.noteContents[noteID] = newNoteContent; 
            return this.noteContents[noteID].notes;
        }else{
            return 'Input a valid ID.';
        }
    };
    
    // Note delete method
    this.deleteNote = function(noteID){
        // Validate id and delete note
        if(noteID in this.noteContents){
            this.noteContents[noteID] = null;   
        }else{
            return 'Input a valid ID.';
        }
    };
};
