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
    padding: 15px;
    border-radius: 2px;
    width: 100%;
    position: relative;
}
.title {
    font-size: 2.8vw;
    font-weight: normal;
    text-align: center;
    color: rgba(0,0,0,0.8);
}
.value {
    text-align: left;
    font-size: 2.5vw;
    font-weight: 100;
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
    <div class="box title">
        {{ note.title }}
    </div>
    <div class="box value">
        {{ note.value }}
    </div>
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