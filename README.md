## For run node-mongo
1. cd node-mongo
2. npm start

## Week 4: OpenSSL setting for windows 10 64 [video](https://www.youtube.com/watch?v=jSkQ27sTto0)
** [image](public/images/openssl_problem_solve.png)
```
PS E:\webdev\coursera\nodejs\coursera-nodejs\bin> openssl genrsa -out private.key
Generating RSA private key, 2048 bit long modulus (2 primes)
..+++++
..+++++
e is 65537 (0x010001)
PS E:\webdev\coursera\nodejs\coursera-nodejs\bin> openssl req -new -key private.key -out cert.csr
You are about to be asked to enter information that will be incorporated
into your certificate request.
What you are about to enter is what is called a Distinguished Name or a DN.
There are quite a few fields but you can leave some blank
For some fields there will be a default value,
If you enter '.', the field will be left blank.
-----
Country Name (2 letter code) [AU]:BD
State or Province Name (full name) [Some-State]:Rajshahi
Locality Name (eg, city) []:
Organization Name (eg, company) [Internet Widgits Pty Ltd]:
Organizational Unit Name (eg, section) []:
Common Name (e.g. server FQDN or YOUR name) []:
Email Address []:

Please enter the following 'extra' attributes
to be sent with your certificate request
A challenge password []:
An optional company name []:
PS E:\webdev\coursera\nodejs\coursera-nodejs\bin> openssl x509 -req -in cert.csr -signkey private.key -out certificate.pem
Signature ok
subject=C = BD, ST = Rajshahi, O = Internet Widgits Pty Ltd
Getting Private key
PS E:\webdev\coursera\nodejs\coursera-nodejs\bin>
```