# Lógica de la aplicación

El template del AppComponent posee el formulario. Cuando el usuario introduce los datos requeridos, el App Component envía la información
al pulsar el botón calcular. El CalculadoraComponent recibe los datos mediante el decorador @Input() y realiza una serie de validaciones. 
Por último, envía el resultado del diagnóstico devuelve al AppComponent mediante el decorador @Output() y almacena el mismo en el array
de mensajes que se encuentra en el HistorialComponent.Los botones de reset y de clear devuelven el estado del formulario y el array de diagnosticos al predeterminado. 

## Comandos y funcionalidades usadas
ng generate component --> para generar los componentes usados en la práctica
*ngFor --> directiva usada para mostrar el array de mensajes de historial que se va rellenando dinámicamente
@ViewChild --> decorador usado para ejecutar el método de un componente hijo desde el padre. 
@Input y @Output --> entrada y salida de datos desde el padre y hacia el padre
Data binding --> para actualizar automáticamente el valor de una propiedad modificada desde el modelo en la vista de la aplicación 
[prop]="prop", y viceversa ([ngModel] = prop). 


