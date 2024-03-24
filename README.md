# AngularElementExample

Generate a certificate for using HTTPS:

```bash
openssl genrsa -out server.key 2048
openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout server.key -out server.crt -config openssl.cnf
```

Import that cert into your operating system's Trusted Root Store to allow your browsers to trust it.

Then run `ng serve` for a dev server. Navigate to `https://localhost:4200/`. The application will automatically reload if you change any of the source files.
