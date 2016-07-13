/* tslint:disable:no-string-literal */
/// <reference path="node_modules/angular2/ts/typings/node/node.d.ts"/>
/// <reference path="node_modules/angular2/typings/browser.d.ts"/>

import {bootstrap} from "angular2/platform/browser";
import {Component} from "angular2/core";
import {FORM_DIRECTIVES} from "angular2/common";

//sku : stockkepping unit
@Component({
  selector:'formulario-sku',
  directives:[FORM_DIRECTIVES],
  template:`
  <div class="ui raised segment">
    <h2 class="ui header">Formulario Stockkepping Unit:</h2>

    <form #f="ngForm" (ngSubmit)="onSubmit(f.value)" class="ui form">
      <div class="field">
        <label for="skuInput">SKU</label>
        <input type="text" id="skuInput" placeholder="Stockkepping Unit" ngControl="sku"/>
      </div>
      <button type="submit" class="ui inverted blue button">
        Aceptar
        <i class="right arrow icon"></i>
      </button>
    </form>
  </div>
  `
})
class sku{
  onSubmit(form:any):void{
    console.log('has enviado el valor del formulario: ',form);
  }
}
bootstrap(sku);
