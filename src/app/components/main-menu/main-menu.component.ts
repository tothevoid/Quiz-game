import { Component, Inject } from '@angular/core';

@Component({
    selector: 'main-menu',
    templateUrl: './main-menu.component.html',
    styleUrls: ['./main-menu.component.scss'],
})


export class MenuComponent{
    constructor(){
        localStorage.clear();
    }
}