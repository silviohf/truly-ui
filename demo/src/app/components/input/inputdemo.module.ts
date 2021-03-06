import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';

import { InputDemo } from "./inputdemo.component";
import { InputModule } from '../../../../../src/input';
import { InputDemoRoutingModule } from "./inputdemo-routing.module";
import { CommonModule  } from '@angular/common';
import { HighlightJsModule } from 'ngx-highlight-js';


@NgModule({
  declarations: [
    InputDemo
  ],
  imports:[
    InputDemoRoutingModule,
    InputModule,
    CommonModule,
    FormsModule,
    HighlightJsModule
  ],
  exports: [
    InputDemo
  ]
})
export class InputDemoModule {}
