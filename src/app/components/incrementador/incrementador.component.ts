import { Component,  EventEmitter, Input, OnInit, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtPorcentaje') txtPorcentaje: ElementRef;

  @Input('nombre') leyenda: string = 'titulos';
  @Input() porcentaje: number = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
    // console.log('leyenda>>', this.leyenda);

  }

  ngOnInit() {
    //  console.log('leyenda>>', this.leyenda);
    //  console.log('leyenda>>', this.leyenda);
  }

  onChanges( newValue: number) {
     //let elementHtml: any = document.getElementById('porcentaje');
     console.log( this.txtPorcentaje );
     this.txtPorcentaje.nativeElement.value = this.porcentaje;
     //elementHtml.value =  this.porcentaje;
     this.cambioValor.emit(this.porcentaje);
      this.txtPorcentaje.nativeElement.focus(); 
  }

  changeValue(value) {
    if ( this.porcentaje > 100 || this.porcentaje < 0 ) {
      if ( this.porcentaje === 0) {
        this.porcentaje = 0;
      } else {
        this.porcentaje = 100;
      }

      return;
    }
    this.porcentaje = this.porcentaje + value;

    this.cambioValor.emit(this.porcentaje);
  }

}
