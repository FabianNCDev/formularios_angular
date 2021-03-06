/* tslint:disable:no-string-literal */
/// <reference path="node_modules/angular2/ts/typings/node/node.d.ts"/>
/// <reference path="node_modules/angular2/typings/browser.d.ts"/>

import {bootstrap} from "angular2/platform/browser";
import {Component} from "angular2/core";
import {FORM_DIRECTIVES,FormBuilder,ControlGroup} from "angular2/common";

//sku : stockkepping unit
@Component({
  selector:'formulario-sku',
  directives:[FORM_DIRECTIVES],
  template:`
  <div class="ui raised segment">
    <h2 class="ui header">Formulario Stockkepping Unit:</h2>

    <form [ngFormModel]="myForm" (ngSubmit)="onSubmit(myForm.value)" class="ui form">
      <div class="field">
        <label for="skuInput">SKU</label>
        <input type="text" id="skuInput" placeholder="Stockkepping Unit" [ngFormControl]="myForm.controls['sku']"/>
      </div>
      <button type="submit" class="ui inverted orange button">
        Aceptar
        <i class="right arrow icon"></i>
      </button>
    </form>
  </div>
  `
})
class sku{
  myForm:ControlGroup;

  constructor(fb:FormBuilder){
    this.myForm=fb.group({
      'sku':['valor por defecto']
    });
  }
  onSubmit(value:string):void{
    console.log('has enviado el valor del formulario: ',value);
  }
}
bootstrap(sku);
