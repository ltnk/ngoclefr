import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DownloadCvComponent } from './components/download-cv/download-cv.component';
import { CompetencesComponent } from './components/competences/competences.component';
import { QuiSuisJeComponent } from './components/qui-suis-je/qui-suis-je.component';
import { HeaderComponent } from './components/header/header.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { MentionsComponent } from './components/mentions/mentions.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProjectsComponent } from './components/projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    MentionsComponent,
    FooterComponent,
    DownloadCvComponent,
    CompetencesComponent,
    QuiSuisJeComponent,
    HeaderComponent,
    ProjectsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
