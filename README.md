### Intro

This is a small api proxy server example built with Express / Node.js.

---

### Getting started

Clone the repository and install the dependencies:

```bash
$ git clone https://github.com/asgoshawk/api-proxy-server.git
$ cd api-proxy-server
$ npm install
```

Add a `.env` file in the root directory for enviromental variables.:

```bash
$ touch .env
```

Then, you can follow the `.env.example` file and fill the required value:

```
PORT=5000
NODE_ENV="dev"
API_BASE_URL_OPENWEATHERMAP=<Open Weather Map API URL>
API_KEY_NAME_OPENWEATHERMAP="appid"
API_KEY_VALUE_OPENWEATHERMAP=<Your Open Weather Map API KEY>

```

And then start the app by running command:

```bash
# Use node to serve
$ npm start

# Use nodemon to serve
$ npm run dev
```

After that, you can send a request with `localhost:5000/api?q=Taipei`, and get the response:

```javascript
{
  "coord": { "lon": 121.5319, "lat": 25.0478 },
  "weather": [
    {
      "id": 802,
      "main": "Clouds",
      "description": "scattered clouds",
      "icon": "03n"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 303.99,
    "feels_like": 306.74,
    "temp_min": 302.62,
    "temp_max": 304.84,
    "pressure": 1006,
    "humidity": 56
  },
  "visibility": 10000,
  "wind": { "speed": 3.6, "deg": 80 },
  "clouds": { "all": 40 },
  "dt": 1658834814,
  "sys": {
    "type": 2,
    "id": 266033,
    "country": "TW",
    "sunrise": 1658783889,
    "sunset": 1658832141
  },
  "timezone": 28800,
  "id": 1668341,
  "name": "Taipei",
  "cod": 200
}
```
