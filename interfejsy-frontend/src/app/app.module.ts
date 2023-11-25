import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';
import { GraphicElementsComponent } from './graphic-elements/graphic-elements.component';
import {AppRoutingModule} from "./app-routing.module";
import { ListComponent } from './list/list.component';
import { GameComponent } from './game/game.component';
import {NgbCarouselModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SquareComponent } from './game/square/square.component';
import { BoardComponent } from './game/board/board.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FormComponent,
    GraphicElementsComponent,
    ListComponent,
    GameComponent,
    SquareComponent,
    BoardComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        NgbCarouselModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
