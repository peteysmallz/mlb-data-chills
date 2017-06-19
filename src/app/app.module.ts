import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { ScorecardComponent } from './components/scorecard/scorecard.component';
import { HeaderComponent } from './components/header/header.component';
import { PlayerDescriptionComponent } from './components/player-description/player-description.component';

import {TeamsService} from './services/teams.service';
import {HittingService} from './services/player/hitting.service';
import {PlayerProfileService} from './services/player/player-profile.service';
import {ScoresService} from './services/game/scores.service';
import {RosterService} from './services/team/roster.service';
import {UtilService} from './services/util.service';
import {ServerService} from './services/server.service';
import { ScoreboardComponent } from './components/scoreboard/scoreboard.component';
import {LeaderboardService} from './services/player/leaderboard.service';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { BoxscoreComponent } from './components/boxscore/boxscore.component';
import { BasesLiveComponent } from './components/bases-live/bases-live.component';
import { ScorecardExtendedComponent } from './components/scorecard-extended/scorecard-extended.component';
import { BallsStrikesOutsComponent } from './components/balls-strikes-outs/balls-strikes-outs.component';

@NgModule({
  declarations: [
    AppComponent,
    ScorecardComponent,
    HeaderComponent,
    PlayerDescriptionComponent,
    ScoreboardComponent,
    LeaderboardComponent,
    BoxscoreComponent,
    BasesLiveComponent,
    ScorecardExtendedComponent,
    BallsStrikesOutsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    appRoutingProviders,
    TeamsService, HittingService, PlayerProfileService, ScoresService, RosterService, UtilService, ServerService, LeaderboardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
