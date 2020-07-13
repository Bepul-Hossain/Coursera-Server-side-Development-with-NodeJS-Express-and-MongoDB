## For run node-mongo
1. cd node-mongo
2. npm start

## Week 4: OpenSSL setting for windows 10 64 [video](https://www.youtube.com/watch?v=jSkQ27sTto0)
Error
```
PS E:\webdev\coursera\nodejs\coursera-nodejs\bin> openssl req -new -key private.key -out cert.csr
unable to load Private Key
31100:error:0909006C:PEM routines:get_name:no start line:crypto\pem\pem_lib.c:745:Expecting: ANY PRIVATE KEY
```

** Solution [image](public/images/openssl_problem_solve.png)
```
PS E:\webdev\coursera\nodejs\coursera-nodejs\bin> openssl genrsa -out private.key
PS E:\webdev\coursera\nodejs\coursera-nodejs\bin> openssl req -new -key private.key -out cert.csr
PS E:\webdev\coursera\nodejs\coursera-nodejs\bin> openssl x509 -req -in cert.csr -signkey private.key -out certificate.pem
```