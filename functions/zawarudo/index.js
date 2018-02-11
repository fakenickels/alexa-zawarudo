const app = require('./app')

app.intent('StopTime', {
  'utterances': ['stop time', 'stop the time']
},
  (request, response) => {
    response.audioPlayerPlayStream('REPLACE_ALL', {
      url: 'https://raw.githubusercontent.com/grsabreu/alexa-zawarudo/master/zawarudo.mp3',
      token: 'https://raw.githubusercontent.com/grsabreu/alexa-zawarudo/master/zawarudo.mp3',
      offsetInMilliseconds: 0
    })
    response.send()
  }
)

exports.handler = app.lambda()

