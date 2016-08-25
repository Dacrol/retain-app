/**
 * Created by Dacrol on 2016-08-24.
 */
import { Component} from '@angular/core';
import { NoteCard } from '../ui';
import { NoteCreator } from '../ui';
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
        <note-creator></note-creator>
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
export class Notes {
    notes = [
        {title: 'new note', value: 'code!', color: '#DDF'},
        {title: 'new note', value: 'code more!', color: '#DFD'},
        {title: 'new note', value: 'keep coding ffs!', color: '#FDF'}];
    onNoteChecked(note, i){
        console.log(note);
        this.notes.splice(i,1)
    }
    //note = {title: 'new note', value: 'code!', color: '#DDF'};
}