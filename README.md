# nest-mailer
NestJS Mailer submodule

### Required

1. `@nestjs-modules/mailer`
2. `nodemailer`
3. devDependencies: `@types/nodemailer`

### Add libs:
```yarn
yarn add @nestjs-modules/mailer nodemailer
yarn add -D @types/nodemailer
```

### Remove these libs:
```yarn
yarn remove @nestjs-modules/mailer @types/nodemailer nodemailer
```

### Env example
```dotenv
# Mailer module environments
MAILER_HOST=smtp.ethereal.email
MAILER_PORT=587
MAILER_USER=krystel63@ethereal.email
MAILER_PASSWORD=TrWNQMWMmsuyrX3mk7
```
