const { app } = require('./index');

const { getConn } = require('./db')

// get connection with db
// getConn();

app.listen(5000, function(){
    console.log(`server listen at port: 5000`);
})