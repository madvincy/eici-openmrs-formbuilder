import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppMaterialModule} from './app-material-module';
import {FormEntryModule} from 'ng2-openmrs-formentry';
import {AceEditorModule} from 'ng2-ace-editor';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import { FetchFormsService } from './Services/fetch-forms.service';
import {NavigatorService} from './Services/navigator.service';

import { AppComponent } from './app.component';
import { NavigatorComponent } from './form-editor/navigator/navigator.component';
import { SchemaEditorComponent } from './form-editor/schema-editor/schema-editor.component';
import { ElementEditorComponent } from './form-editor/element-editor/element-editor.component';
import { FormRendererComponent } from './form-editor/form-renderer/form-renderer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    SchemaEditorComponent,
    ElementEditorComponent,
    FormRendererComponent,
    
  ],
  imports: [
    BrowserModule,
    AppMaterialModule,
    ReactiveFormsModule,
    FormEntryModule,
    BrowserAnimationsModule,
    HttpModule,
    AceEditorModule
    
  ],
  providers: [FetchFormsService,NavigatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
