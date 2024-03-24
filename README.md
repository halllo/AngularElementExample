# AngularElementExample

This workspace consists of two projects: 

- **hello-element** is an angular element web component
- **my-app** is the main the angular app using the element


## Develop

To develop the element run `npm run watch:hello-element` in a first terminal. It watches for changes, builds them, bundles them, and deploys the element to the assets folder of the app.

To develop the app run `npm run start` in a second terminal. It also watches for changes, builds them, and makes them available at https://localhost:4200/. The application will automatically reload if you change any of the source files.


## HTTPS

Generate a certificate for using HTTPS:

```bash
openssl genrsa -out server.key 2048
openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout server.key -out server.crt -config openssl.cnf
```

Import that cert into your operating system's Trusted Root Store to allow your browsers to trust it.
