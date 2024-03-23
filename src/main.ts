import { createApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { provideHttpClient, withInterceptors, withXsrfConfiguration } from '@angular/common/http';
import { environment } from './environments/environment';
import { HelloComponent } from './app/hello/hello.component';

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