// src/app/app.config.ts
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),                          // ✅ register routes
    provideClientHydration(withEventReplay()),
    importProvidersFrom(FormsModule),               // ✅ ngModel
    importProvidersFrom(RouterModule)               // ✅ router directives (routerLink, router-outlet)
  ]
};
