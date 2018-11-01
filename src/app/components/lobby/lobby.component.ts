import { Component, Inject } from '@angular/core';

@Component({
    selector: 'lobby',
    templateUrl: './lobby.component.html',
    styleUrls: ['./lobby.component.scss'],
})


export class LobbyComponent{
    constructor(){
        setInterval(this.updateLobbyStatus, 2000);
    }

    updateLobbyStatus(){

    }

    ready(event: Event){
        
    }
}