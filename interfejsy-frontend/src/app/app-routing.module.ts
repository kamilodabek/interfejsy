import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {FormComponent} from "./form/form.component";
import {GraphicElementsComponent} from "./graphic-elements/graphic-elements.component";
import {ListComponent} from "./list/list.component";
import {GameComponent} from "./game/game.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/graphic', pathMatch: 'full' },
  { path: 'form', component: FormComponent },
  { path: 'graphic', component: GraphicElementsComponent },
  { path: 'list', component: ListComponent },
  { path: 'game', component: GameComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
