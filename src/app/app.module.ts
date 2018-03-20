import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {BzgComponentsModule} from 'bzg-components';
import {AppComponent} from './app.component';
import {AppIconsComponent} from './app-icons/app-icons.component';

const customGenomeConfiguration = {
  'icons-sprite-path': 'assets/sprite.svg',
  'color-text-primary': '#555555',
  'color-text-secondary': '#B7B7B7',
  'color-button-primary': '#3e5c72',
  'color-button-secondary': 'transparent',
  'color-header-primary': '#edf4aa',
  'color-header-secondary': '#4285f4',
  'color-header-fill': '#ffffff',
  'color-icon-header-primary': '#cbc93f',
  'color-icon-header-secondary': '#3ccb50',
  'color-icon-header-fill': '#ffffff',
  'color-user-info': '#ffffff',
  'color-avatar': '#dadeda',
  'color-avatar-background': '#ffffff'
};

@NgModule({
  declarations: [
    AppComponent,
    AppIconsComponent
  ],
  imports: [
    BrowserModule,
    BzgComponentsModule.forRoot(customGenomeConfiguration)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
