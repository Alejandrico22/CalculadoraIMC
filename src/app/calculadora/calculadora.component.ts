import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { HistorialComponent } from '../historial/historial.component';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {

    @Input() nombre:string = "";
    @Input() sexo:string = "";
    @Input() altura:number = 0;
    @Input() peso:number = 0;
    
    @Output() diagnosticoEnviado= new EventEmitter<string>();

    diagnostico?:string;
    imc?:number;

    @ViewChild(HistorialComponent) historial?:HistorialComponent

    calcularIMC():void{

        this.imc = this.peso/(this.altura/100)**2;
        this.diagnostico = `${this.nombre} está en `;

        if(this.sexo ==="" || this.nombre ===""){
            alert("Tienes que introducir un nombre y definir un sexo")
        }
        else{
            if(this.sexo === "Hombre"){

                if(this.imc<18.5){
                    this.diagnostico = this.diagnostico + `infrapeso, IMC es ${this.imc.toFixed(2)}`
                    this.emitirDiagnostico()
                }else if(this.imc>18.5 && this.imc<24.9){
                    this.diagnostico = this.diagnostico + `su peso ideal, IMC es ${this.imc.toFixed(2)}`
                    this.emitirDiagnostico()
                }
                else if(this.imc>25 && this.imc<29.9){
                    this.diagnostico = this.diagnostico + `peso algo superior al ideal, IMC es ${this.imc.toFixed(2)}`
                    this.emitirDiagnostico()
                }else{
                    this.diagnostico = this.diagnostico + `sobrepeso, IMC es ${this.imc.toFixed(2)}`
                    this.emitirDiagnostico()
                }
    
            }
            else if(this.sexo ==="Mujer"){
    
    
                if(this.imc<19.5){
                    this.diagnostico = this.diagnostico + `infrapeso, IMC es ${this.imc.toFixed(2)}`
                    this.emitirDiagnostico()
                }else if(this.imc>19.5 && this.imc<25.9){
                    this.diagnostico = this.diagnostico + `su peso ideal, IMC es ${this.imc.toFixed(2)}`
                    this.emitirDiagnostico()
                }
                else if(this.imc>26 && this.imc<30.9){
                    this.diagnostico = this.diagnostico + `peso algo superior al ideal, IMC es ${this.imc.toFixed(2)}`
                    this.emitirDiagnostico()
                }else{
                    this.diagnostico = this.diagnostico + `sobrepeso, IMC es ${this.imc.toFixed(2)}`
                    this.emitirDiagnostico()
                }
    
            }
        }
    }

    emitirDiagnostico(){
        this.historial?.addMessage(this.diagnostico || "");
        this.diagnosticoEnviado.emit(this.diagnostico)
        this.imc = 0;
    }

}
