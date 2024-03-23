import { createApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { provideHttpClient } from '@angular/common/http';
import { HelloComponent } from './hello.component';

(async () => {
  
  const app = await createApplication({
    providers: [
      provideHttpClient(),  
    ]
  });

  const HelloElement = createCustomElement(HelloComponent, {
    injector: app.injector
  });

  customElements.define('hello-element', HelloElement);

})();