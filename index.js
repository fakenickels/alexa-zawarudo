const app = require('./app')

app.intent('stopTime', {
  'utterances': ['stop time', 'stop the time']
},
  (request, response) => {
    response.audioPlayerPlayStream('ENQUEUE', {
      url: "https://raw.githubusercontent.com/grsabreu/alexa-zawarudo/master/zawarudo.mp3",
      offsetInMilliseconds: 0
    })
  }
)

// connect the alexa-app to AWS Lambda
exports.handler = app.lambda()

