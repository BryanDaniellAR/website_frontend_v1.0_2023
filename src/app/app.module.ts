import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

//INICIO SERVICE
import { CargarScriptsService } from './services/cargar-scripts/cargar-scripts.service';
import { SafeUrlPipe } from './services/safe-pipe/safe-pipe.service';
//CONNECTORS
import { AboutComponent } from './connectors/about/about.component';
import { HomeComponent } from './connectors/home/home.component';
import { PortafolioComponent } from './connectors/portafolio/portafolio.component';
import { LanguageComponent } from './connectors/language/language.component';
import { ContactComponent } from './connectors/contact/contact.component';
import { ErrorComponent } from './connectors/error/error.component';

//COMPONENTS
import { AboutPerfilComponent } from './components/about/about-perfil/about-perfil.component';
import { AboutExperienceComponent } from './components/about/about-experience/about-experience.component';
import { HomeNameComponent } from './components/home/home-name/home-name.component';
import { HomeSpecialityComponent } from './components/home/home-speciality/home-speciality.component';
import { PortafolioProyectoComponent } from './components/portafolio/portafolio-proyecto/portafolio-proyecto.component';
import { LanguageDomainComponent } from './components/language/language-domain/language-domain.component';
import { ContactFanpageComponent } from './components/contact/contact-fanpage/contact-fanpage.component';
import { ContactFormComponent } from './components/contact/contact-form/contact-form.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeNameComponent,
    AboutComponent,
    AboutPerfilComponent,
    AboutExperienceComponent,
    PortafolioComponent,
    PortafolioProyectoComponent,
    LanguageComponent,
    HomeSpecialityComponent,
    LanguageDomainComponent,
    ContactComponent,
    ContactFanpageComponent,
    ContactFormComponent,SafeUrlPipe, ErrorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'website/frontend',component:HomeComponent},
      {path:'website/frontend/about',component:AboutComponent},
      {path:'website/frontend/portafolio',component:PortafolioComponent},
      {path:'website/frontend/language',component:LanguageComponent},
      {path:'website/frontend/contact',component:ContactComponent},
      {path: '', redirectTo: '/website/frontend', pathMatch: 'full' },
      {path: '**', component:ErrorComponent}
    ]),
    HttpClientModule,
  ],
  providers: [
    CargarScriptsService,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
