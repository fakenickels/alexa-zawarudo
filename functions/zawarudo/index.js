const app = require('./app')

app.intent('StopTime', {
  'utterances': ['stop time', 'stop the time']
},
  (request, response) => {
    response.audioPlayerPlayStream('REPLACE_ALL', {
      url: 'https://s3-sa-east-1.amazonaws.com/alexa-zawarudo/zawarudo.mp3',
      token: 'https://s3-sa-east-1.amazonaws.com/alexa-zawarudo/zawarudo.mp3',
      offsetInMilliseconds: 0
    })
    response.send()
  }
)

exports.handler = app.lambda()

