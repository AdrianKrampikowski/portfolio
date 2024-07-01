import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TopsectionComponent } from './components/topsection/topsection.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { SkillsComponent } from './components/skills/skills.component';
import { LivebuttonComponent } from './shared/livebutton/livebutton.component';
import { GitbuttonComponent } from './shared/gitbutton/gitbutton.component';
import { OrangebuttonComponent } from './shared/orangebutton/orangebutton.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuitemsComponent } from './components/menuitems/menuitems.component';
import { ImprintComponent } from './components/imprint/imprint.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopsectionComponent,
    AboutmeComponent,
    SkillsComponent,
    LivebuttonComponent,
    GitbuttonComponent,
    OrangebuttonComponent,
    PortfolioComponent,
    ContactComponent,
    FooterComponent,
    MenuitemsComponent,
    ImprintComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
