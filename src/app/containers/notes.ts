/**
 * Created by Dacrol on 2016-08-24.
 */
import { Component} from '@angular/core';
import { NoteCard } from '../ui';
import { NoteCreator } from '../ui';
import { NoteService } from '../services';
import { OnDestroy } from '@angular/core'

@Component ({
    selector: 'notes-container',
    directives: [NoteCard,
    NoteCreator],
    styles: [`
  .notes {
  padding-top: 50px;
    }
  .creator {
  margin-bottom: 40px; 
    }    
`],
    template: `
<div class="row center-xs notes">
    <div class="col-xs-6 creator">
        <note-creator (createNote)="onCreateNote($event)"></note-creator>
    </div>
    <div class="notes col-xs-8">
        <div class="row between-xs">
            <note-card class="col-xs-4" [note]="note" *ngFor="let note of notes; let i = index" (checked)="onNoteChecked($event, i)">
            </note-card>
        </div>
    </div>
</div>
	`
})
export class Notes implements OnDestroy {

    notes = [];
    ngOnDestroy(){
        console.log('Notes component destroyed')
    }
    // notes = [
    //     {title: 'new note', value: 'code!', color: '#DDF'},
    //     {title: 'new note', value: 'code more!', color: '#DFD'},
    //     {title: 'new note', value: 'keep coding ffs!', color: '#FDF'},
    //     {title: 'new note', value: 'rome wasn\'t built in a day :(', color: '#FAD'}
    //     ];

    constructor(private noteService: NoteService){
        this.noteService.getNotes()
            .subscribe(res => this.notes = res.data);
    }

    onNoteChecked(note, i){
        //console.log(note);
        //this.notes.splice(i,1)
        this.noteService.completeNote(note)
            .subscribe(note => {
                const i = this.notes.findIndex(localNote => localNote.id === note.id);
                this.notes.splice(i, 1);
            });
    }
    //note = {title: 'new note', value: 'code!', color: '#DDF'};
    onCreateNote(note){
        this.noteService.createNote(note)
            .subscribe(note => this.notes.push(note));
        //this.notes.push(note);
    }
}