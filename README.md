<p align="center">
  <img src="https://avatars.githubusercontent.com/u/140859347?s=400&u=e2a829fbe9e3a9b893b32f18a1ed3ddd9c27fe86&v=4" width="200" alt="Coinc Logo" />
</p>

  <p align="center">A microsservice authentication.</p>
    <p align="center">

## Endpoints

- <b>(GET)</b> Users - https://4eir4uj94l.execute-api.us-east-1.amazonaws.com/dev/auth/users

- <b>(POST)</b> Add users - https://4eir4uj94l.execute-api.us-east-1.amazonaws.com/dev/auth/user/add

  Body:
  {
  "userId": "user-id",
  "firstName": "user-firstname",
  "lastName": "user-lastname",
  "email": "user-email",
  "password": "user-password"
  }

- <b>(POST)</b> Login - https://4eir4uj94l.execute-api.us-east-1.amazonaws.com/dev/auth/login
  
  Body:
  {
  "email": "user-email",
  "password": "user-password"
  }

- <b>(POST)</b> Verify Refresh token - https://4eir4uj94l.execute-api.us-east-1.amazonaws.com/dev/auth/verify-refresh-token
  
  Body:
  {
  "refreshToken": "user-refresh-token"
  }

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
