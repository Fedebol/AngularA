import { Directive, Input, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class AttrDirective {

  @Input() defaultColor='';
  @Input('appHighlight') highlightColor = '';

  constructor(private _elementRef: ElementRef) { }
  //comportamiento del mouse enter en el componente
  @HostListener('mouseenter') onMouseEnter(){
    this._cambiarColor(this.highlightColor || this.defaultColor || 'tomato');
    //ponemos color de fondo
  }

    //comportamiento para mouse leave en el componente
    @HostListener('mouseleave') onMouseLeave(){
    this._cambiarColor(null); //quitamos el color de fondo
  }

  /**
   * metodo encargado de cambiar el color de fondo de un componente
   * @param color color para el fondo del componente
   */
  private _cambiarColor(color: string | null){
    this._elementRef.nativeElement.style.backgroundColor = color;
  }





}
