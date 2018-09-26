const express = require('express')
const app = express()
const port = 3000

//for testing connections etc
app.use('/', require('./controller/libConnectionTest.js'));
app.use('/test', require('./controller/postTest.js'))
app.use('/ctest', require('./controller/ethNodeConnectionTest.js'));

app.use('/balances', require('./controller/checkBalance.js'));
app.listen(port, () => console.log(`Trial: listening on port ${port}!`))