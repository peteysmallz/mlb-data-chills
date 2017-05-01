import { Routes, RouterModule } from '@angular/router';
import { PlayerDescriptionComponent } from './components/player-description/player-description.component';
import { ScoreboardComponent } from './components/scoreboard/scoreboard.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: '', component: AppComponent},
  { path: 'player/:id', component: PlayerDescriptionComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(routes);
