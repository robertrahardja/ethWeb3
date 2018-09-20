const express = require('express')
const app = express()
const port = 3000

app.use('/', require('./controller/router.js'));

app.use('/test', require('./controller/test.js'))

app.listen(port, () => console.log(`Trial: listening on port ${port}!`))