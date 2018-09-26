const express = require('express')
const app = express()
const port = 3000

//for testing connections etc
app.use('/', require('./test/libConnectionTest.js'));
app.use('/test', require('./test/postTest.js'))
app.use('/ctest', require('./test/ethNodeConnectionTest.js'));

app.use('/balances', require('./controller/checkBalance.js'));
app.listen(port, () => console.log(`Trial: listening on port ${port}!`))