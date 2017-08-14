import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
  `,
  styles: [`
    html {background-color: #f6f5f2;}
  `]
})
export class AppComponent {
  title = 'app';
}
