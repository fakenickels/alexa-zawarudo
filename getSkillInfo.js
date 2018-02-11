const app = require('./zawarudo/app')
const fs = require('fs')

require('./index')

fs.writeFileSync('schema.json', app.schema());
fs.writeFileSync('utterances.txt', app.utterances());
