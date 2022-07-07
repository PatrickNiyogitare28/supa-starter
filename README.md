## supa-starter
An academic challenge to build a full stack react native expo and nodejs app.

The app implements authentication. APi build with nodejs and mongodb. The client is build with react native


## server

The server is a nodejs express & mongodb code base that serves the application API

### Running the server

You can find the post man API documentation included under `src/server/docs` and import it into your post man to test the API live.

Before you run the server 

- [X] Make sure you have created a `.env` file that will contain the **JWT_SECRET**

Refer th `.env.example` in the **server** directory


```sh
$ yarn start
```

## Client 

The client is a react native expo codebase that consumes the Auth API provided by the server

### Running the client

Before you run the client make sure you got `expo-cli` installed on your device

```sh
$ expo start
# or yarn start
```

## Preview

![register](https://github.com/PatrickNiyogitare28/supa-starter/blob/master/client/assets/register.png?raw=true)

![login](https://github.com/PatrickNiyogitare28/supa-starter/blob/master/client/assets/login.png?raw=true)
![onboard](https://github.com/PatrickNiyogitare28/supa-starter/blob/master/client/assets/onboard.png?raw=true)