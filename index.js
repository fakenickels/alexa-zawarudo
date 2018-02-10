const app = require('./app')

app.intent('stopTime', {
  'utterances': ['stop time', 'stop the time']
},
  (request, response) => {
    response.audioPlayerPlayStream('ENQUEUE', {
      url: "https://next-song-url",
      offsetInMilliseconds: 0
    })
  }
)

// connect the alexa-app to AWS Lambda
exports.handler = app.lambda()

