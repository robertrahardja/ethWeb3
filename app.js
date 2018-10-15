const express = require('express')
const app = express()
const port = 3000

//for testing connections etc
app.use('/', require('./test/initConnectTests/libConnectionTest.js'));
app.use('/test', require('./test/initConnectTests/postTest.js'))
app.use('/ctest', require('./test/initConnectTests/ethNodeConnectionTest.js'));

app.use('/balances', require('./controller/checkBalance.js'));
app.use('/transactions', require('./controller/DefaultSend.js'));
app.use('/tokens', require('./controller/sendTokens.js'));
app.use('/history', require('./controller/transaction-history.js'));

module.exports = app.listen(port, () => console.log(`Listening on port ${port}!\n`))