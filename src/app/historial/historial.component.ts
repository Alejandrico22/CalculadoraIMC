import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrl: './historial.component.css'
})
export class HistorialComponent {

    // @Input mensaje?:string;

    diagnosticoRecibido?:string;

    historial:string[] = [];

    addMessage(mensaje:string){
        this.diagnosticoRecibido = mensaje;
        this.historial.push(this.diagnosticoRecibido || "")
    }
    clear(){
        this.historial = [];
    }

}
