'use strict';

var chai = require('chai');
var assert = chai.assert;

var Notes = require('./lib/notes.js');
var NotesApplication = require('./lib/notesapplication.js');

describe("Note creation works properly", function() {
    it("assigns author based on the parameter supplied in the constructor", function() {
        note = new NotesApplication();
        note0 = note.createNote("IniOluwa", "The first note.")
        assert(note.this.noteContents.length === 1);
        assert(note.this.noteContents[0].author === "IniOluwa");
    });
});

describe("Notes application increments number of notes as notes are added", function() {
    it("increments the note list as notes are added", function() {
        note = new NotesApplication();
        assert(note.this.noteContents.length === 0);
        note0 = note.createNote("IniOluwa", "The second note.");
        assert(noteapp.this.noteContents.length === 1);
        note.createNote("IniOluwa", "The other second note.");
        assert(note.this.noteContents.length === 2);
    });
});

describe("Notes application creates notes and notes can be properly accessed", function() {
    it("creates new note", function() {
        note = new NotesApplication();
        note0 = note.createNote("IniOluwa", "The third note.");
        assert(note.this.noteContents[0].notes === 'The third note.');
        assert(note.this.noteContents[0].author === 'IniOluwa');
    });
});

describe("Notes application gets a note", function() {
    it("confirms note object exists with get", function() {
        note = new NotesApplication();
        note0 = note.createNote("IniOluwa", "The fourth note.");
        assert(note.getNote(0) !== null);
    });
});

describe("Notes application's 'get' returns error message after inputting unavailable id", function() {
    it("returns error message when invalid id used with 'get'", function() {
        note = new NotesApplication();
        note0 = note.createNote("IniOluwa", "The fifth note.");
        assert(note.this.noteContents[0] !== null);
        assert(note.getNote(0) !== null);
        assert(note.getNote(1) === 'Input valid note ID.');
    });
});

describe("Notes application list returns all notes", function() {
    it("confirms all notes are created and exists", function() {
        note = new NotesApplication();
        note0 = note.createNote("IniOluwa", "The sixth note.");
        note1 = note.createNote("IniOluwa", "The seventh note.");
        note2 = note.createNote("IniOluwa", "The eigth note.");
        note3 = note.createNote("IniOluwa", "The ninth note.");
        note4 = note.createNote("IniOluwa", "The tenth note.");
        assert(note.this.noteContents.length !== 0);
        assert(note.listNotes() !== null);
        assert(note.this.noteContents.length === 5);
        assert(note.this.noteContents[0].notes === 'The sixth note.');
    });
});

describe("Notes application checks all notes are stored in an array", function() {
    it("confirm notes in array", function() {
        note = new NotesApplication();
        assert(note.this.noteContents === typeof(object));
        assert(note.this.noteContents.length === 0);
        note0 = note.createNote("IniOluwa", "The eleventh note.");
        assert(note.this.noteContents.length === 1);
        assert(note.this.noteContents[0] !== null);
        assert(note.this.noteContents[0].notes === "The eleventh note.");
    });
});


describe("Notes application edites note", function() {
    it("edits already created note", function() {
        note = new NotesApplication();
        note0 = note.createNote("IniOluwa", "The twelveth note.");
        assert(note.this.noteContents.length === 1);
        note.editNote(0, "The edited twelveth note.");
        assert(note.thisContents[0].notes === "The edited twelveth note.");
    });
});

describe("Notes application edit returns error message after inputting unavailable id", function() {
    it("returns error message when invalid id used with edit", function() {
        note = new NotesApplication();
        assert(note.editNote(0) === 'Input a valid ID.');
    });
});

describe("Notes application deletes note", function() {
    it("deletes note and confirms note is gone", function() {
        note = new NotesApplication();
        note0 = note.createNote("IniOluwa", "The thirteenth note.");
        assert(note.this.noteContents.length === 1);
        note.deleteNote(0);
        assert(note.this.noteContents[0] === null);
        assert(note.this.noteContents.length === 0);
    });
});

describe("Notes application delete returns error message after inputting unavailable id", function() {
    it("returns error message when invalid id used with delete", function() {
        note = new NotesApplication();
        assert(note.deleteNote(0) === 'Input a valid ID.');
    });
});

describe("Notes application executes search", function() {
    it("confirms search results are not empty", function() {
        note = new NotesApplication();
        note0 = note.createNote("IniOluwa", "The sixth note.");
        note1 = note.createNote("IniOluwa", "The seventh note.");
        note2 = note.createNote("IniOluwa", "The eigth note.");
        assert(note.searchNotes !== null);
    });
});