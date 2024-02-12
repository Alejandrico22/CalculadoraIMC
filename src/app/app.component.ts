import { Component, ViewChild } from '@angular/core';
import { CalculadoraComponent } from './calculadora/calculadora.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

    title = 'CalculadoraIMC';

    @ViewChild(CalculadoraComponent) calculadora?:CalculadoraComponent

    nombre:string = "";
    sexo:string = "";
    altura:number = 160;
    peso:number = 55;

    diagnostico:string = "";

    incrementarPeso():void{
        this.peso++;
    }
    decrementarPeso():void{
        this.peso--;
    }

    incrementarAltura():void{
        this.altura++;
    }
    decrementarAltura():void{
        this.altura--;
    }
    reset():void{

        this.nombre = ""
        this.sexo = ""
        this.altura= 160;
        this.peso = 55;
    }
    set_diagnostico(diagnostico:string){
        this.diagnostico = diagnostico
    }

    mandarDatos():void{

        this.calculadora?.calcularIMC();

        this.reset();
    }


}
