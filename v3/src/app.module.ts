import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SharedModule } from './shared.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule,RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { routes } from './app.routes';
import { UrlService } from './services/url.service.service';

@NgModule({
 declarations: [AppComponent],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterOutlet,
    SharedModule,
   
  ],
  bootstrap: [AppComponent],
  providers: [
    provideAnimationsAsync(),
    UrlService
  ],
})
export class AppModule {}
