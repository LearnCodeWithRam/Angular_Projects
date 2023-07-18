import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyappComponent } from './myapp/myapp.component';
import { HelloappComponent } from './helloapp/helloapp.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HelloComponent } from './hello/hello.component';
import { NgforappComponent } from './ngforapp/ngforapp.component';
import { TableappComponent } from './tableapp/tableapp.component';
import { CalculatorService } from './calculator.service';
import { AdditionService } from './addition.service';
import { SortPipe } from './sort.pipe';
import { RfFormComponent } from './rf-form/rf-form.component';
import { TdfComponent } from './tdf/tdf.component';
import { RamserviceComponent } from './ramservice/ramservice.component';
import { UserComponent } from './user/user.component';
import { NgstyleappComponent } from './ngstyleapp/ngstyleapp.component';
import { ImageComponent } from './image/image.component';

@NgModule({
  declarations: [
    AppComponent,
    MyappComponent,
    HelloappComponent,
    HelloComponent,
    NgforappComponent,
    TableappComponent,
SortPipe,
RfFormComponent,
TdfComponent,
RamserviceComponent,
UserComponent,
NgstyleappComponent,
ImageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  
  ],
  providers: [CalculatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
