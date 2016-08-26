/**
 * Created by Dacrol on 2016-08-25.
 */

import { Component, Output, EventEmitter } from '@angular/core';
import { ColorPicker } from './color-picker';

@Component ({
    selector: 'note-creator',
    directives: [ColorPicker],
    styles: [`.note-creator {
      padding: 20px;
      background-color: white;
      border-radius: 3px;
    }
    .title {
      font-weight: bold;
      color: rgba(0,0,0,0.8);
    }
    /*.full {
      height: 100px;
    }*/`],
    template: `
<div class="note-creator shadow-2" [ngStyle]="{'background-color': newNote.color}">
    <pre>{{ newNote | json }}</pre>
    <form class="row" (ngSubmit)="onCreateNote()">
        <input
                type="text"
                [(ngModel)]="newNote.title"
                name="newNoteTitle"
                placeholder="Title"
                class="col-xs-10 title"
                *ngIf="fullForm"
        >
        <input
                type="text"
                (focus)="toggleFull(true)"
                [ngModel]="newNote.value"
                (ngModelChange)="newNote.value = $event"
                name="newNoteValue"
                placeholder="Take a note..."
                class="col-xs-10"
        >
        <div class="actions col-xs-12 row between-xs" *ngIf="fullForm">
        <div class="col-xs-3">
        <color-picker 
        (selected)="onColorSelect($event)"
        [colors]="colors"
        ></color-picker>
        </div>
            <button
                    type="submit"
                    class="btn-light"
            >
                Done
            </button>
        </div>
    </form>
</div>`
})

export class NoteCreator{
    @Output() createNote = new EventEmitter();

    newNote = {
        title: '',
        value: '',
        color: 'white'
    };

    colors: Array<string> = ['#b19cd9', '#ff9691', '#77dd77', '#aec6cf', '#f49ac2', 'white'];





    fullForm: boolean = false;

    onCreateNote(){
        const {title, value, color} = this.newNote;

        if(value){
            this.createNote.next({title,value, color});
            this.reset();
            this.fullForm = false;
        }
    }

    reset(){
        this.newNote = {
            title: '',
            value: '',
            color: 'white'
        }
    }

    toggleFull(value: boolean){
        this.fullForm = value;
    }

    onColorSelect(color: string) {
        this.newNote.color = color;

    }

}
