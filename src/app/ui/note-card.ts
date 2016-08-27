/**
 * Created by Dacrol on 2016-08-25.
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component ({
    selector: 'note-card',
    styles: [`
.note-card {
    display: flex;
    flex-wrap: wrap;
    padding: 6px;
    border-radius: 2px;
    width: 100%;
    position: relative;
    margin-bottom: 16px;
}
.title {
    font-size: 3.2vmin;
    font-weight: normal;
    text-align: left;
    color: rgba(0,0,0,0.5);
    margin-bottom: 6px;
    margin-top: 6px;
}
.value {
    text-align: left;
    font-size: 2.7vmin;
    font-weight: 200;
    white-space: pre-line;
}
.icon {
    position: absolute;
    color: black;
    border: 1px solid lightgrey;
    background-color: white;
    font-size: 30px;
    top: -10px;
    left: -10px;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    cursor: pointer;
}`],
    template: `
<div [ngStyle]="{'background-color': note.color}" class="note-card row shadow-1" (mouseenter)="toggle()" (mouseleave)="toggle()">
    <div class="icon" *ngIf="showCheck" (click)="onChecked()">
        <i class="material-icons">check</i>
    </div>
    <div class="col-xs-12 box title" *ngIf="note.title.length != 0">
        {{ note.title }}
    </div>
    <div class="col-xs-12 box value">
        {{ note.value.trim() }}
    </div>
    <div class="col-xs-12"><br></div>
    
</div>
`
})
export class NoteCard {
    //note = {title: 'test note', value: 'keep coding ffs'}
    @Input('note') note = {};
    @Output() checked = new EventEmitter();
    showCheck: boolean = false;

    toggle() {
        this.showCheck = !this.showCheck;
    }

    onChecked(){
        this.checked.next(this.note);
    }
}