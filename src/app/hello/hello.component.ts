import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [],
  template: `
    <p>Hello!</p>
  `,
  styles: ``
})
export class HelloComponent {
  t = "";
}
