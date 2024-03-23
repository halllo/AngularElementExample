import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [],
  template: `
    <p>Hello {{ name }}</p>
  `,
  styles: ``
})
export class HelloComponent {
  name = "world";
}
